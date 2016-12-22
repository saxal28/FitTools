import React, { Component } from "react";
import PieChart from 'react-simple-pie-chart';
import { Chart, Transform, Pies} from "rumble-charts";

// value adds up to 30, i think
export default class MealChart extends Component {
  render() {
    let series = [];
    this.props.caloriesArr ? (series = this.props.caloriesArr) : (series = [10, 10, 10, 10, 10])
    return (
      <div className="text-center">
        <PieChart
            slices={[
              {
                color: 'rgba(255,0,0,0.5)',
                value: series[0],
              },
              {
                color: 'rgba(0,0,255,0.5)',
                value: series[1],
              },
              {
                color: 'rgba(0,255,0,0.5)',
                value: series[2],
              },
              {
                color: 'rgba(25,54,255,0.5)',
                value: series[3],
              },
              {
                color: 'rgba(0,255,255,0.5)',
                value: series[4],
              },
            ]}
          />
      </div>
    )
  }
}
