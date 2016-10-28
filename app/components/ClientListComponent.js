import React from 'react';
import ReactDOM from 'react-dom';

class ClientListComponent extends React.Component {
  render() {
    return (
      <ul>
        { console.log(this.props.clientlist) }
        { this.props.clientlist.map(client => <li key={client.token}>{client.clientName}</li>) }
      </ul>
    );
  }
}

export default ClientListComponent;
