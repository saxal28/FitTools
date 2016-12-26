import React, { Component } from "react";
import Navbar from "../common/Navbar";
import MealChart from "../common/MealChart";
import { connect } from "react-redux";

class MealStatsContainer extends Component {
  constructor(props) {
    super(props)

    this.state= {
      index: 0
    }
  }

  updateMeal(value) {
    const newMeal = value;
    console.log(Number(value) - 1)
    this.setState({
      index: Number(newMeal) - 1
    })
  }


  renderWarning() {
    return (
      <div className="alert alert-danger">
        <strong>GO AND SET YOUR FIRST MEAL!</strong>
      </div>
      )
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center">

          <div className="row">

            <div className="col-sm-6 col-xs-12">
              <div className="well-form-auto white-border-top-margin">
                <div className="row">
                  <div className="col-xs-6">
                    <span className="input-row-label">Meals</span>
                  </div>

                  <div className="col-xs-6">
                    <select className="input-select" onChange={() => this.updateMeal(document.body.querySelector("select").value)}>
                      <option value="1">Meal 1</option>
                      <option value="2">Meal 2</option>
                      <option value="3">Meal 3</option>
                      <option value="4">Meal 4</option>
                      <option value="5">Meal 5</option>
                      <option value="6">Meal 6</option>

                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6">
                    <span className="input-row-label">Calories</span>
                  </div>

                  <div className="col-xs-6">
                    <input
                      type="text"
                      className="input-home"
                      placeholder={this.props.caloriesArr[this.state.index]}
                      disabled/><br />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6">
                    <span className="input-row-label">Carbs</span>
                  </div>

                  <div className="col-xs-6">
                    <input
                      type="text"
                      className="input-home"
                      placeholder={this.props.carbArr[this.state.index]}
                      disabled
                      /><br />

                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6">
                    <span className="input-row-label">Fats</span>
                  </div>

                  <div className="col-xs-6">
                    <input
                      type="text"
                      className="input-home"
                      placeholder={this.props.fatArr[this.state.index]}
                      disabled
                      /><br />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6">
                    <span className="input-row-label">Protein</span>
                  </div>

                  <div className="col-xs-6">
                    <input
                      type="text"
                      className="input-home"
                      placeholder={this.props.proArr[this.state.index]}
                      disabled
                      /><br />
                  </div>
                </div>

              </div>
            </div>

            <div className="col-xs-6 col-xs-12">
              <div className="well-form-auto">
                <MealChart
                  mealValue1={Number(this.props.carbArr[this.state.index])}
                  mealValue2={0}
                  mealValue3={Number(this.props.fatArr[this.state.index])}
                  mealValue4={0}
                  mealValue5={Number(this.props.proArr[this.state.index])}
                  mealValue6={0} />
              </div>
            </div>

          </div>

        </div>
        {console.log(typeof this.props.carbArr[1])}
    </div>
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
