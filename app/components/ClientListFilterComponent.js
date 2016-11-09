import React from 'react';

class ClientListFilterComponent extends React.Component {

  handleClick(boolean) {
    this.props.handleClick(boolean)
  }

  render() {
    return (
      <div className="clientlist__filter">
        <ul>
          <li className={this.props.orderByDate ? 'is-active' : ''} onClick={() => this.handleClick(true)}>Newest</li>
          <li className={!this.props.orderByDate ? 'is-active' : ''} onClick={() => this.handleClick(false)}>A - Z</li>
        </ul>
      </div>
    );
  }
}

export default ClientListFilterComponent;
