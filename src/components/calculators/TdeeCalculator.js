import React, { Component } from "react";
//reusable components
import Navbar from "../common/Navbar";
import InputRow from "../common/InputRow";

import { Link } from "react-router";
import { connect } from "react-redux";

class TdeeCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gender: "male", //did you just assume my gender?,
      age: 0,
      height: 0,
      weight: 0,
      activityLevel: 0.3,
      localTDEE: null
    }
  }

  updateStats(gender, activityLevel) {
    this.calculateTDEE();

    this.setState({
      gender,
      activityLevel
    })

  }

  calculateTDEE() {
    const WEIGHT =  this.props.WEIGHT ? this.props.WEIGHT : this.state.weight;
    const AGE =  23;
    const HEIGHT = 60;
    const ACTIVITY_LEVEL = this.state.activityLevel;
    var localTDEE = 0;
    if (this.state.gender === "male") {
      localTDEE = (66 + 13.7 * WEIGHT + 5 * HEIGHT - 6.8 * AGE) * ACTIVITY_LEVEL;
    } else if (this.state.gender === "female") {
      localTDEE = (655 + 9.6 * WEIGHT + 1.8 * HEIGHT - 4.7 * AGE) * ACTIVITY_LEVEL;
    }

    console.log(localTDEE, this.state.gender);
    this.setState({localTDEE})

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="well-form text-center">

            <div className="row">
              <div className="col-sm-6 text-center">
                <InputRow label="Age: " placeholder={this.props.AGE} id="AGE"/>
                <InputRow label="Height: " placeholder={this.props.HEIGHT} id="HEIGHT"/>
                <InputRow label="Weight: " placeholder={this.props.WEIGHT} id="WEIGHT"/>

                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Gender: </span>
                  </div>
                  <div className="col-xs-6 text-left">
                    <select
                      className="input-select"
                      onChange={() => this.updateStats(document.body.querySelectorAll("select")[0].value, document.body.querySelectorAll("select")[1].value )}
                      defaultValue="male"
                      >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Activity Level: </span>
                  </div>
                  <div
                    className="col-xs-6 text-left">
                    <select className="input-select" defaultValue="0.3" onChange={() => this.updateStats(document.body.querySelectorAll("select")[0].value, document.body.querySelectorAll("select")[1].value)}>
                      <option value={0.30}>None</option>
                      <option value={0.50}>Moderate</option>
                      <option value={1}>Heavy</option>
                    </select>
                  </div>
                </div>

              </div>
              <div className="col-sm-6">
                <h1>Your TDEE is...</h1>
                <h1 className="type-green">{this.props.TDEE ? this.props.TDEE : this.state.localTDEE}</h1>

                <Link to="/tools" className="btn home-button">To Tools!</Link>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
  }
}

function mapStateToProps(state) {
  return {
    TDEE: state.TDEE,
    WEIGHT: state.WEIGHT,
    AGE: state.AGE,
    HEIGHT: state.HEIGHT
  }
}

export default connect(mapStateToProps)(TdeeCalculator);
