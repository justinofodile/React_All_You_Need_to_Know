import React from "react";

class ClassBaseComponent extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = { course: "React" };
  }
  render() {
    return (
      <div>
        <p>This is Class Base Components</p>
        <span>Is Component working: {this.props.test}</span>
        <p>Affirm: {this.props.children}</p>
        <p>{this.state.course}</p>
      </div>
    );
  }
}

export default ClassBaseComponent;
