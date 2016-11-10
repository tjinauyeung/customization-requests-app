import React from 'react';
import _ from 'lodash';

class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.scrollDirection === 'bottom' ? 'is-hidden' : ''}>
        {
          _.isEmpty(this.props.activeRequest) ? 
          'Search for customization or type `all` to get list of all customization requests' :
          'Follow the Instructions \u2014 1. Copy the ticket \u2014 2. Open Phabricator \u2014 3. Paste in the ticket \u2014 4. Add Customizations in project tag'
        }
      </footer>
    )  
  }
};

export default Footer;
