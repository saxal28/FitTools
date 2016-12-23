import React, { Component } from "react";
import Navbar from "../common/Navbar";
import { connect } from "react-redux"

class TestPage extends Component {
  render() {
   return (
     <div>
       <Navbar />
       <div className="container">
         <h1>This is the test page</h1>
         <h4>Lets do some tests for redux here</h4>

         <br />

         <h4>Calories Set At the Beginning: { this.props.TDEE ? this.props.TDEE : "Not Available Yet" }</h4>
         <h4>Weight Set at the Beginning: {this.props.WEIGHT}</h4>
         <h4>Age set at the beginning: {this.props.AGE}</h4>
          <br />
            <h4>Calories Array as followed: { this.props.caloriesArr.map((x) => x+" " ) }</h4>
            <h4>Carbs Array as followed: { this.props.carbArr.map((x) => x+" " ) }</h4>


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
    caloriesArr: state.caloriesArr,
    carbArr: state.carbArr
  }
}

export default connect(mapStateToProps)(TestPage)
