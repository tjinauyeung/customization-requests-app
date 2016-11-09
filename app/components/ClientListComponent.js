import React from 'react';
import _ from 'lodash';

class ClientListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      sortedByDate: true
    }
  }

  setSortedByDateState(boolean) {
    this.setState({
      sortedByDate: boolean
    })
  }

  checkSortingType() {
    return this.state.sortedByDate ? this.sortClientListByDate() : this.sortClientListByAlphabet()
  }

  sortClientListByAlphabet() {
    return _.orderBy(this.props.clientlist, 'clientName', 'asc');
  }

  sortClientListByDate() {
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
            <li className={this.state.sortedByDate && 'is-active'} onClick={() => this.setSortedByDateState(true)}>Newest</li>
            <li className={!this.state.sortedByDate && 'is-active'} onClick={() => this.setSortedByDateState(false)}>A - Z</li>
          </ul>
        </div>
        <div>
          <ul className="clientlist__list">
            { this.checkSortingType().map(client => <li key={client.token} onClick={() => this.getClientRequest(client)}><span>{client.submitDate}</span> {client.clientName} </li> )}
          </ul>
        </div>
      </div>
    )
  }
};

export default ClientListComponent;
