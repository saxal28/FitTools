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
      allFat: [],
      allPro: [],

      totalCal: 0,
      totalFat: 0,
      totalCarb: 0,
      totalPro: 0,

      saved: false
    }
  }

  getMacroTotals() {
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
        let totalFat = 0;

    //loops through calorieInputs and extracts value
    //saves to caloriesArr
        for (var i = 0; i < calorieInputs.length; i++) {

          caloriesArr.push(calorieInputs[i].value);
          carbArr.push(carbInputs[i].value);
          fatArr.push(fatInputs[i].value);
          proArr.push(proInputs[i].value);

          totalCal  += Number(calorieInputs[i].value);
          totalCarb += Number(carbInputs[i].value);
          totalFat  += Number(fatInputs[i].value);
          totalPro  += Number(proInputs[i].value);

        }

    //push caloriesArr and totalCal to state;
        this.setState({
          allCal:   caloriesArr,
          allCarb:  carbArr,
          allFat:   fatArr,
          allPro:   proArr,
          totalCal,
          totalCarb,
          totalFat,
          totalPro
        });


  }

  handleChange() {
    var obj = this;
    setTimeout(function() {
      //setup functions
      // obj.saveMeal();
      obj.getMacroTotals();
      //actions
      obj.props.setCaloriesArray(obj.state.allCal);
      obj.props.setCarbArray(obj.state.allCarb);
      obj.props.setFatArray(obj.state.allFat);
      obj.props.setProArray(obj.state.allPro);

      obj.props.setCalTotal(obj.state.totalCal);
      obj.props.setCarbTotal(obj.state.totalCarb);
      obj.props.setFatTotal(obj.state.totalFat);
      obj.props.setProTotal(obj.state.totalPro);


    }, 5)
  }

  componentDidMount() {

  }

  render() {
    const colors = {
      1: 'rgba(215,245,250,0.5)',
      2: "rgba(152,198,240,0.5)",
      3: "rgba(121,162,234,0.5)",
      4: "rgba(85,118,234,0.5)",
      5: "rgba(60,49,180,0.5)",
      6: "rgba(41,23,101,0.5)"
    }

    return (
      <div className="well-clear meal number-center" style={{background:colors[this.props.index]}}>

        <div className="row">

          <div className="col-xs-12">

            <div className="row">

              <div className="col-xs-3">

                <input
                  type="number"
                  className="macros-input cal"
                  defaultValue={this.props.caloriesArr[this.props.index - 1]}
                  onChange={this.handleChange.bind(this)}>
                </input>

              </div>

              <div className="col-xs-3">

                <input
                  type="number"
                  className="macros-input carb"
                  onChange={this.handleChange.bind(this)}
                  defaultValue={this.props.carbArr[this.props.index - 1]}>

                </input>

              </div>

              <div className="col-xs-3">

                <input
                  type="number"
                  className="macros-input fat"
                  onChange={this.handleChange.bind(this)}
                  defaultValue={this.props.fatArr[this.props.index - 1]}>
                </input>

              </div>

              <div className="col-xs-3">

                <input
                  type="number"
                  className="macros-input pro"
                  onChange={this.handleChange.bind(this)}
                  defaultValue={this.props.proArr[this.props.index - 1]}>
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
