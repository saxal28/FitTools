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
          <div className="text-center" style={{background:"rgba(152, 198, 240, 0.498039)"}}>
              <span className="input-row-label float-left">TDEE: {this.props.TDEE ? this.props.TDEE : 2000}</span>
              <span className="input-row-label float-right"> Calories Spent: </span> {this.isGreaterThanTDEE() ? <span className="input-row-label type-red"> {this.props.totalCal}</span> : <span className="input-row-label type-green">{this.props.totalCal}</span> }
        </div>
      </div>
    )
  }
}
