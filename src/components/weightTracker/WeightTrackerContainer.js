import React, { Component } from 'react';
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import WeightInput from "./WeightInput";
import { Line } from 'react-chartjs-2';


class WeightTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      lastWeekWeight: null,
      weightArr: [0,0,12,0,0,0,0]
    }
  }

  render() {
    var data = {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
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
        data: this.state.weightArr
      }]
    };
    return (
      <div className="container">
        <MuiThemeProvider>
          <Paper zDepth={3} style={{marginTop:"4%"}}>
            <div className="well-form-auto" style={{margin: "0 auto"}}>
              <h1>Input Weight Here</h1>
              <div className="row">
                <div className="col-sm-6 text-right">
                  {this.state.days.map((day, index) => <WeightInput title={day} index={index} key={day} />)}
                </div>
                <div className="col-sm-6">
                  <WeightInput title="Previous Weight" />
                  <h4>Weight Average  : #</h4>
                  <h4>Net (Gain/Loss) : #</h4>
                  <h4>(Gain/Loss) from Last Week</h4>
                </div>
              </div>
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
