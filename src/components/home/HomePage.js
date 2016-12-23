import React, { Component } from "react";
import { Link } from 'react-router';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setCalories from "../../actions/setCalories";
import setWeight from "../../actions/setWeight";
import setAge from "../../actions/setAge";

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

  setStatsOnClick() {
    this.props.setCalories(this.state.TDEE);
    this.props.setAge(this.state.AGE);
    this.props.setWeight(this.state.WEIGHT);
  }

  toggleIcon(i) {
    const icon = document.body.querySelectorAll(".fa");
    console.log(icon)
    // if(icon.style.color === "green") {
    //   icon.style.color ="white";
    // } else {
    //   icon.style.color="green";
    // }
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-danger text-center">
           <strong>Site Currently Under Development!</strong> Explore and Play Around with the App! More Features to Come! Here's a <a href="https://goo.gl/1B4gij" target="_blank"><strong>LINK</strong></a> to my github repo if you want to check out the code <i className="fa fa-smile-o" aria-hidden="true"></i>
        </div>
        <div className="well-form text-center">

          <div className="home-title">
            <h1>Welcome To Fit-Tools</h1>
            <h3>Enter Your Details to Get Started</h3>
          </div>


          <div className="row input-home-row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">TDEE</span>
            </div>
            <div className="col-xs-7 text-left">
              <input
                type="text"
                className="input-home"
                placeholder={this.props.TDEE ? this.props.TDEE : "TDEE" }
                onChange={this.setTDEE.bind(this)} />
              {this.props.TDEE ? <i className="fa fa-check-circle-o" onClick={this.toggleIcon(0)} aria-hidden="true"></i>: ""}
            </div>
          </div>

          <div className="row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">WEIGHT</span>
            </div>
            <div className="col-xs-7 text-left">
              <input
                type="text"
                className="input-home"
                placeholder={this.props.WEIGHT ? this.props.WEIGHT : "LBS" }
                onChange={this.setWeight.bind(this)} />
                {this.props.WEIGHT ? <i className="fa fa-check-circle-o"  aria-hidden="true"></i>: ""}
            </div>
          </div>

          <div className="row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">AGE</span>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"
                className="input-home"
                placeholder={this.props.AGE ? this.props.AGE : "AGE" }
                onChange={this.setAge.bind(this)}/>
              {this.props.AGE ? <i className="fa fa-check-circle-o" aria-hidden="true"></i>: ""}
            </div>

            <div className="row input-home-row">
              <Link
                to="/tools"
                className="btn home-button"
                onClick={() => this.setStatsOnClick()}
              >To Tools!</Link>
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
    calories: state.calories,
    TDEE: state.TDEE,
    WEIGHT: state.WEIGHT,
    AGE: state.AGE
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCalories,
    setAge,
    setWeight
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
