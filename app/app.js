import _ from 'lodash';
import React from 'react';
import { debounce } from 'throttle-debounce';
import { TypeFormDataService } from './service/TypeFormDataService';
import FormComponent from './components/FormComponent';
import FooterComponent from './components/FooterComponent';
import LoaderComponent from './components/LoaderComponent';
import MainComponent from './components/MainComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: true,
      clientlist: [],
      activeRequest: {},
      currentClient: {},
      scrollDirection: '',
      lastScrollPos: 0
    };
    this.service = new TypeFormDataService;
  }

  handleScroll(event) {
    if (this.state.lastScrollPos > event.currentTarget.scrollTop) {
      this.setState({
        scrollDirection: 'top',
        lastScrollPos: event.currentTarget.scrollTop
      });
    } else if (this.state.lastScrollPos < event.currentTarget.scrollTop) {
      this.setState({
        scrollDirection: 'bottom',
        lastScrollPos: event.currentTarget.scrollTop
      });
    }
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

  searchClientList(input) {
    return this.service.getClientList()
      .then((clientlist) => {
        return this.setState({ 
          clientlist: _.filter(clientlist, client => _.startsWith(client.clientName, input))
        });
      });
  }

  getRequest(client) {
    return this.service.getSpecificRequest(client)
      .then((request) => {
        return this.service.formatRequest(request)})
      .then((activeRequest) => {
        return this.setState({
          activeRequest: activeRequest,
          currentClient: client
        });
      });
  }

  removeActiveRequest() {
    return this.setState({
      activeRequest: {}
    })
  }

  render() {
    return (
      <div className="container" onScroll={_.throttle((event) => this.handleScroll(event), 3000)}>
        <FormComponent
          fullscreen={this.state.fullscreen}
          scrollDirection={this.state.scrollDirection}
          minimizeForm={() => this.minimizeForm()}
          fetchClientList={() => this.fetchClientList()}
          searchClientList={input => this.searchClientList(input)}
        />
        {_.isEmpty(this.state.clientlist) ?
          <LoaderComponent /> :
          <MainComponent 
            clientlist={this.state.clientlist}
            activeRequest={this.state.activeRequest}
            currentClient={this.state.currentClient}
            getRequest={client => this.getRequest(client)}
            removeActiveRequest={() => this.removeActiveRequest()}
          />}
        <FooterComponent activeRequest={this.state.activeRequest} scrollDirection={this.state.scrollDirection}/>
      </div>
    );
  }
}

export default App;
