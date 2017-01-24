import React from 'react';
import _ from 'lodash';
import InputComponent from './InputComponent';
import ClientListComponent from './ClientListComponent';
import RequestViewComponent from './RequestViewComponent';

class MainComponent extends React.Component {
  render() {
    return (
      <main>
        {
          _.isEmpty(this.props.activeRequest)
          ? <ClientListComponent 
              clientlist={this.props.clientlist} 
              getRequest={client => this.props.getRequest(client)}/> 
          : <RequestViewComponent 
              client={this.props.currentClient}
              request={this.props.activeRequest}
              removeActiveRequest={() => this.props.removeActiveRequest()}/>
        }
      </main>
    )  
  }
};

export default MainComponent;
