import React, { Component } from "react";
import { connect } from "react-redux"

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

// const style = {
//   width:"24%",
//   marginLeft : "5px",
//   textAlign: "center",
//   paddingLeft:"10px",
//   fontSize:"20px",
//   background:"transparent"
// };

class TestPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 1,
      text1: ""
    }
  }

  handleSelectChange = (event, index, value) => this.setState({value});
  handleTextChange = (e) => this.setState({text1: e.target.value})

  render() {
   return (
     <div>
       <MuiThemeProvider>

       <div className="container">
         <Paper zDepth={3} style={{padding:"20px"}}>
         <h1>This is the test page</h1>
         <h4>Lets do some tests for redux here</h4>
         <h4>This page is for those who want to see how this application works.
          The varaibles on the route page "/" or MyStats page were initially saved to the redux store and are called when needed.
         </h4>

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

          <RaisedButton
            label="Test Button"
            onTouchTap={() => alert(this.props.TDEE)}
            /> <br />

            </Paper>
        </div>

      </MuiThemeProvider >
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
