import React from 'react';
// import MealChart from "./MealChart";

export default class MealAdjusterComponent extends React.Component {
  isGreaterThanTDEE() {
    if(this.props.totalCal > this.props.TDEE) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <div className="well-clear text-right white-border-top-margin">
          <span className="input-row-label">Calories Allotted: {this.props.TDEE ? this.props.TDEE : 2000}</span><br />
          <span className="input-row-label">Calories Spent: </span> {this.isGreaterThanTDEE() ? <span className="input-row-label type-red"> {this.props.totalCal}</span> : <span className="input-row-label type-green">{this.props.totalCal}</span> } <br/>
          <div className="row text-center">
            <button className="btn custom-button">Add Meal</button>
            <button className="btn custom-button">Remove Meal </button>
          </div>
        </div>
      </div>
    )
  }
}
