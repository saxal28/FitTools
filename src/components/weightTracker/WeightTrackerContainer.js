import React, { Component } from 'react';
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Line } from 'react-chartjs-2';


class WeightTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    var data = {
      labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [185, 182, 181, 184, 185, 182, 180]
      }]
    };
    return (
      <div className="container">
        <MuiThemeProvider>
          <Paper zDepth={3}>
            <div className="well-form-auto">
              <h1>hi</h1>
            </div>
            <div style={{margin: "10px"}}>
              <Line data={data} />
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default WeightTracker;
