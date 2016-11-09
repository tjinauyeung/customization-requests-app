import React from 'react';
import _ from 'lodash';

class ClientListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      orderByDate: true
    }
  }

  setSortedByDateState(boolean) {
    this.setState({
      orderByDate: boolean
    })
  }

  chooseOrderByType() {
    return this.state.orderByDate ? this.orderByDate() : this.orderByAlphabet()
  }

  orderByAlphabet() {
    return _.orderBy(this.props.clientlist, 'clientName', 'asc');
  }

  orderByDate() {
    return _.orderBy(this.props.clientlist, 'submitDate', 'desc');
  }

  getClientRequest(client) {
    return this.props.handleCli(client);
  }

  render() {
    return (
      <div>
        <div className="clientlist__filter">
          <ul>
            <li className={this.state.orderByDate ? 'is-active' : ''} onClick={() => this.setSortedByDateState(true)}>Newest</li>
            <li className={!this.state.orderByDate ? 'is-active' : ''} onClick={() => this.setSortedByDateState(false)}>A - Z</li>
          </ul>
        </div>
        <div>
          <ul className="clientlist__list">
            { this.chooseOrderByType().map(client => <li key={client.token} onClick={() => this.getClientRequest(client)}><span>{client.submitDate}</span> {client.clientName} </li> )}
          </ul>
        </div>
      </div>
    )
  }
};

export default ClientListComponent;
