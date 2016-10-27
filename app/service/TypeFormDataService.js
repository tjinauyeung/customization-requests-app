const _ = require('lodash');

const config = {
  apiKey: 'e98c3e4cea26c93ad374f49136da7c9aaa646da2',
  uid: 'yhPhjr',
  url: 'https://api.typeform.com/v1/form/',
}

const url = config.url + config.uid + '?key=' + config.apiKey + '&completed=true';

export class TypeFormDataService {
  constructor() {
    this.data = undefined;
  }

  /**
   * Returns array of responses
   * @return {Promise.<Array>}
   */
  fetchData() {
    const service = this;

    if (this.data) {
      console.log('using cached data!');
      return new Promise((resolve) => resolve(service.data));
    }

    return fetch(url)
      .then(res => res.text())
      .then(body => JSON.parse(body))
      .then(data => {
        this.data = data;
        return this.data;
      });
  }

  /**
   * Returns array of responses
   * @return {Promise.<Array>}
   */
  getResponses() {
    return this.fetchData().then(data => data.responses)
  }

  /**
   * Returns array of questions
   * @return {Promise.<Array>}
   */
  getQuestions() {
    return this.fetchData().then(data => data.questions)
  }

  /**
   * Returns new array with client names and submit dates
   * @return {Promise.<Array>}
   */
  getClientList() {
    return this.fetchData().then((data) => {
      let clientList = data.responses.map((response) => {
        return {
          id: response.token,
          clientName: response.answers.textfield_16321742,
          submitDate: response.metadata.date_submit 
        }
      });
      return clientList;
    });
  }

  getSpecificRequest(client) {
    return this.fetchData().then((data) => {
      return data.responses.filter((response) => response.token === client.token && response);
    });
  }
}
