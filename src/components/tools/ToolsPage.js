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
                    <CardHeader
                      title="Meal Planner"
                      subtitle="Plan out or track your meals here. See a breakdown of each meal by macro."
                    />
                    <CardMedia>
                      <img src="../../public/images/sea.jpg"/>
                    </CardMedia>
                  </Card>
                    </Link>
                </div>

                <div className="col-sm-4">
                  <Link to= "/tools/meal-stats">
                  <Card>
                    <CardHeader
                      title="Meal Stats"
                      subtitle="See a visual representation of the macros for each meal"
                    />
                    <CardMedia>
                      <img src="../../public/images/sea.jpg"/>
                    </CardMedia>
                  </Card>
                    </Link>
                </div>

                <div className="col-sm-4">
                  <Link to= "/tools/run-helper">
                  <Card>
                    <CardHeader
                      title="Run"
                      subtitle="Check out the current conditions and other helpful info before your run!"
                    />
                    <CardMedia>
                      <img src="../../public/images/sea.jpg"/>
                    </CardMedia>
                  </Card>
                    </Link>
                </div>





            </div>
          </div>

        </div>
    </MuiThemeProvider>
  )
}
