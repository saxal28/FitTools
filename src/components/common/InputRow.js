import React from "react";
import ReactDOM from "react-dom";

export default class InputRow extends React.Component {

  componentDidMount() {
    //trying to change value but it isnt rerendering....
    if(this.props.placeholder) {
        const that = this
        let element = ReactDOM.findDOMNode(this.refs[this.props.id]);
        element.setAttribute("disabled", "true");
  }
}

  render() {
  return (
  <div className="row">
    <div className="col-xs-6 text-right">
      <span className="input-row-label">{this.props.label}</span>
    </div>
    <div className="col-xs-6 text-left">
      <input
        ref={this.props.id}
        type="text"
        className="input-home"
        placeholder={this.props.placeholder ? this.props.placeholder : ""}
         />
    </div>
  </div>
  )
  }
}
