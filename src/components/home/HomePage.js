import React, { Component } from "react";
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="well-black">
          <h1>Welcome To Fit-Tools</h1>
          <h3>Enter Your Details to Get Started</h3>
        </div>
        <div className="well-black">
          <Link to="/tools" className="btn btn-danger">To Tools</Link>
        </div>
      </div>
    )
  }
}
