import React from 'react';
import ReactDOM from 'react-dom';

class InputComponent extends React.Component {
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.inputField).focus(); 
  }

  // TODO: Refactor Keyboard handling
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.minimizeForm();
    }

    if (event.target.value === 'all') {
      this.props.fetchClientList();
    }
  }

  render() {
    return (
      <input ref="inputField" onKeyPress={this.handleKeyPress.bind(this)}/>
    );
  }
}

export default InputComponent;
