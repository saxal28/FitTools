import React, { Component } from "react";
//reusable components
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import setCalories from "../../actions/setCalories";
import setWeight from "../../actions/setWeight";
import setHeight from "../../actions/setHeight";
import setAge from "../../actions/setAge";

class TdeeCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      GENDER: "male", //did you just assume my GENDER?,
      AGE: null,
      HEIGHT: null,
      WEIGHT: null,
      ACTIVITY_LEVEL: 1.2,
      TDEE: null
    }
  }

  updateGender(e) {
    this.setState({ GENDER : e.target.value })
  }

  updateActivityLevel(e) {
    this.setState({ ACTIVITY_LEVEL : e.target.value })
  }

  updateAge(e) {
    this.setState({ AGE: e.target.value })
  }

  updateHeight(e) {
    this.setState({ HEIGHT : e.target.value })
  }

  updateWeight(e) {
    this.setState({ WEIGHT: e.target.value })
  }

  calculateTDEE() {
    const that = this;
    var TDEE = 0;
    setTimeout(function() {
      const WEIGHT =  that.state.WEIGHT * 0.45359237;
      const AGE =  that.state.AGE;
      const HEIGHT = that.state.HEIGHT * 2.54;
      const ACTIVITY_LEVEL = that.state.ACTIVITY_LEVEL;
      if (that.state.GENDER === "male") {
        // let BEE = 66 + 13.7 * WEIGHT + 5 * HEIGHT - 6.8 * AGE;
        let BEE = 66 + (13.7  * WEIGHT) + (5 * HEIGHT) - (6.8 * AGE);
        TDEE = BEE * ACTIVITY_LEVEL;
      } else if (that.state.GENDER === "female") {
        let BEE = (655) + (9.6 * WEIGHT) + (1.8 * HEIGHT) - (4.7 * AGE);
        TDEE = BEE * ACTIVITY_LEVEL;
      }
      console.log(TDEE)

      that.setState({TDEE: Math.floor(TDEE)})
      that.setStats();

    }, 5)

  }

  setStats() {
    this.props.setCalories(this.state.TDEE);
    this.props.setHeight(this.state.HEIGHT);
    this.props.setWeight(this.state.WEIGHT);
    this.props.setAge(this.state.AGE);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="well-form text-center">

            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Weight</span>
                  </div>
                  <div className="col-xs-6 text-left">
                    <input
                      ref={this.props.id}
                      type="text"
                      className="input-home"
                      onChange={this.updateWeight.bind(this)}
                      placeholder={this.props.placeholder ? this.props.placeholder : ""}
                       />

                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Height</span>
                  </div>
                  <div className="col-xs-6 text-left">
                    <input
                      ref={this.props.id}
                      type="text"
                      className="input-home input-success"
                      onChange={this.updateHeight.bind(this)}
                      placeholder={this.props.placeholder ? this.props.placeholder : ""}
                       />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Age</span>
                  </div>
                  <div className="col-xs-6 text-left">
                    <input
                      ref={this.props.id}
                      type="text"
                      className="input-home"
                      onChange={this.updateAge.bind(this)}
                      placeholder={this.props.placeholder ? this.props.placeholder : ""}
                       />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Gender</span>
                  </div>
                  <div className="col-xs-6 text-left">
                    <select
                      className="input-select"
                      onChange={this.updateGender.bind(this)}
                      >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6 text-right">
                    <span className="input-row-label">Activity Level</span>
                  </div>
                  <div
                    className="col-xs-6 text-left">
                    <select
                      className="input-select"
                      onChange={this.updateActivityLevel.bind(this)}
                      defaultValue="0.3">
                      <option value={1.2}>None</option>
                      <option value={1.375}>Light</option>
                      <option value={1.55}>Moderate</option>
                      <option value={1.725}>Heavy</option>
                    </select>
                  </div>
                </div>

              </div>
              <div className="col-sm-6">
                <h1>Your TDEE is...</h1>
                <h1 className="type-green">{this.state.TDEE}</h1>
                <button
                  className="btn custom-button"
                  onClick={this.calculateTDEE.bind(this)}
                  >Calculate</button>
                <Link to="/tools" className="btn custom-button">To Tools!</Link>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCalories,
    setAge,
    setWeight,
    setHeight
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TdeeCalculator);
