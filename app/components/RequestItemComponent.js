import React from 'react';

class RequestItemComponent extends React.Component {
  addRequestTitle(question) {
    let title;

    if (question === 'Your Usabilla username:') {
      title = 'User Info'
    }
    if (question === 'Have you designed your own buttons?') {
      title = 'Buttons'
    }
    if (question === 'Would you like your logo in the form?') {
      title = 'Feedback'
    }
    if (question === 'Should campaigns be the same as the feedback form?') {
      title = 'Campaign'
    }

    return !title || <h2 className='request__title'>{title}</h2>;
  }

  render() {
    return (
      <div>
        {this.addRequestTitle(this.props.question)}
        <h3>{this.props.question}</h3>
        <p>{this.props.request[this.props.question]}</p>
      </div>
    )
  }
}

export default RequestItemComponent;
