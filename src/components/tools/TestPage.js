import React, { Component } from "react";
import { connect } from "react-redux"

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  width:"24%",
  marginLeft : "5px",
  textAlign: "center",
  paddingLeft:"10px",
  fontSize:"20px",
  background:"transparent"
};

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

       <div className="container text-center">
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

          <RaisedButton
            label="Test Button"
            onTouchTap={() => alert(this.props.TDEE)}
            /> <br />

            <SelectField
              floatingLabelText="Frequency"
              value={this.state.value}
              onChange={this.handleSelectChange}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <br />

            <br />
            <h1>{this.state.text1}</h1>

            <Paper zDepth={3} style={{background:"transparent"}}>
              <TextField hintText="First name" style={style} underlineShow={false} fullWidth={true} onChange={this.handleTextChange.bind(this)}/>
              <Divider />
              <TextField hintText="Middle name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Last name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Email address" style={style} underlineShow={false} />
              <Divider />
            </Paper>
            <br />
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
