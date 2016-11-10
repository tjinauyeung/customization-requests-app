import React from 'react';

class ClientListFilterComponent extends React.Component {
  handleClick(boolean) {
    return this.props.handleClick(boolean);
  }

  changeToGridView(boolean) {
    return this.props.changeToGridView(boolean);
  }

  render() {
    return (
      <div className='clientlist__filter'>
        <ul>
          <li className={this.props.orderByDate ? 'is-active' : ''} onClick={() => this.handleClick(true)}>Newest</li>
          <li className={!this.props.orderByDate ? 'is-active' : ''} onClick={() => this.handleClick(false)}>A - Z</li>
        </ul>
        <ul>
          <li className={!this.props.gridView ? 'is-active' : ''} onClick={() => this.changeToGridView(false)}>List</li>
          <li className={this.props.gridView ? 'is-active' : ''} onClick={() => this.changeToGridView(true)}>Grid</li>
        </ul>
      </div>
    );
  }
}

export default ClientListFilterComponent;
