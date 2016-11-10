import React from 'react';

class ClientListFilterComponent extends React.Component {
  render() {
    return (
      <div className='clientlist__filter'>
        <ul>
          <li className={this.props.orderByDate ? 'is-active' : ''} onClick={() => this.props.handleClick(true)}>Newest</li>
          <li className={!this.props.orderByDate ? 'is-active' : ''} onClick={() => this.props.handleClick(false)}>A - Z</li>
        </ul>
        <ul>
          <li className={!this.props.gridView ? 'is-active' : ''} onClick={() => this.props.changeToGridView(false)}>List</li>
          <li className={this.props.gridView ? 'is-active' : ''} onClick={() => this.props.changeToGridView(true)}>Grid</li>
        </ul>
      </div>
    );
  }
}

export default ClientListFilterComponent;
