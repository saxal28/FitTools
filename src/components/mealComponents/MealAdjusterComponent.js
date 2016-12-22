import React from 'react';
import MealChart from "./MealChart";

export default class MealAdjusterComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="well-black text-center">
          <h4>Calories Allotted: {this.props.TDEE ? this.props.TDEE : 2000}</h4>
          <h4>Calories Spent: {this.props.totalCalories ? this.props.totalCalories : 2000}</h4>
          <button className="btn btn-secondary">Add Meal</button>
          <button className="btn btn-secondary">Remove Meal </button>
        </div>
      </div>
    )
  }
}
