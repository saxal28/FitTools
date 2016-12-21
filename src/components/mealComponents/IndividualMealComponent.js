import React, { Component } from "react";

export default class IndividualMealComponent extends Component {
  render() {
    return (
      <div className="well-black meal text-center">
        <span className="pull-left"><strong className="meal-title">Mea1 1</strong></span>
        <span>
          Calories <input type="text" className="macros-input" value={this.props.cal}></input>
          Carbs <input type="text" className="macros-input" value={this.props.carb}></input>
          Fat <input type="text" className="macros-input" value={this.props.fat}></input>
          Protein <input type="text" className="macros-input" value={this.props.pro}></input> 
        </span>
      </div>
    )
  }
}
