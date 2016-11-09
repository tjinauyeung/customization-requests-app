import { TypeFormDataService } from './service/TypeFormDataService';
import _ from 'lodash';
import React from 'react';
import InputComponent from './components/InputComponent';
import ClientListComponent from './components/ClientListComponent';
import LoaderComponent from './components/LoaderComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: true,
      clientlist: []
    }
    this.service = new TypeFormDataService;
  }

  /**
   * 
   */
  minimizeForm() {
    this.setState({
      fullscreen: false
    })
  }

  fetchClientList() {
    this.service.getClientList()
      .then(clientlist => this.setState({clientlist}))
  }

  /**
   * @param string
   * @return 
   */
  searchClientList(inputValue) {
    return this.service.getClientList()
      .then((clientlist) => {
        this.setState({ 
          clientlist: _.filter(clientlist, client => _.startsWith(client.clientName, inputValue))
        });
      });
  }

  handleClick(client) {
    return console.log(client);
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
          { _.isEmpty(this.state.clientlist) ? <LoaderComponent /> : <ClientListComponent clientlist={this.state.clientlist} handleClick={client => this.handleClick(client)}/> }
        </main>
        <footer>
          Type `all` to get list of customization requests.
        </footer>
      </div>
    );
  }
}

export default App;
