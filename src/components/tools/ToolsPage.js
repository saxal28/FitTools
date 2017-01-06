import React from "react";
import ToolsCard from "../common/ToolsCard";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Paper from "material-ui/Paper";
import Card from "material-ui/Card";

export default function MenuPage() {
  return (
    <MuiThemeProvider>
      <div className="container">

        <div className="tools-title">
          <Card zDepth={1} style={{marginTop:"4%"}}>
            <h1 className="sub-heading">To Get Started...</h1>
            <h3 className="sub-heading">Select a Tool Below!</h3>
          </Card>
        </div>

            <Card zDepth={2}>
            <div className="row padded sub-heading gray">
              <i className="fa fa-plus" aria-hidden="true"></i> <span className="input-row-label type-white">Health</span>
            </div>

            <div className="row">
                <div className="col-sm-4">
                  <ToolsCard
                    title="Health Status"
                    subtitle="Get a Quick Breakdown of your Health"
                    link="/tools/health-status"/>
                </div>

                <div className="col-sm-4">
                  <ToolsCard
                    title="Meal Planner"
                    subtitle="Plan out and Track your Meals here."
                    link="/tools/meal-planner"/>
                </div>

                <div className="col-sm-4">
                  <ToolsCard
                    title="Meal Stats"
                    subtitle="See a visual representation of your macros for each meal"
                    link="/tools/meal-stats"/>
                </div>
              </div>


              <div className="row padded">
                <div className="col-sm-4">
                  <ToolsCard
                    title="Macro Planner"
                    subtitle="Find Your Macros Based on Your Goals"
                    link="/tools/macro-planner"/>
                </div>
              </div>

              </Card>

              <div className="row padded sub-heading gray">
                <i className="fa fa-child" aria-hidden="true"></i> <span className="input-row-label type-white">Active</span>
              </div>

              <div className="row">
                <div className="col-sm-4">
                <Card style={{padding:"20px"}} zDepth={0}>
                      <ToolsCard
                        title="Run Helper"
                        subtitle="Check the Current Conditions and other useful info before your run"
                        link="/tools/run-helper"/>
                </Card>
                </div>
              </div>

              <div className="row padded sub-heading gray">
                  <i className="fa fa-user-md" aria-hidden="true"></i> <span className="input-row-label type-white">Community</span>
                    </div>

                    <div className="row padded sub-heading gray">
                      <i className="fa fa-graduation-cap" aria-hidden="true"></i> <span className="input-row-label type-white">Fitness Primers</span>
                      <div className="row">

                      </div>
                    </div>

                    <div className="row padded">
                      <div className="col-sm-4">

                      </div>
                    </div>

        </div>
    </MuiThemeProvider>
  )
}

// https://image.slidesharecdn.com/anabolicdietbymaurodipasquale-140318084625-phpapp01/95/anabolic-diet-by-mauro-di-pasquale-1-638.jpg?cb=1395132521
