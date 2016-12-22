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

        if (calorieInputs[0].value.length >= 0) {
          console.log("calorie input value: " + calorieInputs[0].value)

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

  }

  handleChange() {
    var obj = this;
    setTimeout(function() {
      obj.getAllMacros();
      obj.props.setCaloriesArray(obj.state.allCals);
    }, 1000)
  }

  render() {
    return (
      <div className="well-black meal text-center">
        <span className="pull-left"><strong className="meal-title">Mea1 {this.props.index}</strong></span>
        <span>
          Calories <input
            type="text"
            className="macros-input cal"
            onChange={this.handleChange.bind(this)}>
          </input>
          { this.state.allCals ? this.state.allCals[this.props.index - 1] : "" }
          Carbs <input
            type="text"
            className="macros-input carb"
            value={this.props.carb}>
          </input>
          Fat <input
            type="text"
            className="macros-input fat"
            value={this.props.fat}>
          </input>
          Protein <input
            type="text"
            className="macros-input pro"
            value={this.props.pro}>
          </input>
        </span>
         {this.props.index === "5" ? <button onClick={() => this.handleChange.bind(this)}>Test</button> : ""}
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
