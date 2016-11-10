import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import ClientListFilterComponent from './ClientListFilterComponent';
import ClientListItemComponent from './ClientListItemComponent';

class ClientListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      orderByDate: true,
      gridView: false
    }
  }

  setGridView(boolean) {
    this.setState({
      gridView: boolean
    })
  }

  setSortedByDateState(boolean) {
    this.setState({
      orderByDate: boolean
    })
  }

  chooseOrderByType() {
    return this.state.orderByDate ? this.orderByDate() : this.orderByAlphabet();
  }

  orderByAlphabet() {
    return _.orderBy(this.props.clientlist, 'clientName', 'asc');
  }

  orderByDate() {
    return _.orderBy(this.props.clientlist, 'submitDate', 'desc');
  }

  getClientRequest(client) {
    return this.props.handleClick(client);
  }

  render() {
    return (
      <div>
        <ClientListFilterComponent 
          gridView={this.state.gridView}
          changeToGridView={boolean => this.setGridView(boolean)}
          orderByDate={this.state.orderByDate}
          handleClick={boolean => this.setSortedByDateState(boolean)}
        />
        <ul className={this.state.gridView ? "clientlist__list grid" : "clientlist__list"}>
          {this.chooseOrderByType().map(client => <ClientListItemComponent 
                                                    gridView={this.state.gridView}
                                                    key={client.token}
                                                    handleClick={client => this.getClientRequest(client)}
                                                    client={client}/>)}
        </ul>
      </div>
    )
  }
};

export default ClientListComponent;
