import React, { Component } from "react";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MealChart from "../common/MealChart";
import { connect } from 'react-redux';

class MacroPlannerContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ratios          : [0.4,0.3,0.3],
      ratiosFormatted : ["40%", "30%", "30%"],
      carb            : null,
      fat             : null,
      pro             : null
    }
  }
  getSelectValue() {
    const option = document.body.querySelector("select").value;
    let ratios = [];
    let ratiosFormatted = [];

    const macroRatios = {
      "Balanced"                : [0.40, 0.30, 0.30],
      "High Carb"               : [0.60, 0.15, 0.25],
      "Low Carb"                : [0.10, 0.40, 0.50],
      "Anabolic Diet (Weekday)" : [0.05, 0.65, 0.30],
      "Anabolic Diet (Weekend)" : [0.60, 0.20, 0.20]
    }

    ratios = macroRatios[option]
    //formats the ratios nicely for presentation
    ratios.forEach(function(x) {
      ratiosFormatted.push((x * 100).toString() + "%")
    })

    this.setState({
      ratios,
      ratiosFormatted
     })
  }

  adjustMacros() {
    //changes gram macro values
    const TDEE = this.props.TDEE;
    const ratios = this.state.ratios;
    let carb  = Math.floor(TDEE * ratios[0] / 4);
    let fat   = Math.floor(TDEE * ratios[1] / 9);
    let pro   = Math.floor(TDEE * ratios[2] / 4);
    this.setState({
      carb,
      fat,
      pro
    })
  }

  handleSelectChange() {
    const that = this;
    setTimeout(function() {
        that.getSelectValue();
        that.adjustMacros();
    },300)
  }

  componentDidMount() {
    let TDEE  = this.props.TDEE;
    let ratios = this.state.ratios;
    let carb  = Math.floor(TDEE * ratios[0] / 4);
    let fat   = Math.floor(TDEE * ratios[1] / 9);
    let pro   = Math.floor(TDEE * ratios[2] / 4);
    this.setState({
      carb,
      fat,
      pro
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Paper
                zDepth={3}>
                <div className="well-form-auto text-center">
                  <h2 className="sub-heading">Select Macro</h2>
                  <h2><small>TDEE : {this.props.TDEE}</small></h2>
                  <select className="input-select" style={{width:"90%"}} onChange={this.handleSelectChange.bind(this)}>
                    <option>Balanced</option>
                    <option>High Carb</option>
                    <option>Low Carb</option>
                    <option>Anabolic Diet (Weekday)</option>
                    <option>Anabolic Diet (Weekend)</option>
                  </select>
                  <div className="row">
                    <div className="col-xs-7 text-right">
                      <h3><span style={{background:"rgba(215,245,250,0.5)", padding:"5px", border:'1px solid #333'}}>Carb({this.state.ratiosFormatted[0]})</span></h3>
                      <h3><span style={{background:'rgba(121,162,234,0.5)', padding:"5px", border:'1px solid #333'}}>Fat ({this.state.ratiosFormatted[1]})</span></h3>
                      <h3><span style={{background:'rgba(60,49,180,0.5)', padding:"5px", border:'1px solid #333'}}>Protein ({this.state.ratiosFormatted[2]})</span></h3>
                    </div>
                    <div className="col-xs-5 text-left">
                      <h3>{this.state.carb}g</h3>
                      <h3>{this.state.fat}g</h3>
                      <h3>{this.state.pro}g</h3>
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="col-sm-6">
              <Paper
                style={{paddingTop:"20px", background:"transparent"}}
                zDepth={0}>
                <div className="well-form-auto">
                  <MealChart
                    mealValue1={this.state.carb ? this.state.carb : 0}
                    mealValue2={0}
                    mealValue3={this.state.fat ? this.state.fat : 0}
                    mealValue4={0}
                    mealValue5={this.state.pro ? this.state.pro : 0}
                    mealValue6={0} />
                  <h2 className="text-center"><small>This will be a description</small></h2>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
      TDEE: state.TDEE
  }
}

export default connect(mapStateToProps)(MacroPlannerContainer)
