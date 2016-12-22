import React, { Component } from "react";
import { connect } from "react-redux";

export default class IndividualMealComponent extends Component {
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
  getAllCalories() {
//extracts all of the values from the inputs
    const calorieInputs = document.body.querySelectorAll(".cal");
    let caloriesArr = [];
    let totalCalories = 0;

//loops through calorieInputs and extracts value
//saves to caloriesArr
    for (var i = 0; i < calorieInputs.length; i++) {
      caloriesArr.push(calorieInputs[i].value);
      totalCalories += Number(calorieInputs[i].value);
    }
    console.log(caloriesArr);
    console.log(totalCalories);
//push caloriesArr and totalCalories to state;
    this.setState({
      allCals: caloriesArr,
      totalCal: totalCalories
    });
  }
  render() {
    return (
      <div className="well-black meal text-center">
        <span className="pull-left"><strong className="meal-title">Mea1 {this.props.index}</strong></span>
        <span>
          Calories <input type="text" className="macros-input cal"value={this.props.cal} onChange={this.getAllCalories.bind(this)}></input>
          Carbs <input type="text" className="macros-input" value={this.props.carb}></input>
          Fat <input type="text" className="macros-input" value={this.props.fat}></input>
          Protein <input type="text" className="macros-input" value={this.props.pro}></input>
        </span>
        <button onClick={this.getAllCalories.bind(this)}>Test</button>
        {this.state.allCals[0]} {this.state.totalCal}
      </div>
    )
  }
}
