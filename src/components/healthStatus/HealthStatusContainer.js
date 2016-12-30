import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

class HealthStatusContainer extends Component {
  constructor(props) {
    super(props)

    this.state= {
      BMI: null,
      BMR: null,
    }
  }

  calculateBMI() {
    const weight = this.props.WEIGHT;
    const height = this.props.HEIGHT;
    const BMI = Math.floor((weight * 703) / (Math.pow(height, 2)));
    this.setState({BMI})
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
}

  componentDidMount() {
    const that = this;
    setTimeout(function() {
      that.calculateBMI();
      that.calculateBRM();
    }, 10)
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="container text-center">
          {/*title section */}
          <Paper zDepth={2} style={paperStyles}>
            <div className="row">
                <h1>This will be the Health Stats Page</h1>
                <img
                  src="http://dribbble.s3.amazonaws.com/users/4613/screenshots/911982/jar-loading.gif"
                  className="img-responsive milk-jug-loader"
                />
            </div>
          </Paper>
          {/*BMI section*/}
          <Paper zDepth={2} style={paperStyles}>
            <div className="row">
              <div className="col-xs-7">
                <img
                  src="https://s-media-cache-ak0.pinimg.com/originals/aa/51/bd/aa51bd72926e11f7006369f6d211a668.gif"
                  className="img-responsive"
                />
              </div>
              <div className="col-xs-5">
                <h2>BMI:  {this.state.BMI}</h2>
                <p>Congradulations, your BMI of {this.state.BMU} is lower than the average of ___ for your age group</p>
              </div>
            </div>
          </Paper>
          {/*WEIGHT section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h2>WEIGHT: {this.props.WEIGHT}</h2>
          </Paper>
          {/*HEIGHT section*/}
          <Paper zDepth={2} style={paperStyles}>
            <h2>HEIGHT: {this.props.HEIGHT}</h2>
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

//styles
var paperStyles = {
  padding:"20px",
  marginTop:"20px"
}

var averages = {
  BMI: {
    //everything else is underweight
    ideal:      [18.5, 24.9],
    overweight: [25, 30]
    //anything else is overweight
  },
  HEIGHT: {
    men:    69.7,
    female: 63.8
  }
}

function mapStateToProps(state) {
  return {
    TDEE:   state.TDEE,
    HEIGHT: state.HEIGHT,
    WEIGHT: state.WEIGHT,
    AGE:    state.AGE
  }
}

export default connect(mapStateToProps)(HealthStatusContainer);
