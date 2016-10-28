import React from 'react';
import ReactDOM from 'react-dom';

class InputComponent extends React.Component {
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
      <input onKeyPress={this.handleKeyPress.bind(this)} />
    );
  }
}

export default InputComponent;
