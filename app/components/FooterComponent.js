import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.scrollDirection === 'bottom' ? 'is-hidden' : ''}>
        Type `all` to get list of all customization requests.
      </footer>
    )  
  }
};

export default Footer;
