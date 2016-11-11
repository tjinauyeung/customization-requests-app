import React from 'react';

class RequestSideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      copied: false
    }
  }

  copyToMarkDown() {
    this.setState({
      copied: true
    });
  }

  render() {
    return (
      <aside className='request__left-column'>
        <ol>
          <li onClick={() => this.props.removeActiveRequest()}>
            <img src='./app/assets/images/icon-back.png' />
            <p>Go Back</p>
          </li>
          <li onClick={() => this.copyToMarkDown()}>
            <img 
              className={this.state.copied ? 'is-copied' : ''}
              src={this.state.copied? './app/assets/images/icon-copy-white.png' : './app/assets/images/icon-copy.png'}
            />
            <p>{this.state.copied ? 'Copied!' : 'Copy Ticket'}</p>
          </li>
          <li>
            <img src='./app/assets/images/icon-phabricator.png' />
            <p>Open Phabricator</p>
          </li>
        </ol>
      </aside>
    )  
  }
};

export default RequestSideBar;
