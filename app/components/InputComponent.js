import React from 'react';
import {debounce} from 'throttle-debounce';

class InputComponent extends React.Component {
  constructor() {
    super();
  }

  // TODO: Refactor Keyboard handling
  handleKeyPress(event) {
    event.persist();

    this.props.minimizeForm();

    debounce(500, () => {
      if (event.target.value === 'all') {
        return this.props.fetchClientList();
      } else {
        return this.props.searchClientList(event.target.value);
      }
    })();
  }

  render() {
    return (
      <input
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        onKeyUp={event => this.handleKeyPress(event)} />
    );
  }
}

export default InputComponent;
