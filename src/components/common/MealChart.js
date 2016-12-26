import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    return (
      <div className="text-center">
        <h3>{this.props.mealValue1 ? this.props.title: ""}</h3>
        <PieChart
            slices={[
              {
                color: 'rgba(255,255,255,0.5)',
                value: this.props.mealValue1,
              },
              {
                color: 'rgba(152,198,240,0.5)',
                value: this.props.mealValue2,
              },
              {
                color: 'rgba(121,162,234,0.5)',
                value: this.props.mealValue3,
              },
              {
                color: 'rgba(85,118,234,0.5)',
                value: this.props.mealValue4,
              },
              {
                color: 'rgba(60,49,180,0.5)',
                value: this.props.mealValue5,
              },
              {
                color: 'rgba(41,23,101,0.5)',
                value: this.props.mealValue6,
              },
            ]}
          />
      </div>
    )
  }
}
