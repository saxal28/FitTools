//============================
//   CONTAINER COMPONENT
//============================

import React, { Component } from 'react';
//redux
import { connect } from "react-redux";

// child components
import Navbar from "../common/Navbar";
import LabelRow from "../common/LabelRow";
import MealChart from "../common/MealChart";

import MealAdjusterComponent from "./MealAdjusterComponent";
import IndividualMealComponent from "./IndividualMealComponent";


class MealPageContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfMeals: [1,2,3,4,5,6]
    }
  }

  addMealChartAttributes() {

  }

  render() {

    return (
      <div>



      <div className="container app ">


        <div className="row">

          <div className="col-sm-6">
            <LabelRow title="Label"/>
            {this.state.numberOfMeals.map((name, index) => <IndividualMealComponent index={name} key={index} /> )}
          </div>

          <div className="col-sm-6">
              <MealAdjusterComponent info={this.props.calories.calories} TDEE={this.props.TDEE} totalCal={this.props.totalCal}/>
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <MealChart
                  mealValue1={Number(this.props.caloriesArr[0])}
                  mealValue2={Number(this.props.caloriesArr[1])}
                  mealValue3={Number(this.props.caloriesArr[2])}
                  mealValue4={Number(this.props.caloriesArr[3])}
                  mealValue5={Number(this.props.caloriesArr[4])}
                  mealValue6={Number(this.props.caloriesArr[5])}
                  title="Calories"
                />
              </div>
              <div className="col-sm-3 col-xs-6">
                <MealChart
                  mealValue1={Number(this.props.carbArr[0])}
                  mealValue2={Number(this.props.carbArr[1])}
                  mealValue3={Number(this.props.carbArr[2])}
                  mealValue4={Number(this.props.carbArr[3])}
                  mealValue5={Number(this.props.carbArr[4])}
                  mealValue6={Number(this.props.carbArr[5])}
                  title="Carbs"
                />
              </div>

              <div className="col-sm-3 col-xs-6">
                <MealChart
                  mealValue1={Number(this.props.fatArr[0])}
                  mealValue2={Number(this.props.fatArr[1])}
                  mealValue3={Number(this.props.fatArr[2])}
                  mealValue4={Number(this.props.fatArr[3])}
                  mealValue5={Number(this.props.fatArr[4])}
                  mealValue6={Number(this.props.fatArr[5])}
                  title="Fats"
                />
              </div>
              <div className="col-sm-3 col-xs-6">
                <MealChart
                  mealValue1={Number(this.props.proArr[0])}
                  mealValue2={Number(this.props.proArr[1])}
                  mealValue3={Number(this.props.proArr[2])}
                  mealValue4={Number(this.props.proArr[3])}
                  mealValue5={Number(this.props.proArr[4])}
                  mealValue6={Number(this.props.proArr[5])}
                  title='Protein'
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
    proArr: state.proArr,

    totalCal: state.totalCal,
    totalCarb: state.totalCarb,
    totalFat: state.totalFat,
    totalPro: state.totalPro

  }
}

export default connect(mapStateToProps)(MealPageContainer)

// <IndividualMealComponent index="2"/>
// <IndividualMealComponent index="3"/>
// <IndividualMealComponent index="4"/>
// <IndividualMealComponent index="5"/>
//
