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
      numberOfMeals: [1,2,3,4,5,6]
    }
    const obj = this;
  }

  addMealChartAttributes() {

  }

  render() {

    return (
      <div>

      <Navbar />

      <div className="container app">
        <div className="row">

          <div className="col-sm-6">
            {this.state.numberOfMeals.map((x, index) => <IndividualMealComponent index= {x} key={index} /> )}
          </div>

          <div className="col-sm-6">
            <MealAdjusterComponent info={this.props.calories.calories} TDEE={this.props.TDEE} />

            <div className="row">
              <div className="col-sm-6">
                <MealChart
                  mealValue1={Number(this.props.caloriesArr[0])}
                  mealValue2={Number(this.props.caloriesArr[1])}
                  mealValue3={Number(this.props.caloriesArr[2])}
                  mealValue4={Number(this.props.caloriesArr[3])}
                  mealValue5={Number(this.props.caloriesArr[4])}
                  mealValue6={Number(this.props.caloriesArr[5])}
                  title="Calorie Breakdown"
                />
              </div>
              <div className="col-sm-6">
                <MealChart
                  mealValue1={Number(this.props.carbArr[0])}
                  mealValue2={Number(this.props.carbArr[1])}
                  mealValue3={Number(this.props.carbArr[2])}
                  mealValue4={Number(this.props.carbArr[3])}
                  mealValue5={Number(this.props.carbArr[4])}
                  mealValue6={Number(this.props.carbArr[5])}
                  title="Carb Breakdown"
                />
              </div>

            </div>

            <div className="row">
              <div className="col-sm-6">
                <MealChart
                  mealValue1={Number(this.props.fatArr[0])}
                  mealValue2={Number(this.props.fatArr[1])}
                  mealValue3={Number(this.props.fatArr[2])}
                  mealValue4={Number(this.props.fatArr[3])}
                  mealValue5={Number(this.props.fatArr[4])}
                  mealValue6={Number(this.props.fatArr[5])}
                  title="Fat Breakdown"
                />
              </div>
              <div className="col-sm-6">
                <MealChart
                  mealValue1={Number(this.props.proArr[0])}
                  mealValue2={Number(this.props.proArr[1])}
                  mealValue3={Number(this.props.proArr[2])}
                  mealValue4={Number(this.props.proArr[3])}
                  mealValue5={Number(this.props.proArr[4])}
                  mealValue6={Number(this.props.proArr[5])}
                  title='Protein Breakdown'
                />
              </div>

            </div>


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
    caloriesArr: state.caloriesArr,
    carbArr:state.carbArr,
    fatArr: state.fatArr,
    proArr: state.proArr

  }
}

export default connect(mapStateToProps)(MealPageContainer)

// <IndividualMealComponent index="2"/>
// <IndividualMealComponent index="3"/>
// <IndividualMealComponent index="4"/>
// <IndividualMealComponent index="5"/>
//
