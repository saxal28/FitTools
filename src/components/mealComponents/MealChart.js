import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    return (
      <PieChart
        slices={[
          {
            color: 'rgba(255,255,255,0.7)',
            value: 10,
          },
          {
            color: 'rgba(56,91,159,0.7)',
            value: 20,
          },
        ]}
      />
    )
  }
}
