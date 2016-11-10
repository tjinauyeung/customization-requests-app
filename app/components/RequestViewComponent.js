import React from 'react';
import moment from 'moment';
import RequestItemComponent from './RequestItemComponent';

class RequestViewComponent extends React.Component {
  handleClick() {
    return this.props.removeCurrentRequest();
  }

  render() {
    return (
      <div>
        <aside className='request__left-column'>
          <ol>
            <li onClick={() => this.handleClick()}>
              <img src='./app/assets/images/icon-back.png' />
              Go Back
            </li>
            <li>
              <img src='./app/assets/images/icon-copy.png' />
              Copy Ticket
            </li>
            <li>
              <img src='./app/assets/images/icon-phabricator.png' />
              Open Phabricator
            </li>
          </ol>
        </aside>
        <article className='request__main-column'>
          <h2 className='request__clientName'>{this.props.client.clientName}</h2>
          <h4 className='request__date'>
            Submitted on {moment(this.props.client.submitDate, 'YYYY-MM-DD h:mm:ss').format('MMMM Do YYYY')}
          </h4>
          {Object.keys(this.props.request)
            .map(question => {
              return <RequestItemComponent key={question} question={question} request={this.props.request} />
            })
          }
        </article>
      </div>
    )
  }
}

export default RequestViewComponent;
