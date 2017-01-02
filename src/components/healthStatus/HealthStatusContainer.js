import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LinearProgress from 'material-ui/LinearProgress';
import GoogleMap from "../common/GoogleMap"

import {Doughnut} from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

class HealthStatusContainer extends Component {
  constructor(props) {
    super(props)

    this.state= {
      BMI: null,
      BMI_STATUS: "",
      BMR: null,
      BMR_MALE: null,
      BMR_FEMALE: null,
      TDEE_FEMALE: null,
      TDEE_MALE: null
    }
  }

  calculateBMI() {
    const weight = this.props.WEIGHT;
    const height = this.props.HEIGHT;
    const BMI = Math.floor((weight * 703) / (Math.pow(height, 2)));
    this.setState({BMI})
  }

  BMIstatus(){
    const BMI = this.state.BMI;
    if(BMI < 18.5) {
      this.setState({BMI_STATUS: "Underweight" })
    } else if (BMI >= 18.5 && BMI < 25) {
      this.setState({BMI_STATUS: "Healthy" })
    } else if(BMI >= 25 && BMI < 30) {
      this.setState({BMI_STATUS: "Overweight"})
    } else if(BMI >= 30 && BMI < 35) {
      this.setState({BMI_STATUS: "Obese (grade 1)"})
    } else if(BMI >= 35 && BMI < 40) {
      this.setState({BMI_STATUS: "Obese (grade 2)"})
    } else if(BMI >= 40) {
      this.setState({ BMI_STATUS: "Morbidily Obese"})
    }
  }

  calculateBMR() {
    const WEIGHT =  this.props.WEIGHT * 0.45359237;
    const AGE =  this.props.AGE;
    const HEIGHT = this.props.HEIGHT * 2.54;

    let TDEE_MALE = "";
    let TDEE_FEMALE = "";
    let BMR_MALE = ""
    let BMR_FEMALE = "";
    const ACTIVITY_LEVEL = 1.25;
    // const ACTIVITY_LEVELS = [1.2, 1.375, 1.55, 1.725]
    //male
      BMR_MALE = 66 + (13.7  * WEIGHT) + (5 * HEIGHT) - (6.8 * AGE);
      TDEE_MALE = BMR_MALE * ACTIVITY_LEVEL;
    //female
      BMR_FEMALE = (655) + (9.6 * WEIGHT) + (1.8 * HEIGHT) - (4.7 * AGE);
      TDEE_FEMALE = BMR_FEMALE * ACTIVITY_LEVEL;
      this.setState({
        BMR_MALE,
        BMR_FEMALE,
        TDEE_MALE,
        TDEE_FEMALE
      })
}

  componentDidMount() {
    const that = this;
    setTimeout(function() {
      that.calculateBMI();
      that.BMIstatus();
      that.calculateBMR();
    }, 10)
  }
  render() {
    //styles
    var paperStyles = {
      padding:"20px",
      marginTop:"20px",
      background:'white'
    }

    var BMIdata = {
      labels: ['Calories', 'Carb', 'Fat', 'Protein'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81]
      }]
    };

    return (
      <MuiThemeProvider>
        <div className="container text-center">
          {/*title section */}
          <Paper zDepth={2} style={paperStyles}>
            <div className="row">
                <h1>This will be the Health Stats Page</h1>
            </div>
          </Paper>
          {/*BMI section*/}
          <Paper zDepth={2} style={paperStyles}>
            <div className="row">
                <h2>BMI:  {this.state.BMI}</h2>
                <p>{this.state.BMI_STATUS}</p>
                <Bar data={BMIdata} />

            </div>
          </Paper>
          {/*WEIGHT section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h2>WEIGHT: {this.props.WEIGHT}</h2>
            <LinearProgress
              mode="determinate"
              value={Number(this.props.WEIGHT)}
              min={100}
              max={400}
              style={{width:"50%", margin: "30px auto"}}
               />
          </Paper>
          {/*HEIGHT section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h2>HEIGHT: {this.props.HEIGHT}</h2>
            <GoogleMap lon={93} lat={104} />
          </Paper>
          {/*TDEE section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h2>TDEE: {this.props.TDEE}</h2>
          </Paper>

        </div>
      </MuiThemeProvider>
    )
  }
}

// var averages = {
//   BMI: {
//     //everything else is underweight
//     ideal:      [18.5, 24.9],
//     overweight: [25, 30]
//     //anything else is overweight
//   },
//   HEIGHT: {
//     men:    69.7,
//     female: 63.8
//   }
// }

//functions

function mapStateToProps(state) {
  return {
    TDEE:   state.TDEE,
    HEIGHT: state.HEIGHT,
    WEIGHT: state.WEIGHT,
    AGE:    state.AGE
  }
}

export default connect(mapStateToProps)(HealthStatusContainer);
