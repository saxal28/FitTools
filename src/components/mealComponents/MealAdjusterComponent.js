import React from 'react';
import MealChart from "./MealChart";

export default class MealAdjusterComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="well-black text-center">
          <h4>Calories Allotted: {this.props.info}</h4>
          <button className="btn btn-secondary">Add Meal</button>
          <button className="btn btn-secondary">Remove Meal </button>
        </div>
        <div className="text-center">
            <MealChart />
        </div>
      </div>
    )
  }
}
