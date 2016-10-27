import _ from 'lodash';

const config = {
  apiKey: 'e98c3e4cea26c93ad374f49136da7c9aaa646da2',
  uid: 'yhPhjr',
  url: 'https://api.typeform.com/v1/form/',
}

const url = config.url + config.uid + '?key=' + config.apiKey + '&completed=true';

export class TypeFormDataService {
  constructor() {
    this.data = [];
  }

  /**
   * Returns array of responses and caches data
   * @return {Promise.<Array>}
   */
  cacheData() {
    if (_.isEmpty(this.data)) {
      return fetch(url)
      .then(res => res.text())
      .then(body => JSON.parse(body))
      .then(data => {
        this.data = data;
        return this.data;
      });
    }

    const service = this;
    return new Promise((resolve) => resolve(service.data));
  }

  /**
   * Returns array of responses
   * @return {Promise.<Array>}
   */
  getResponses() {
    return this.cacheData().then(data => data.responses)
  }

  /**
   * Returns array of questions
   * @return {Promise.<Array>}
   */
  getQuestions() {
    return this.cacheData().then(data => data.questions)
  }

  /**
   * Returns new array with client names and submit dates
   * @return {Promise.<Array>}
   */
  getClientList() {
    return this.cacheData().then((data) => {
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

  /**
   * Returns one request object
   * @return {Promise.<Object>}
   */
  getSpecificRequest(client) {
    return this.cacheData().then((data) => {
      return data.responses.filter((response) => response.token === client.token && response);
    });
  }

  /**
   * Returns new array with client names and submit dates
   * @return {Promise.<Array>}
   */
  formatRequest(request) {
  }
}
