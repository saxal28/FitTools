import React, { Component } from "react";
//reusable components
import Navbar from "../common/Navbar";
import InputRow from "../common/InputRow";
import SelectRow from "../common/SelectRow";

import { Link } from "react-router";
import { connect } from "react-redux";

class TdeeCalculator extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="well-form text-center">

            <div className="row">
              <div className="col-sm-6 text-center">
                <InputRow label="Age: " placeholder={this.props.AGE} id="AGE" />
                <InputRow label="Height: " placeholder={this.props.HEIGHT} id="HEIGHT"/>
                <InputRow label="Weight: " placeholder={this.props.WEIGHT} id="WEIGHT"/>
                <SelectRow
                  label="Activity Level: "
                  option1="none" value1={0.30}
                  option2="moderate" value2={0.50}
                  option3="heavy" value3={1}
                />
              </div>
              <div className="col-sm-6">
                <h1>Your TDEE is...</h1>
                <h1 className="type-green">{this.props.TDEE}</h1>

                <Link to="/tools" className="btn home-button">To Tools!</Link>
              </div>
            </div>

        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    TDEE: state.TDEE,
    WEIGHT: state.WEIGHT,
    AGE: state.AGE,
    HEIGHT: state.HEIGHT
  }
}

export default connect(mapStateToProps)(TdeeCalculator);
