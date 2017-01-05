import React from 'react';
// import MealChart from "./MealChart";

export default class MealAdjusterComponent extends React.Component {
  isGreaterThanTDEE() {
    if(this.props.totalCal > this.props.TDEE) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
          <div className="row">
            <div className="col-xs-6 text-right">
              <span className="input-row-label float-left">TDEE: {this.props.TDEE ? this.props.TDEE : 2000}</span>
            </div>
            <div className="col-xs-6 text-left">
              <span className="input-row-label float-right"> Calories Spent: </span> {this.isGreaterThanTDEE() ? <span className="input-row-label type-red"> {this.props.totalCal}</span> : <span className="input-row-label type-green">{this.props.totalCal}</span> } <br/>
            </div>
        </div>
      </div>
    )
  }
}
