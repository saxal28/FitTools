import React, { Component } from "react";

export default class SummaryMealComponent extends Component {
  render() {
    return (
      <div className="well-black meal text-center">
        <span className="pull-left"><strong className="meal-title">Summary</strong></span>
        <span>
          Calories <input type="text" className="macros-input" id="total-cal"></input>
          Carbs <input type="text" className="macros-input" id="total-carb"></input>
          Fat <input type="text" className="macros-input" id="total-fat"></input>
          Protein <input type="text" className="macros-input" id="total-pro"></input>
        </span>
      </div>
    )
  }
}
