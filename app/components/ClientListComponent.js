import React from 'react';
import _ from 'lodash';
import moment from 'moment';

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
            { 
              this.chooseOrderByType().map((client) => {
                return (
                  <li 
                    className="clientlist__listitem"
                    key={client.token} 
                    onClick={() => this.getClientRequest(client)}>
                    <span className="clientlist__listitem__date">
                      {moment(client.submitDate, 'YYYY-MM-DD h:mm:ss').format('MMMM Do YYYY')}
                    </span>
                    <span className="clientlist__listitem__name">{client.clientName}
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
};

export default ClientListComponent;
