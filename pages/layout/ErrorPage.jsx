import React from "react";
import MobHeader from "./mweb/header.jsx";
import WebHeader from "./web/header/header.jsx";

class ErrorPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerdata: this.props.data.message,
    };
  }
  render() {
    return (
      <div>
        {this.props.data.deviceType === "mobile" ? (
          <MobHeader />
        ) : (
          <WebHeader />
        )}
        <div className="">
          Something went wrong, please check after sometime.
        </div>
      </div>
    );
  }
}

export default ErrorPageComponent;
