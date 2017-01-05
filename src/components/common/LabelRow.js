import React from "react";

export default function LabelRow(props) {
  return (
    <div className="well-clear text-center" style={{background:"rgb(0, 188, 212)", color:"white"}}>

      <div className="row">
        <div className="row text-center">
          <div className="col-xs-3">
            <h3>Cal</h3>
          </div>
          <div className="col-xs-3">
           <h3>Carb</h3>
          </div>
          <div className="col-xs-3">
           <h3>Fat</h3>
          </div>
          <div className="col-xs-3">
           <h3>Pro</h3>
          </div>
        </div>

      </div>
    </div>
  )
}
