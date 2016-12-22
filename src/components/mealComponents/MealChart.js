import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    let series = [];
    console.log(this.props.mealValue1)
    // this.props.caloriesArr ? (series = this.props.caloriesArr) : (series = [10, 10, 10, 10, 10])
    return (
      <div className="text-center">
        <PieChart
            slices={[
              {
                color: 'rgba(255,0,0,0.5)',
                value: this.props.mealValue1,
              },
              {
                color: 'rgba(0,0,255,0.5)',
                value: this.props.mealValue2,
              },
              {
                color: 'rgba(0,255,0,0.5)',
                value: this.props.mealValue3,
              },
              {
                color: 'rgba(25,54,255,0.5)',
                value: this.props.mealValue4,
              },
              {
                color: 'rgba(0,255,255,0.5)',
                value: this.props.mealValue5,
              },
            ]}
          />
      </div>
    )
  }
}
