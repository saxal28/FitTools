import React from "react";
import Paper from "material-ui/Paper";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link } from "react-router";

export default function MenuPage() {
  return (
    <MuiThemeProvider>
      <div className="container">
        <div className="tools-title">
          <h1>To Get Started...</h1>
          <h3>Select a Tool Below!</h3>
        </div>

          <div className="tools-container">
            <div className="row">

                <div className="col-sm-4">
                  <Link to= "/tools/meal-planner">
                  <Card>
                    <CardMedia>
                      <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>
                    </CardMedia>
                    <CardHeader
                      title="Meal Planner"
                    />
                  <CardText>
                    Plan out or track your meals here. See a breakdown of each meal by macro
                  </CardText>
                  </Card>
                    </Link>
                </div>

                <div className="col-sm-4">
                  <Link to= "/tools/meal-stats">
                  <Card>
                    <CardMedia>
                      <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>
                    </CardMedia>
                    <CardHeader
                      title="Meal Stats"
                      subtitle="See a visual representation of the macros for each meal"
                    />
                  </Card>
                    </Link>
                </div>

                <div className="col-sm-4">
                  <Link to= "/tools/run-helper">
                  <Card>
                    <CardMedia>
                      <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>
                    </CardMedia>
                    <CardHeader
                      title="Run"
                      subtitle="Check out the current conditions and other helpful info before your run!"
                    />
                  </Card>
                    </Link>
                </div>
              </div>

                  <div className="row padded">

                      <div className="col-sm-4">
                        <Link to= "">
                        <Card>
                          <CardMedia>
                            <img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>
                          </CardMedia>
                          <CardHeader
                            title="Health Breakdown"
                          />
                        <CardText>
                          <small>FUTURE FEATURE. It is going to show alot of info like: BMI, charts comparing you against others your age, estimated bodyfat...etc</small>
                        </CardText>
                        </Card>
                          </Link>
                      </div>
                    </div>

          </div>

        </div>
    </MuiThemeProvider>
  )
}
