import React, { Component } from "react";
import MealChart from "../common/MealChart";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class MealStatsContainer extends Component {
  constructor(props) {
    super(props)

    this.state= {
      index: 0
    }
  }

  updateMeal(value) {
    const newMeal = value;
    this.setState({
      index: Number(newMeal) - 1
    })
  }

  nextMeal() {
    if(this.state.index < 5) {
      const newMeal = this.state.index + 1;
      this.setState({
        index: newMeal
      })
      const selector = document.querySelector("select");
      selector.value = this.state.index + 2
    }
  }

  renderWarning() {
    return (
      <div className="alert alert-danger">
        <strong>GO AND SET YOUR FIRST MEAL!</strong>
      </div>
      )
  }

  render() {
    const style = {
      // background:"rgba(0,0,0,0.4)",
      // color: "white",
      // border:'1px solid white'
    }
    return (
      <MuiThemeProvider>

        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <Paper zDepth={3}>
              <div className="well-form-auto" style={style}>
                <div className="row">
                  <h2>Meals</h2>
                  {this.props.caloriesArr[this.state.index] < 1 ?  <h2><small>No Meal Set</small></h2> : ""}
                    <select
                      className="input-select"
                      style={{width:"90%"}}
                      onChange={() => this.updateMeal(document.body.querySelector("select").value)}>
                      <option value="1">Meal 1</option>
                      <option value="2">Meal 2</option>
                      <option value="3">Meal 3</option>
                      <option value="4">Meal 4</option>
                      <option value="5">Meal 5</option>
                      <option value="6">Meal 6</option>
                    </select>

                </div>

                <div className="row">
                    <h2><small>{Math.floor(this.props.caloriesArr[this.state.index] / this.props.TDEE * 100 )}% of Total TDEE</small></h2>
                </div>

                <div className="row">
                  <div className="col-xs-7 text-right">
                    <h3><span style={{background:"rgba(255,255,255,0.5)", padding:"5px", border:'1px solid #333'}}>Cal</span></h3>
                    <h3><span style={{background:"rgba(215,245,250,0.5)", padding:"5px", border:'1px solid #333'}}>Carb</span></h3>
                    <h3><span style={{background:'rgba(121,162,234,0.5)', padding:"5px", border:'1px solid #333'}}>Fat</span></h3>
                    <h3><span style={{background:'rgba(60,49,180,0.5)', padding:"5px", border:'1px solid #333'}}>Protein</span></h3>
                  </div>
                  <div className="col-xs-5 text-left">
                    <h3>{this.props.caloriesArr[this.state.index]}kCal</h3>
                    <h3>{this.props.carbArr[this.state.index]}g</h3>
                    <h3>{this.props.fatArr[this.state.index]}g</h3>
                    <h3>{this.props.proArr[this.state.index]}g</h3>
                  </div>
                </div>

              </div>
              </Paper>
            </div>

            <div className="col-sm-6 col-xs-12">
              <Paper zDepth={3}>
              <div className="well-form-auto">
                <MealChart
                  mealValue1={Number(this.props.carbArr[this.state.index])}
                  mealValue2={0}
                  mealValue3={Number(this.props.fatArr[this.state.index])}
                  mealValue4={0}
                  mealValue5={Number(this.props.proArr[this.state.index])}
                  mealValue6={0} />
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
    TDEE: state.TDEE,
    caloriesArr: state.caloriesArr,
    carbArr: state.carbArr,
    fatArr: state.fatArr,
    proArr: state.proArr
  }
}

export default connect(mapStateToProps)(MealStatsContainer)


// <div className="row">
//   <div className="col-xs-7 text-right">
//     <h3><span style={{background:"rgba(215,245,250,0.5)", padding:"5px", border:'1px solid #333'}}>Carb</span></h3>
//     <h3><span style={{background:'rgba(121,162,234,0.5)', padding:"5px", border:'1px solid #333'}}>Fat</span></h3>
//     <h3><span style={{background:'rgba(60,49,180,0.5)', padding:"5px", border:'1px solid #333'}}>Protein</span></h3>
//   </div>
//   <div className="col-xs-5 text-left">
//     <h3>{this.props.caloriesArr[this.state.index]}kCal</h3>
//     <h3>{this.props.carbArr[this.state.index]}g</h3>
//     <h3>{this.props.fatArr[this.state.index]}g</h3>
//     <h3>{this.props.proArr[this.state.index]}g</h3>
//   </div>
// </div>
