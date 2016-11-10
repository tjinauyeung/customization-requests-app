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
          <div>
            <h2>{this.props.client.clientName}</h2>
            <h4 className='request__date'>{moment(this.props.client.submitDate, 'YYYY-MM-DD h:mm:ss').format('MMMM Do YYYY')}</h4>
          </div>
          <div>
            <h4 className='request__subtitle'>Instructions</h4>
            <ol>
              <li>Click on copy</li>
              <li>Go to phabricator.com</li>
              <li>Paste in the request</li>
              <li>Don't forget to add the tag!</li>
            </ol>
          </div>
          <button className='btn btn--med btn--primary' onClick={() => this.handleClick()}>All Requests</button>
          <button className='btn btn--med btn--cta'>Copy Request</button>
        </aside>
        <article className='request__main-column'>
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
