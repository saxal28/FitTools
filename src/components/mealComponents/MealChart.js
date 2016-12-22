import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>Calorie Breakdown</h2>
        <PieChart
          slices={[
            {
              color: 'rgba(255,255,255,0.7)',
              value: 23,
            },
            {
              color: 'rgba(0,255,0,0.7)',
              value: 10,
            },
            {
              color: 'rgba(0,91,159,0.7)',
              value: 18,
            },
            {
              color: 'rgba(255,0,0,0.7)',
              value: 35,
            },
            {
              color: 'rgba(150,100,200,0.7)',
              value: 2,
            },
          ]}
        />

  </div>
    )
  }
}
