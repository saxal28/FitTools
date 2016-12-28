import React, { Component } from "react";
import Navbar from "../common/Navbar";
import { connect } from "react-redux"
import MyAwesomeReactComponent from "../common/TestMaterialUi";
import DrawerNavbar from "../common/DrawerNavbar";

class TestPage extends Component {
  render() {
   return (
     <div>


       <div className="container text-center">
            <DrawerNavbar />
         <h1>This is the test page</h1>
         <h4>Lets do some tests for redux here</h4>

         <br />

         <h4>Calories Set At the Beginning: { this.props.TDEE ? this.props.TDEE : "Not Available Yet" }</h4>
         <h4>Weight Set at the Beginning: {this.props.WEIGHT}</h4>
         <h4>Height Set at the Beginning: {this.props.HEIGHT}</h4>
         <h4>Age set at the beginning: {this.props.AGE}</h4>
          <br />
            <h4>Calories Array as followed: { this.props.caloriesArr.map((x) => x+" " ) }</h4>
            <h4>Carbs Array as followed: { this.props.carbArr.map((x) => x+" " ) }</h4><br />

          <h4>Total Cal is: {this.props.totalCal}</h4>
          <h4>Total Carb is: {this.props.totalCarb}</h4>
          <h4>Total Fat is: {this.props.totalFat}</h4>
          <h4>Total Pro is: {this.props.totalPro}</h4>

       </div>
     </div>
   )
  }
}

function mapStateToProps(state) {
  return {
    TDEE: state.TDEE,
    WEIGHT:state.WEIGHT,
    AGE:state.AGE,
    HEIGHT:state.HEIGHT,

    caloriesArr: state.caloriesArr,
    carbArr: state.carbArr,

    totalCal: state.totalCal,
    totalCarb: state.totalCarb,
    totalFat: state.totalFat,
    totalPro: state.totalPro
  }
}

export default connect(mapStateToProps)(TestPage)
