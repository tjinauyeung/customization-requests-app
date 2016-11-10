import _ from 'lodash';
import React from 'react';
import { TypeFormDataService } from './service/TypeFormDataService';
import InputComponent from './components/InputComponent';
import ClientListComponent from './components/ClientListComponent';
import RequestViewComponent from './components/RequestViewComponent';
import LoaderComponent from './components/LoaderComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: true,
      clientlist: [],
      currentRequest: {},
      currentClient: {}
    }
    this.service = new TypeFormDataService;
  }

  minimizeForm() {
    return this.setState({
      fullscreen: false
    })
  }

  fetchClientList() {
    return this.service.getClientList()
      .then(clientlist => this.setState({clientlist}))
  }

  /**
   * @param String
   */
  searchClientList(input) {
    return this.service.getClientList()
      .then((clientlist) => {
        return this.setState({ 
          clientlist: _.filter(clientlist, client => _.startsWith(client.clientName, input))
        });
      });
  }

  handleClick(client) {
    return this.service.getSpecificRequest(client)
      .then((request) => {
        return this.service.formatRequest(request)})
      .then((currentRequest) => {
        return this.setState({
          currentRequest: currentRequest,
          currentClient: client
        });
      });
  }

  removeCurrentRequest() {
    return this.setState({
      currentRequest: {}
    })
  }

  render() {
    return (
      <div className="container">
        <form className={this.state.fullscreen ? '' : 'minimize' }>
          <img className="logo" src="app/assets/images/logo-usabilla.svg"/>
          <InputComponent 
            minimizeForm={() => this.minimizeForm()}
            fetchClientList={() => this.fetchClientList()}
            searchClientList={input => this.searchClientList(input)}
          />
        </form>
        <main>
          {_.isEmpty(this.state.clientlist) ? 
            <LoaderComponent /> :
            _.isEmpty(this.state.currentRequest) ?
              <ClientListComponent 
                clientlist={this.state.clientlist} 
                handleClick={client => this.handleClick(client)}/> :
              <RequestViewComponent client={this.state.currentClient} request={this.state.currentRequest} removeCurrentRequest={() => this.removeCurrentRequest()}/>}
        </main>
        <footer>
          Type `all` to get list of all customization requests.
        </footer>
      </div>
    );
  }
}

export default App;
