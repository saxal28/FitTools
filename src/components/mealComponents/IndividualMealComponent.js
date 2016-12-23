import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setCaloriesArray from "../../actions/setMacrosMealArray/setCaloriesArr";
import setFatArray from "../../actions/setMacrosMealArray/setFatArr";
import setCarbArray from "../../actions/setMacrosMealArray/setCarbArr";
import setProArray from "../../actions/setMacrosMealArray/setProArr";


class IndividualMealComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allCals: [],
      allCarb: [],
      allFat: [],
      allPro: [],

      totalCal: 0,
      totalFat: 0,
      totalCarb: 0,
      totalPro: 0
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

        let totalCalories = 0;
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

          totalCalories += Number(calorieInputs[i].value);
          totalCarb += Number(carbInputs[i].value);
          totalFat += Number(fatInputs[i].value);
          totalPro += Number(proInputs[i].value);

        }

    //push caloriesArr and totalCalories to state;
        this.setState({
          allCals: caloriesArr,
          allCarb: carbArr,
          allFat: fatArr,
          allPro: proArr,
          totalCal: totalCalories,
          totalCarb,
          totalFat,
          totalPro
        });


  }

  handleChange() {
    var obj = this;
    setTimeout(function() {
      obj.getAllMacros();
      obj.props.setCaloriesArray(obj.state.allCals);
      obj.props.setCarbArray(obj.state.allCarb);
      obj.props.setFatArray(obj.state.allFat);
      obj.props.setProArray(obj.state.allPro);

    }, 5)
  }

  render() {
    return (
      <div className="well-black meal text-center">
        <span className="pull-left"><strong className="meal-title">Mea1 {this.props.index}</strong></span>
        <span>

          Calories <input
            type="text"
            className="macros-input cal"
            placeholder={this.props.caloriesArr[this.props.index - 1]}
            onChange={this.handleChange.bind(this)}>
          </input>

          Carbs <input
            type="text"
            className="macros-input carb"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.carbArr[this.props.index - 1]}>

          </input>

          Fat <input
            type="text"
            className="macros-input fat"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.fatArr[this.props.index - 1]}>
          </input>

          Protein <input
            type="text"
            className="macros-input pro"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.proArr[this.props.index - 1]}>
          </input>

        </span>
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
    setProArray
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualMealComponent);
