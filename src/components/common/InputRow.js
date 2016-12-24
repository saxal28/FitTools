import React from "react";

export default function InputRow(props) {
  return (
  <div className="row">
    <div className="col-xs-6 text-right">
      <span className="input-row-label">{props.label}</span>
    </div>
    <div className="col-xs-6 text-left">
      <input
        type="text"
        className="input-home"
        placeholder={props.value ? props.value : ""}
         />
    </div>
  </div>
  )
}
