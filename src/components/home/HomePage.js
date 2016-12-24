import React, { Component } from "react";
import ReactDOM from "react-dom";
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

  isValid() {
    if (this.props.TDEE && this.props.WEIGHT && this.props.AGE) {
      return true
    } else {
      return false
    }
  }

  renderButton() {
    if (this.isValid()) {
      return <Link to="/tools" className="btn home-button">To Tools!</Link>

    } else {
      return (
        <Link
        to="/tools"
        className="btn home-button"
        onClick={() => this.setStatsOnClick()}
      >To Tools!</Link>
      )
    }
  }

  componentDidMount() {
    //trying to change value but it isnt rerendering....
    if(this.isValid()) {
    const that = this
      const references=["tdee", "weight","age"]
      references.forEach(function(ref) {
        let element = ReactDOM.findDOMNode(that.refs[ref]);
        element.setAttribute("disabled", "true");
      })

    }

  }

  render() {

    return (
      <div className="container">
        {this.isValid() ? "" :
          <div className="alert alert-danger text-center">
           <strong>Site Currently Under Development!</strong>
             Explore and Play Around with the App! More Features to Come! Here's a <a href="https://goo.gl/1B4gij" target="_blank"><strong>LINK</strong></a> to my github repo if you want to check out the code <i className="fa fa-smile-o" aria-hidden="true"></i>
        </div>

      }
        <div className="well-form text-center">

          <div className="home-title">
            <h1>{this.isValid() ? "Here Are Your Details!":"Welcome To FitTools"}</h1>
            <h3>{this.isValid() ? "You Will Be Able To Reset You Details Here In App....(button)": "Enter Your Details to Get Started"}</h3>
          </div>


          <div className="row input-home-row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">TDEE</span>
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
                <i className="fa fa-check-circle-o" aria-hidden="true"></i> :
                  <i className="fa fa-times-circle-o" aria-hidden="true"></i>
              }
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
                id="WEIGHT-input"
                ref="weight"
                placeholder={this.props.WEIGHT ? this.props.WEIGHT : "" }
                onChange={this.setWeight.bind(this)} />
              {this.state.WEIGHT || this.props.WEIGHT ?
                <i className="fa fa-check-circle-o"  aria-hidden="true"></i> :
                  <i className="fa fa-times-circle-o" aria-hidden="true"></i>
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-5 text-right">
              <span className="input-row-label">AGE</span>
            </div>
            <div className="col-xs-7 text-left">
              <input type="text"
                className="input-home"
                id="AGE-input"
                ref="age"
                placeholder={this.props.AGE ? this.props.AGE : "" }
                onChange={this.setAge.bind(this)}/>

              {this.state.AGE || this.props.AGE ? <i className="fa fa-check-circle-o" aria-hidden="true"></i>:   <i className="fa fa-times-circle-o" aria-hidden="true"></i>}
            </div>


            <div className="row input-home-row">
                {this.renderButton()}
                {console.log(this.isValid())}
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
