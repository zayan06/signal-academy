import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`Feedback Sent!`);
    this.setState({ feedback: '' });
  }

  render() {
    return (
      <div className="container">
        <h2>Feedback</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea 
            rows="5" 
            placeholder="Enter your thoughts here..."
            value={this.state.feedback}
            onChange={(e) => this.setState({ feedback: e.target.value })}
            required
          />
          <button type="submit" className="btn-submit" style={{ marginTop: '1rem' }}>Send Feedback</button>
        </form>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p><strong>Email:</strong> support@signalacademy.com</p>
          <p><strong>Address:</strong> 123 Green Light Blvd, Intersection City</p>
        </div>
      </div>
    );
  }
}