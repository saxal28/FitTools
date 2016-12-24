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
                <InputRow label="Age: " placeholder={this.props.AGE}/>
                <InputRow label="Height: "/>
                <InputRow label="Weight: " placeholder={this.props.WEIGHT}/>
                <SelectRow
                  label="Activity Level: "
                  option1="none"
                  option2="casual"
                  option3="moderate"
                  option4="extreme"
                />
              </div>
              <div className="col-sm-6">
                <h1>Your TDEE is...</h1>
                <h2>TDEE</h2>

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
    AGE: state.AGE
  }
}

export default connect(mapStateToProps)(TdeeCalculator);
