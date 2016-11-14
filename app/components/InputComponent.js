import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class InputComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  handleKeyPress(event) {
    this.props.minimizeForm();
    let inputValue = ReactDOM.findDOMNode(this.refs.input).value.toLowerCase();
    if (inputValue === 'all') {
      return this.props.fetchClientList();
    } else {
      return this.props.searchClientList(inputValue);
    }
  }

  render() {
    return (
      <input
        ref='input'
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        onKeyUp={_.debounce(event => this.handleKeyPress(event), 200)} />
    );
  }
}

export default InputComponent;
