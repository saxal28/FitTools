import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>{this.props.title}</h2>
        <PieChart
            slices={[
              {
                color: 'rgba(255,255,255,0.5)',
                value: this.props.mealValue1,
              },
              {
                color: 'rgba(137,169,220,0.5)',
                value: this.props.mealValue2,
              },
              {
                color: 'rgba(134,168,180,0.5)',
                value: this.props.mealValue3,
              },
              {
                color: 'rgba(43,80,177,0.5)',
                value: this.props.mealValue4,
              },
              {
                color: 'rgba(19,53,143,0.5)',
                value: this.props.mealValue5,
              },
              {
                color: 'rgba(19,10,10,0.5)',
                value: this.props.mealValue6,
              },
            ]}
          />
      </div>
    )
  }
}
