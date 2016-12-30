import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

class HealthStatusContainer extends Component {
  constructor(props) {
    super(props)

    this.state= {
      BMI: null
    }
  }

  calculateBMI() {
    const weight = 195;
    const height = 70;
    const BMI = Math.floor((weight * 703) / (Math.pow(height, 2)));
    this.setState({BMI})
  }

  componentDidMount() {
    const that = this;
    setTimeout(function() {
      that.calculateBMI();
    }, 50)
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

function mapStateToProps(state) {
  return {
    TDEE: state.TDEE,
    HEIGHT: state.HEIGHT,
    WEIGHT: state.WEIGHT,
    AGE: state.AGE
  }
}

export default connect(mapStateToProps)(HealthStatusContainer);
