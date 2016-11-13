import React from 'react';
import moment from 'moment';
import RequestItemComponent from './RequestItemComponent';

class RequestMainPanelComponent extends React.Component {
  render() {
    return (
      <article className='request__main-panel'>
        <h2 className='request__clientName'>{this.props.client.clientName}</h2>
        <p className='request__date'>
          Submitted on {moment(this.props.client.submitDate, 'YYYY-MM-DD h:mm:ss').format('MMMM Do YYYY')}
        </p>
        {Object.keys(this.props.request)
          .map(question => {
            return <RequestItemComponent key={question} question={question} request={this.props.request} />
          })
        }
      </article>
    )  
  }
};

export default RequestMainPanelComponent;
