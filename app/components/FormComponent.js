import React from 'react';
import classNames from 'classnames';
import InputComponent from './InputComponent';

class FormComponent extends React.Component {
  render() {
    let formClass = classNames({
      'minimize': !this.props.fullscreen,
      'is-hidden': this.props.scrollDirection === 'bottom'
    });

    return (
      <form className={formClass}>
        <img className="logo" src="app/assets/images/logo-usabilla.svg"/>
        <InputComponent 
          minimizeForm={() => this.props.minimizeForm()}
          fetchClientList={() => this.props.fetchClientList()}
          searchClientList={input => this.props.searchClientList(input)}
        />
      </form>
    )  
  }
};

export default FormComponent;
