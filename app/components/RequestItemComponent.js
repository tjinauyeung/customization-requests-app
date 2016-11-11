import React from 'react';

class RequestItemComponent extends React.Component {
  addRequestTitle(question) {
    let title;

    switch(question) {
      case 'Your Usabilla username:':
        title = 'Account Info';
        break;
      case 'Have you designed your own buttons?':
        title = 'Buttons';
        break;
      case 'Would you like your logo in the form?':
        title = 'Feedback';
        break;
      case 'Should campaigns be the same as the feedback form?':
        title = 'Campaign';
        break;
      default:
        title = undefined;
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
