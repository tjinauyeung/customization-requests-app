import React from 'react';
import RequestSideBarComponent from './RequestSideBarComponent';
import RequestMainPanelComponent from './RequestMainPanelComponent';

class RequestViewComponent extends React.Component {
  render() {
    return (
      <div>
        <RequestSideBarComponent removeActiveRequest={this.props.removeActiveRequest}/>
        <RequestMainPanelComponent
          client={this.props.client}
          request={this.props.request}
        />
      </div>
    )
  }
}

export default RequestViewComponent;
