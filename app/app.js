import { TypeFormDataService } from './service/TypeFormDataService';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
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

  minimizeForm() {
    this.setState({
      fullscreen: false
    })
  }

  fetchClientList() {
    this.service.getClientList()
      .then(clientlist => this.setState({clientlist}))
  }

  render() {
    return (
      <div className="container">
        <form className={this.state.fullscreen ? '' : 'minimize' }>
          <img className="logo" src="app/assets/images/logo-usabilla.svg"/>
          <InputComponent 
            minimizeForm={this.minimizeForm.bind(this)}
            fetchClientList={this.fetchClientList.bind(this)}
          />
        </form>
        <main>
          { _.isEmpty(this.state.clientlist) ? <LoaderComponent /> : <ClientListComponent clientlist={this.state.clientlist} /> }
        </main>
        <footer>
          Type `all` to get list of customization requests.
        </footer>
      </div>
    );
  }
}

export default App;
