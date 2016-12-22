import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setCaloriesArray from "../../actions/setCaloriesArr";

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

    //loops through calorieInputs and extracts value
    //saves to caloriesArr
        for (var i = 0; i < calorieInputs.length; i++) {

          caloriesArr.push(calorieInputs[i].value);
          carbArr.push(carbInputs[i].value);
          fatArr.push(fatInputs[i].value);
          proArr.push(proInputs[i].value);
          totalCalories += Number(calorieInputs[i].value);

        }

    //push caloriesArr and totalCalories to state;
        this.setState({
          allCals: caloriesArr,
          allCarb: carbArr,
          allFat: fatArr,
          allPro: proArr,
          totalCal: totalCalories
        });

  }

  render() {
    return (
      <div className="well-black meal text-center">
        <span className="pull-left"><strong className="meal-title">Mea1 {this.props.index}</strong></span>
        <span>
          Calories <input
            type="text"
            className="macros-input cal"
            value={this.props.cal}
            onChange={this.getAllMacros.bind(this)}>
          </input>
          Carbs <input
            type="text"
            className="macros-input carb"
            value={this.props.carb}
            onChange={this.getAllMacros.bind(this)}>
          </input>
          Fat <input
            type="text"
            className="macros-input fat"
            value={this.props.fat}
            onChange={this.getAllMacros.bind(this)}>
          </input>
          Protein <input
            type="text"
            className="macros-input pro"
            value={this.props.pro}
            onChange={this.getAllMacros.bind(this)}>
          </input>
        </span>
        <button onClick={() => this.props.setCaloriesArray(this.state.caloriesArr)}>Test</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    caloriesArr: state.caloriesArr
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setCaloriesArray}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualMealComponent);
