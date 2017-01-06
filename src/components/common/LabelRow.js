import React from "react";

const style = {
  background:"rgb(0, 188, 212)",
  color:"white",
  textTransform:"uppercase",
}

const h3Style = {
  color:"white",
  fontWeight:"bold"
}

export default function LabelRow(props) {
  return (
    <div className="well-clear text-center" style={style}>

      <div className="row">
        <div className="row text-center">
          <div className="col-xs-3">
            <h3 style={h3Style}>Cal</h3>
          </div>
          <div className="col-xs-3">
            <h3 style={h3Style}>Carb</h3>
          </div>
          <div className="col-xs-3">
            <h3 style={h3Style}>Fat</h3>
          </div>
          <div className="col-xs-3">
            <h3 style={h3Style}>Pro</h3>
          </div>
        </div>

      </div>
    </div>
  )
}
