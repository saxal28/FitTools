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
          <h1>Calories {this.props.calories.calories}</h1>
          <div className="col-sm-6">
            <IndividualMealComponent />
            <SummaryMealComponent />
          </div>

          <div className="col-sm-6">
            <MealAdjusterComponent info={this.props.calories.calories}/>
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
    calories: state.calories
  }
}

export default connect(mapStateToProps)(MealPageContainer)
