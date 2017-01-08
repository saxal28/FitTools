import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    return (
      <div className="text-center">
        <h3 style={{color:"white", fontWeight:'bold'}}>{this.props.title}</h3>
        <PieChart
            slices={[
              {
                color: 'rgb(215,245,250)',
                value: this.props.mealValue1,
              },
              {
                color: 'rgb(152,198,240)',
                value: this.props.mealValue2,
              },
              {
                color: 'rgb(121,162,234)',
                value: this.props.mealValue3,
              },
              {
                color: 'rgb(85,118,234)',
                value: this.props.mealValue4,
              },
              {
                color: 'rgb(60,49,180)',
                value: this.props.mealValue5,
              },
              {
                color: 'rgb(41,23,101)',
                value: this.props.mealValue6,
              },
            ]}
          />
      </div>
    )
  }
}
