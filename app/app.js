import { TypeFormDataService } from './service/TypeFormDataService';

let service = new TypeFormDataService;

// console.log("LOADING....");

// service.getQuestions()
// 	.then(question => console.log(question));

// setTimeout(() => {
// 	service.getQuestions()
// 		.then(questions => console.log(questions));
// }, 1000);

// service.getClientList()
// 	.then(clientList => console.log(clientList));

let mockClient = {
	"clientName": "flyin.com",
	"token": "aa98ea789c273255bad0d3a031e438d2",
	"submitDate": "2016-05-19 08:03:42"
}

let secondMockClient = {
	"clientName": "TUIger",
	"token": "1cfede95403fbebf6d0cd097d299aa66",
	"submitDate": "2016-06-02 13:48:52"
}

let mockRequest;

service.getSpecificRequest(mockClient)
	.then(request => {
		service.formatRequest(request);
	});


