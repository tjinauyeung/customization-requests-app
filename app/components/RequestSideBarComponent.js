import React from 'react';
import ReactDOM from 'react-dom';
import ClipboardButton from 'react-clipboard.js';
import toMarkDown from 'to-markdown';

class RequestSideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      requestToCopy: ''
    }
  }

  convertToMarkDown() {
    let content = document.querySelector('.request__main-panel').innerHTML;
    let removeDivTags = {
      filter: 'div',
      replacement: content => `${content}`
    }
    let removeSpanTags = {
      filter: 'span',
      replacement: content => `${content}`
    }
    return toMarkDown(content, {converters: [removeDivTags, removeSpanTags]});
  }

  componentDidMount() {
    this.setState({
      requestToCopy: this.convertToMarkDown()
    });
  }

  render() {
    return (
      <aside className='request__side-bar'>
        <ol>
          <li onClick={() => this.props.removeActiveRequest()}>
            <img src='./app/assets/images/icon-back.png' />
            <p>Go Back</p>
          </li>
          <li>
            <ClipboardButton
              onClick={() => this.setState({copied: true})}
              data-clipboard-text={this.state.requestToCopy}
            >
              <img 
                className={this.state.copied ? 'is-copied' : ''}
                src={this.state.copied? './app/assets/images/icon-copy-white.png' : './app/assets/images/icon-copy.png'}
              />
              <p>{this.state.copied ? 'Copied!' : 'Copy Ticket'}</p>
            </ClipboardButton>
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
