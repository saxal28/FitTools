import React from "react"

export default function SelectRow(props) {
  return(
  <div className="row">

    <div className="col-xs-6 text-right">
      <span className="input-row-label">{props.label}</span>
    </div>

    <div className="col-xs-6 text-left">
    <select className="input-group input-select">
      <option>{props.option1}</option>
      <option>{props.option2}</option>
      <option>{props.option3}</option>
      <option>{props.option4}</option>
    </select>
    </div>

  </div>
  )
}
