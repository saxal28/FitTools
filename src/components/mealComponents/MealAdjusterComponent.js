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
        <div className="well-black text-center">
          <h4>Calories Allotted: {this.props.TDEE ? this.props.TDEE : 2000}</h4>
          Calories Spent: {this.isGreaterThanTDEE() ? <h1 className="type-red">{this.props.totalCal}</h1> : <h1 className="type-green">{this.props.totalCal}</h1> }
          <button className="btn btn-secondary">Add Meal</button>
          <button className="btn btn-secondary">Remove Meal </button>
        </div>
      </div>
    )
  }
}
