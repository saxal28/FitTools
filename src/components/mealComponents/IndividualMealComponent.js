import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import setCaloriesArray from "../../actions/setMacrosMealArray/setCaloriesArr";
import setFatArray from "../../actions/setMacrosMealArray/setFatArr";
import setCarbArray from "../../actions/setMacrosMealArray/setCarbArr";
import setProArray from "../../actions/setMacrosMealArray/setProArr";

import setCalTotal from "../../actions/setMacrosTotals/setCalTotal";
import setCarbTotal from "../../actions/setMacrosTotals/setCarbTotal";
import setFatTotal from "../../actions/setMacrosTotals/setFatTotal";
import setProTotal from "../../actions/setMacrosTotals/setProTotal";

// import { color1, color2 } from "../common/customColors"

class IndividualMealComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allCal: [],
      allCarb: [],
      fatAll: [],
      allPro: [],

      totalCal: 0,
      fatTotal: 0,
      totalCarb: 0,
      totalPro: 0,

      saved: true
    }
  }

  getAllMacros() {
    //extracts all of the values from the inputs
        const calorieInputs = document.body.querySelectorAll(".cal");
        const carbInputs = document.body.querySelectorAll(".carb");
        const fatInputs = document.body.querySelectorAll(".fat");
        const proInputs = document.body.querySelectorAll(".pro");

        let caloriesArr = [];
        let carbArr = [];
        let fatArr = [];
        let proArr = [];

        let totalCal = 0;
        let totalCarb = 0;
        let totalPro = 0;
        let fatTotal = 0;

    //loops through calorieInputs and extracts value
    //saves to caloriesArr
        for (var i = 0; i < calorieInputs.length; i++) {

          caloriesArr.push(calorieInputs[i].value);
          carbArr.push(carbInputs[i].value);
          fatArr.push(fatInputs[i].value);
          proArr.push(proInputs[i].value);

          totalCal += Number(calorieInputs[i].value);
          totalCarb += Number(carbInputs[i].value);
          fatTotal += Number(fatInputs[i].value);
          totalPro += Number(proInputs[i].value);

        }

    //push caloriesArr and totalCal to state;
        this.setState({
          allCal: caloriesArr,
          allCarb: carbArr,
          fatAll: fatArr,
          allPro: proArr,
          totalCal: totalCal,
          totalCarb,
          fatTotal,
          totalPro
        });


  }

  handleChange() {
    var obj = this;
    setTimeout(function() {
      obj.getAllMacros();
      obj.props.setCaloriesArray(obj.state.allCal);
      obj.props.setCarbArray(obj.state.allCarb);
      obj.props.setFatArray(obj.state.fatAll);
      obj.props.setProArray(obj.state.allPro);

      obj.props.setCalTotal(obj.state.totalCal);
      obj.props.setCarbTotal(obj.state.totalCarb);
      obj.props.setFatTotal(obj.state.fatTotal);
      obj.props.setProTotal(obj.state.totalPro);


    }, 5)
  }

  saveMeal() {

  }

  componentDidMount() {
    //trying to change value but it isnt rerendering....
    // if() {
    // const that = this
    //   const references=["tdee", "weight","height","age"]
    //   references.forEach(function(ref) {
    //     let element = ReactDOM.findDOMNode(that.refs[ref]);
    //     element.setAttribute("disabled", "true");
    //   })
    //
    // }

  }

  render() {
    return (
      <div className="well-clear meal text-center">

        <div className="row">
          <div className="col-xs-2">
            <h6
              className="meal-color-label"
              onClick={()=> this.setState({saved: !this.state.saved})}
              >{this.state.saved ? "✔" : this.props.index}</h6>
          </div>

          <div className="col-xs-10">

            <div className="row">

              <div className="col-xs-3">

                <input
                  type="text"
                  className="macros-input cal"
                  placeholder={this.props.caloriesArr[this.props.index - 1]}
                  onChange={this.handleChange.bind(this)}>
                </input>

              </div>

              <div className="col-xs-3">

                <input
                  type="text"
                  className="macros-input carb"
                  onChange={this.handleChange.bind(this)}
                  placeholder={this.props.carbArr[this.props.index - 1]}>

                </input>

              </div>

              <div className="col-xs-3">

                <input
                  type="text"
                  className="macros-input fat"
                  onChange={this.handleChange.bind(this)}
                  placeholder={this.props.fatArr[this.props.index - 1]}>
                </input>

              </div>

              <div className="col-xs-3">

                <input
                  type="text"
                  className="macros-input pro"
                  onChange={this.handleChange.bind(this)}
                  placeholder={this.props.proArr[this.props.index - 1]}>
                </input>

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
    caloriesArr:    state.caloriesArr,
    fatArr:         state.fatArr,
    proArr:         state.proArr,
    carbArr:        state.carbArr
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCaloriesArray,
    setCarbArray,
    setFatArray,
    setProArray,

    setCalTotal,
    setCarbTotal,
    setFatTotal,
    setProTotal

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualMealComponent);

  // <span className="pull-left"><strong className="meal-title">Mea1 {this.props.index}</strong></span>
