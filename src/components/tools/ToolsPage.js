import React from "react";
import { Card, CardHeader, CardMedia } from "material-ui/Card";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from "material-ui/Paper"

import { Link } from "react-router";

export default function MenuPage() {
  return (
    <MuiThemeProvider>
      <div className="container">
        <div className="tools-title">
          <Paper zDepth={3} style={{padding:"20px", marginTop:"30px"}}>
            <h1>To Get Started...</h1>
            <h3>Select a Tool Below!</h3>
          </Paper>
        </div>

          <div className="tools-container">
            <div className="row padded">
              <i className="fa fa-plus" aria-hidden="true"></i> <span className="input-row-label type-red">Health</span>
            </div>

            <div className="row">
                <div className="col-sm-4">
                  <Link to="/tools/health-status">
                    <Card zDepth={2}>
                      <CardMedia>
                        <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" role="presentation"/>
                      </CardMedia>
                      <CardHeader
                        title="Health Status"
                        subtitle="See how your stats compare to others your age."
                      />
                    </Card>
                  </Link>
                </div>

                <div className="col-sm-4">
                  <Link to="/tools/meal-planner">
                  <Card zDepth={2}>
                    <CardMedia>
                      <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" role="presentation"/>
                    </CardMedia>
                    <CardHeader
                      title="Meal Planner"
                      subtitle="Plan out or track your meals here. See a breakdown of each meal by macro"
                    />
                  </Card>
                    </Link>
                </div>

                <div className="col-sm-4">
                  <Link to="/tools/meal-stats">
                  <Card zDepth={2}>
                    <CardMedia>
                      <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" role="presentation"/>
                    </CardMedia>
                    <CardHeader
                      title="Meal Stats"
                      subtitle="See a visual representation of the macros for each meal"
                    />
                  </Card>
                    </Link>
                </div>
              </div>

              <div className="row padded">
                <div className="col-sm-4">
                  <Link to="/tools/meal-stats">
                  <Card zDepth={2}>
                    <CardMedia>
                      <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" role="presentation"/>
                    </CardMedia>
                    <CardHeader
                      title="Macro Planner"
                      subtitle="Determine your macros based on your goals."
                    />
                  </Card>
                    </Link>
                </div>
              </div>

              <div className="row padded">
                <i className="fa fa-child" aria-hidden="true"></i> <span className="input-row-label type-red">Active</span>
              </div>

                  <div className="row padded">

                      <div className="col-sm-4">
                        <Link to="/tools/run-helper">
                        <Card zDepth={2}>
                          <CardMedia>
                            <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" role="presentation"/>
                          </CardMedia>
                          <CardHeader
                            title="Run Buddy"
                            subtitle="Check out the current conditions and other helpful info before your run!"
                          />
                        </Card>
                          </Link>
                      </div>
                    </div>

                    <div className="row padded">
                      <i className="fa fa-user-md" aria-hidden="true"></i> <span className="input-row-label type-red">Community</span>
                    </div>

                    <div className="row padded">
                      <i className="fa fa-graduation-cap" aria-hidden="true"></i> <span className="input-row-label type-red">Fitness Primers</span>
                    </div>

                    <div className="row padded">
                      <div className="col-sm-4">
                        <a
                          href="https://www.reddit.com/r/Fitness/wiki/getting_started"
                          target="_blank">

                          <Card zDepth={2}>
                            <CardMedia>
                              <img src="https://www.workinghomeguide.com/wp-content/uploads/2012/01/reddit-logo.jpg" role="presentation"/>
                            </CardMedia>
                            <CardHeader
                              title="Reddit Fitness Wiki"
                              subtitle="A very basic fitness primer to get you started."
                            />
                          </Card>
                        </a>

                      </div>
                    </div>

          </div>

        </div>
    </MuiThemeProvider>
  )
}

// https://image.slidesharecdn.com/anabolicdietbymaurodipasquale-140318084625-phpapp01/95/anabolic-diet-by-mauro-di-pasquale-1-638.jpg?cb=1395132521
