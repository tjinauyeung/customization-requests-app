import React from 'react';
import moment from 'moment';
import RequestItemComponent from './RequestItemComponent';
import RequestSideBar from './RequestSideBar';

class RequestViewComponent extends React.Component {
  render() {
    return (
      <div>
        <RequestSideBar removeActiveRequest={this.props.removeActiveRequest}/>
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
