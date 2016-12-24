import React from "react"

export default function SelectRow(props) {
  return(
  <div className="row">

    <div className="col-xs-6 text-right">
      <span className="input-row-label">{props.label}</span>
    </div>

    <div className="col-xs-6 text-left">
    <select className="input-group input-select">
      <option value={props.value1}>{props.option1}</option>
      <option value={props.value2}>{props.option2}</option>
      <option value={props.value3}>{props.option3}</option>
    </select>
    </div>

  </div>
  )
}
