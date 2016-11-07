import React from 'react';
import _ from 'lodash';

class ClientListComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      sortedByDate: true
    }
  }

  setSortedDateToTrue() {
    this.setState({
      sortedByDate: true
    })
  }

  setSortedDateToFalse() {
    this.setState({
      sortedByDate: false
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

  render() {
    return (
      <div>
      <div className="clientlist__filter">
        <ul>
          <li className={this.state.sortedByDate && 'is-active'} onClick={this.setSortedDateToTrue.bind(this)}>Date</li>
          <li className={!this.state.sortedByDate && 'is-active'} onClick={this.setSortedDateToFalse.bind(this)}>A - Z</li>
        </ul>
      </div>
      <div>
        <ul className="clientlist__list">
          <li><span>Date</span><span>Name</span></li>
          { this.checkSortingType().map(client => <li key={client.token}><span>{client.submitDate}</span> {client.clientName}</li> )}
        </ul>
      </div>
      </div>
    )
  }
};

export default ClientListComponent;
