import React from 'react';

class RequestSideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      copied: false
    }
  }

  render() {
    return (
      <aside className='request__left-column'>
        <ol>
          <li onClick={() => this.props.removeActiveRequest()}>
            <img
              src='./app/assets/images/icon-back.png' />
            Go Back
          </li>
          <li onClick={() => this.setState({copied: true})}>
            <img 
              className={this.state.copied ? 'is-copied' : ''}
              src={this.state.copied? './app/assets/images/icon-copy-white.png' : './app/assets/images/icon-copy.png'}/>
            {this.state.copied ? 'Copied!' : 'Copy Ticket'}
          </li>
          <li>
            <img src='./app/assets/images/icon-phabricator.png' />
            Open Phabricator
          </li>
        </ol>
      </aside>
    )  
  }
};

export default RequestSideBar;
