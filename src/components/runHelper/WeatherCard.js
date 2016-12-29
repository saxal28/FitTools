import React from "react";
import {Card, CardHeader, CardText} from 'material-ui/Card';
import _ from "lodash"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const WeatherCard = (props) => (
  <MuiThemeProvider>
      <Card>
        <CardHeader
          subtitle="Run Helper"
          actAsExpander={true}
          showExpandableButton={true}
        >
          <div className="weather-box">
            <h3>Weather</h3>
            <h2 className="weather-text type-green">{props.temp}</h2>
            <p>It is too cold outside to run!</p>
          </div>

        </CardHeader>
        <CardText expandable={true}>
          <h3>This is going to be a google map of the area</h3>
          <p>Maybe highlight running/cycling paths</p>
          <img src="http://www.madmanblog.com/wp-content/uploads/2012/08/Rome-Google-Map.jpg" className="img-responsive" role="presentation" />

          <h3>This is going to be a recommended clothing guide based on weather conditions</h3>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </p>

          <div className="row">
            <div className="col-sm-4">
              <img src="http://www.madmanblog.com/wp-content/uploads/2012/08/Rome-Google-Map.jpg" className="img-responsive" role="presentation"/>
            </div>
            <div className="col-sm-4">
              <img src="http://www.madmanblog.com/wp-content/uploads/2012/08/Rome-Google-Map.jpg" className="img-responsive" role="presentation"/>
            </div>
            <div className="col-sm-4">
              <img src="http://www.madmanblog.com/wp-content/uploads/2012/08/Rome-Google-Map.jpg" className="img-responsive" role="presentation"/>
            </div>
          </div>

        </CardText>
      </Card>

  </MuiThemeProvider>
);

export default WeatherCard;
