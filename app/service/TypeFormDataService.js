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
  fetchData() {
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
          token: response.token,
          clientName: response.answers.textfield_16321742,
          submitDate: response.metadata.date_submit 
        }
      });
      return clientList;
    });
  }

  /**
   * Returns one request object
   * @param {Object} 
   * @return {Promise.<Array>}
   */
  getSpecificRequest(client) {
    return this.fetchData().then((data) => {
      return this.data.responses.filter((response) => response.token === client.token && response);
    });
  }

  /**
   * Returns new object with formatted request
   * @param {Object} - receives request object
   * @return {Promise.<Object>}
   */
  formatRequest(request) {    
    return this.getQuestions().then(questions => {

      let answers = request[0].answers;
      let formattedRequest = {};

      _.forEach(answers, (answer, id) => {
        _.forEach(questions, (question) => {
          if (id === question.id) {
            formattedRequest[question.question] = answer;
          }
        });
      });

      return formattedRequest;
    });
  }
}

/**
 * FOR TESTING PURPOSES
 */

// let mockClient = {
//   "clientName": "flyin.com",
//   "token": "aa98ea789c273255bad0d3a031e438d2",
//   "submitDate": "2016-05-19 08:03:42"
// }

// let secondMockClient = {
//   "clientName": "TUIger",
//   "token": "1cfede95403fbebf6d0cd097d299aa66",
//   "submitDate": "2016-06-02 13:48:52"
// }

// service.getQuestions().then(questions => do something ));
// service.getClientList().then(clientList => do something ));
// service.getResponses().then(responses => do something ));
// service.getSpecificRequest(mockClient)
//  .then(request => service.formatRequest(request))
//  .then(formatted => do something);
