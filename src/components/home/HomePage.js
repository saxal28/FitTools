import React, { Component } from "react";
import { Link } from 'react-router';
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TDEE: "",
      WEIGHT: "",
      AGE: ""
    }
    // bind functions
  }

  setTDEE(e) {
    this.setState({ TDEE: e.target.value });
  }

  setWeight(e) {
    this.setState({ WEIGHT: e.target.value});
  }

  setAge(e) {
    this.setState({ AGE: e.target.value});
  }

  setDetailsOnClick() {
    console.log("TDEE =>" + this.state.TDEE);
    console.log("Weight =>" + this.state.WEIGHT);
    console.log("Age =>" + this.state.AGE);
  }

  render() {
    return (
      <div className="container">
        <div className="well-form text-center">

          <div className="home-title">
            <h1>Welcome To Fit-Tools</h1>
            <h3>Enter Your Details to Get Started</h3>
            { this.state.TDEE.length === 4 ? console.log("TDEE is set at: " + this.state.TDEE) : console.log("")}
          </div>


          <div className="row input-home-row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">TDEE</span>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"  className="input-home" placeholder="TDEE" onChange={this.setTDEE.bind(this)} />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">WEIGHT</span>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"  className="input-home" placeholder="LBS" onChange={this.setWeight.bind(this)} />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">AGE</span>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"  className="input-home" placeholder="AGE" onChange={this.setAge.bind(this)}/>
            </div>

            <div className="row input-home-row">
              <Link to="/tools" className="btn home-button" onClick={this.setDetailsOnClick.bind(this)}>To Tools</Link>
            </div>

          </div>


        </div>
      </div>
    )
  }
}

//upgrade to container component
function mapStateToProps(state) {
  return {
    calories: state.calories
  }
}

export default connect(mapStateToProps)(HomePage);
