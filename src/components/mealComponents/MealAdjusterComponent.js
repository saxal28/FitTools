import React from 'react';
import MealChart from "./MealChart";

export default function MealAdjusterComponent() {
  return (
    <div>
      <div className="well-black text-center">
        <h4>Calories Allotted: </h4>
        <button className="btn btn-secondary">Add Meal</button>
        <button className="btn btn-secondary">Remove Meal </button>
      </div>
      <div className="text-center">
          <MealChart />
      </div>
    </div>
  )
}
