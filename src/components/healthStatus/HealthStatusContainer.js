import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LinearProgress from 'material-ui/LinearProgress';

// import {Doughnut} from 'react-chartjs-2';
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
      marginTop:"4%",
      // background:"rgba(0,0,0,0.4)",
      // color:"white",
      // border:"1px solid white"
    }

    var BMIdata = {
      labels: ["You", 'Underweight', 'Healthy', 'Overweight', 'Obese'],
      datasets: [{
        label: 'BMI',
        backgroundColor: 'rgba(85,118,234,0.5)',
        borderColor: 'rgba(60,49,180,0.5)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(41,23,101,0.5)',
        hoverBorderColor: 'rgba(60,49,180,0.5)',
        data: [this.state.BMI,18.4, 24.5, 30, 45]
      }]
    };

    return (
      <MuiThemeProvider>
        <div className="container text-center">
          {/*title section */}
          <Paper zDepth={2} style={paperStyles}>
            <div className="row">
                <h1>Health Status</h1>
                <h3>See a brief summary of your health!</h3>
            </div>
          </Paper>
          {/*BMI section*/}
          <Paper zDepth={2} style={paperStyles}>
            <div className="row">
                <h3>BMI:  {this.state.BMI}</h3>
                <h4>{this.state.BMI_STATUS}</h4>
                <Bar data={BMIdata} />

            </div>
          </Paper>
          {/*WEIGHT section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h3>WEIGHT: {this.props.WEIGHT}</h3>
            <LinearProgress
              mode="determinate"
              value={Number(this.props.WEIGHT)}
              min={0}
              max={390}
              color={this.props.WEIGHT > 195.5 ? 'red' : "green"}
              style={{width:"50%", margin: "30px auto"}}
               />
             <h4>You are {this.props.WEIGHT >= 195.5 ? "heavier" : "lighter"} than the average weight of 195.5</h4>
          </Paper>
          {/*HEIGHT section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h3>HEIGHT: {this.props.HEIGHT}</h3>
              <LinearProgress
                mode="determinate"
                value={Number(this.props.WEIGHT)}
                min={50}
                max={139.4}
                color={this.props.HEIGHT > 69.7 ? 'green' : "red"}
                style={{width:"50%", margin: "30px auto"}}
                 />
               <h4>You are {this.props.HEIGHT >= 69.7 ? "taller": "shorter"} than the average height of 69.7 inches (5'10'')</h4>
          </Paper>
          {/*TDEE section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h3>TDEE: {this.props.TDEE}</h3>
            <h4>To Maintain Weight, eat <span className="type-green">{this.props.TDEE} calories</span></h4>
            <h4>To Lose Weight, eat <span className="type-green">{Math.floor(this.props.TDEE * .80)} calories</span> </h4>
            <h4>To Gain Weight, eat <span className="type-green">{Math.floor(this.props.TDEE * 1.20)}</span> calories</h4>
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
