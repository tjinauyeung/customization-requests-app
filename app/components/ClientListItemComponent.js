import React from 'react';
import moment from 'moment';

class ClientListItemComponent extends React.Component {
  handleClick(client) {
    return this.props.handleClick(client)
  }

  render() {
    return (
      <li 
        className='clientlist__listitem'
        onClick={() => this.handleClick(this.props.client)}
      >
        <span className='clientlist__listitem__date'>
          { moment(this.props.client.submitDate, 'YYYY-MM-DD h:mm:ss').format('MMMM Do YYYY') }
        </span>
        <span className='clientlist__listitem__name'>
          {this.props.client.clientName}
        </span>
      </li>
    );
  }
}

export default ClientListItemComponent;
