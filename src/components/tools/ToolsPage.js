import React from "react";
import Navbar from "../common/Navbar";
import { Link } from "react-router";

export default function MenuPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="tools-title">
          <h1>To Get Started...</h1>
          <h3>Select a Tool Below!</h3>
        </div>

          <div className="tools-container">
            <div className="row padded">
              <div className="col-sm-4">
                <Link to="/tools/meal-planner">
                  <div className="tools-box" />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/tools/meal-planner">
                  <div className="tools-box" />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/tools/meal-planner">
                  <div className="tools-box" />
                </Link>
              </div>
            </div>

            <div className="row padded">
              <div className="col-sm-4">
                <div className="tools-box" />
              </div>
              <div className="col-sm-4">
                <div className="tools-box" />
              </div>
              <div className="col-sm-4">
                <div className="tools-box" />
              </div>
            </div>

          </div>

        </div>

  </div>
  )
}
