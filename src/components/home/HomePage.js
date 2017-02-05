import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import setCalories from "../../actions/setCalories";
import setWeight from "../../actions/setWeight";
import setHeight from "../../actions/setHeight";
import setAge from "../../actions/setAge";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TDEE: "",
      WEIGHT: "",
      AGE: "",
      HEIGHT: ""
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

  setHeight(e) {
    this.setState({ HEIGHT: e.target.value })
  }

  setStatsOnClick() {
    this.props.setCalories(this.state.TDEE);
    this.props.setAge(this.state.AGE);
    this.props.setWeight(this.state.WEIGHT);
    this.props.setHeight(this.state.HEIGHT);
  }

  isValid() {
    if (this.props.TDEE && this.props.WEIGHT && this.props.AGE && this.props.HEIGHT) {
      return true
    } else {
      return false
    }
  }

  renderButton() {
    if (this.isValid()) {
      return <Link to="/tools" className="btn custom-button">To Tools!</Link>
    } else {
      return (
        <Link
        to="/tools"
        className="btn custom-button"
        onClick={() => this.setStatsOnClick()}
      >To Tools!</Link>
      )
    }
  }

  componentDidMount() {
    //trying to change value but it isnt rerendering....
    if(this.isValid()) {
    const that = this
      const references=["tdee", "weight","height","age"]
      references.forEach(function(ref) {
        let element = ReactDOM.findDOMNode(that.refs[ref]);
        element.setAttribute("disabled", "true");
      })

    }

  }

  render() {
    return (
      <MuiThemeProvider>
      <section>

        <div className="home-banner">
          <div className="animated bounce home-title">
            <h1 id="fit-text-1">{this.isValid() ? "Your Stats":"Fit Tools"}</h1>
            <h2 className="" style={{color:"white"}}>
              {this.isValid() ? "": "Enter Your Details to Get Started"}</h2>
          </div>
        </div>

      <div className="">

        <div className="well-form text-center">

          <div className="" style={{margin:"0 auto", maxWidth:"450px", padding: "30px 0px"}}>
          <div className="row sub-heading no-padding no-background no-shadow">
            <div className="col-xs-5 text-right">
              <h3 className="home-label">TDEE</h3>
            </div>
            <div className="col-xs-7 text-left">
              <input
                type="text"
                className="input-home"
                id="TDEE-input"
                ref="tdee"
                placeholder={this.props.TDEE ? this.props.TDEE : "" }
                onChange={this.setTDEE.bind(this)}
                 />

               {this.state.TDEE || this.props.TDEE ?
                <i className="fa fa-check" aria-hidden="true"></i> :
                  <i className="fa fa-times" aria-hidden="true"></i>
              }
            </div>
          </div>

          <div className="row sub-heading no-padding no-background no-shadow">
            <div className="col-xs-5 text-right">
              <h3 className="home-label">WEIGHT</h3>
            </div>
            <div className="col-xs-7 text-left">
              <input
                type="text"
                className="input-home"
                id="WEIGHT-input"
                ref="weight"
                placeholder={this.props.WEIGHT ? this.props.WEIGHT : "" }
                onChange={this.setWeight.bind(this)} />
              {this.state.WEIGHT || this.props.WEIGHT ?
                <i className="fa fa-check"  aria-hidden="true"></i> :
                  <i className="fa fa-times" aria-hidden="true"></i>
              }
            </div>
          </div>

          <div className="row sub-heading no-padding no-background no-shadow">
            <div className="col-xs-5 text-right">
              <h3 className="home-label">AGE</h3>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"
                className="input-home"
                id="AGE-input"
                ref="age"
                placeholder={this.props.AGE ? this.props.AGE : "" }
                onChange={this.setAge.bind(this)}/>

              {this.state.AGE || this.props.AGE ? <i className="fa fa-check" aria-hidden="true"></i>:   <i className="fa fa-times animated infinite pulse" aria-hidden="true"></i>}
            </div>
          </div>

          <div className="row sub-heading no-padding no-background no-shadow" style={{marginBottom:"20px"}}>
            <div className="col-xs-5 text-right">
              <h3 className="home-label">HEIGHT</h3>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"
                className="input-home"
                id="HEIGHT-input"
                ref="height"
                placeholder={this.props.HEIGHT ? this.props.HEIGHT : "" }
                onChange={this.setHeight.bind(this)}/>

              {this.state.HEIGHT || this.props.HEIGHT ? <i className="fa fa-check" aria-hidden="true"></i>:   <i className="fa fa-times" aria-hidden="true"></i>}
            </div>
          </div>
          <div className="row paded text-center">
              {this.renderButton()}
              {this.state.TDEE || this.props.TDEE ? "" : <Link to="/tools/tdee-calculator" className="btn custom-button">What is TDEE?</Link> }
          </div>



          {this.isValid() ? "" :
            <div className="alert alert-danger text-center">
             <strong>Site Currently Under Development!</strong>
               Explore and Play Around with the App! More Features to Come! Heres a <a href="https://goo.gl/1B4gij" target="_blank"><strong>LINK</strong></a> to my github repo if you want to check out the code <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>

        }
        </div>

        </div>
      </div>
      </section>
    </MuiThemeProvider>
    )
  }
}

//upgrade to container component
function mapStateToProps(state) {
  return {
    calories: state.calories,
    TDEE: state.TDEE,
    WEIGHT: state.WEIGHT,
    HEIGHT: state.HEIGHT,
    AGE: state.AGE
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
