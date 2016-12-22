//============================
//   CONTAINER COMPONENT
//============================

import React, { Component } from 'react';
//redux
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// child components
import Navbar from "../common/Navbar";
import MealAdjusterComponent from "./MealAdjusterComponent";
import IndividualMealComponent from "./IndividualMealComponent";
import SummaryMealComponent from "./SummaryMealComponent";
import MealChart from "./MealChart";

class MealPageContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      test: "123"
    }
  }
  render() {

    return (
      <div>

      <Navbar />

      <div className="container app">
        <div className="row">
          <h1>Calories { this.props.TDEE ? this.props.TDEE : 2000}</h1>
          <div className="col-sm-6">
            <IndividualMealComponent index="1"/>
            <IndividualMealComponent index="2"/>
            <IndividualMealComponent index="3"/>
            <IndividualMealComponent index="4"/>
            <IndividualMealComponent index="5"/>
            <SummaryMealComponent />
          </div>

          <div className="col-sm-6">
            <MealAdjusterComponent info={this.props.calories.calories} TDEE={this.props.TDEE}/>
            <MealChart mealValue1="10" mealValue2="01" mealValue3={10} mealValue4={10} mealValue5={10}/>
          </div>

        </div>
      </div>

    </div>
    );
  }
}

//connecting container to redux
function mapStateToProps(state) {
  return {
    calories: state.calories,
    TDEE: state.TDEE,
  }
}

export default connect(mapStateToProps)(MealPageContainer)
