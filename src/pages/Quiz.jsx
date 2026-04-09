import React, { useState } from 'react';

const quizData = [
  { question: "What is the general rule for overtaking in India?", options: ["Left", "Right", "Either", "Honk continuously"], answer: 1 },
  { question: "What does a circular road sign indicate?", options: ["Information", "Warning", "Mandatory regulation", "Directions"], answer: 2 },
  { question: "What is the legal limit for Blood Alcohol Concentration (BAC) for driving in India?", options: ["0.00%", "30 mg per 100 ml", "80 mg per 100 ml", "50 mg per 100 ml"], answer: 1 },
  { question: "Can you make a 'Free Left' turn on a red light in India?", options: ["Yes, always", "No, never", "Only if there is a specific sign", "Only at night"], answer: 2 },
  { question: "What does a triangular road sign indicate?", options: ["Mandatory order", "Cautionary / Warning", "Hospital ahead", "No parking zone"], answer: 1 }
];

function QuestionCard({ q, index, selectedAns, onSelect, isSubmitted }) {
  const isCorrect = selectedAns === q.answer;
  const boxStyle = isSubmitted 
    ? { borderLeftColor: isCorrect ? "#10b981" : "#ef4444", backgroundColor: isCorrect ? "#f0fdf4" : "#fef2f2" }
    : {};

  return (
    <div className="question-box" style={boxStyle}>
      <div style={{ fontWeight: '600', marginBottom: '10px' }}>{index + 1}. {q.question}</div>
      {q.options.map((opt, oi) => (
        <label key={oi} className="option-label">
          <input 
            type="radio" 
            name={`q${index}`} 
            checked={selectedAns === oi}
            onChange={() => onSelect(index, oi)}
            disabled={isSubmitted}
          /> 
          {opt}
        </label>
      ))}
      {isSubmitted && (
        <div style={{ color: isCorrect ? "#10b981" : "#ef4444", marginTop: '10px', fontWeight: 'bold' }}>
          {isCorrect ? "✅ Correct!" : `❌ Incorrect. The correct answer is: ${q.options[q.answer]}`}
        </div>
      )}
    </div>
  );
}

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (qIndex, optIndex) => setAnswers({ ...answers, [qIndex]: optIndex });

  const calculateScore = () => {
    if (Object.keys(answers).length < quizData.length) return alert("Answer all questions!");
    let score = 0;
    quizData.forEach((q, i) => { if (answers[i] === q.answer) score++; });
    setResult({ score, percentage: (score / quizData.length) * 100 });
  };

  const resetQuiz = () => { setAnswers({}); setResult(null); };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>The Indian Traffic Law Exam</h1>
      {quizData.map((q, i) => (
        <QuestionCard 
          key={i} q={q} index={i} 
          selectedAns={answers[i]} 
          onSelect={handleSelect}
          isSubmitted={result !== null}
        />
      ))}
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <button onClick={calculateScore} className="btn-submit">Submit Exam</button>
        <button onClick={resetQuiz} className="btn-reset">Reset</button>
      </div>
      {result && (
        <div style={{ textAlign: 'center', marginTop: '25px', padding: '20px', fontSize: '1.3em', fontWeight: 'bold' }}>
          Score: {result.score}/{quizData.length} ({result.percentage}%)
        </div>
      )}
    </div>
  );
}