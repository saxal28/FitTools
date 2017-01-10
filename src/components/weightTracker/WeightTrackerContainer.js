import React, { Component } from 'react';
// import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import WeightInput from "./WeightInput";
import { Line } from 'react-chartjs-2';
import { Link } from "react-router";

class WeightTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      lastWeekWeight: null,
      weightArr: [0,0,0,0,0,0,0],
      average: null
    }
  }

  handleInputChange() {

    this.getInputValues();
    const that = this;
    setTimeout(function() {
      that.findAverage();
    })
  }

  getInputValues() {
    var inputs = document.body.querySelectorAll("input");
    const inputValues = [];
    var lastWeekWeight;
    inputs.forEach(function(input) {
      if(input.id < 7) {
        inputValues.push(input.value)
      }
      if(input.id === '7') {
        lastWeekWeight = input.value;
      }
    })
    this.setState({
      lastWeekWeight,
      weightArr: inputValues
    })
  }

  findAverage() {
    const weights = this.state.weightArr;
      let average = null;
      weights.forEach(function(i) {
        average += Number(i);
      })
      average = Math.round((average / weights.length)*100)/100;
      this.setState({ average })
  }

  render() {
    var data = {
      labels: this.state.days,
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
    <MuiThemeProvider>
      <section>

      <div className="home-banner" style={{padding: "40px 0px"}}>
        <div className="home-title" style={{padding:'40px'}}>
          <h1>Weight Tracker</h1>
          <h2 style={{color:"white"}}>Track Your Weight for the Week and Compare it to Last Week's Weight</h2>
          <Link to="/tools" className="btn button-outline">To Tools</Link>
        </div>
      </div>

      <div className="container">
          <Paper zDepth={3}>
            <div className="well-form-auto" style={{margin: "0 auto"}}>
              <h2 className="sub-heading" style={{marginBottom: '20px'}}>Weight Tracker</h2>
              <div className="row">
                <div className="col-xs-6 text-right">
                  {this.state.days.map((day, index) => <WeightInput title={day} index={index} key={day}  onChange={this.handleInputChange.bind(this)}/>)}
                </div>
                <div className="col-xs-6">
                  <WeightInput title="Last Week" index={7} onChange={this.handleInputChange.bind(this)}/>
                  <h4
                    style={{marginTop:"50px", marginBottom:"5px", background:"rgb(0, 188, 212)", color:"white"}}
                    className="sub-heading no-background no-shadow">
                    Weight Average: {this.state.average ? this.state.average : '...'}
                  </h4>
                  <h4 className="sub-heading no-background no-shadow" style={{background:"rgb(0, 188, 212)", color:"white"}}>
                    {/**/}
                    {this.state.average < this.state.lastWeekWeight ? "Loss ": "Gain " } from Last Week: {this.state.average ? Math.round((this.state.average - this.state.lastWeekWeight)*100)/100 : " ..."}
                  </h4>
                </div>
              </div>
            </div>
            <div style={{margin: "10px"}}>
              <Line data={data} />
            </div>
          </Paper>
      </div>
    </section>
    </MuiThemeProvider>
    )
  }
}

export default WeightTracker;
