import React from "react";
import { Link } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardHeader} from "material-ui/Card"

function ToolsCard(props) {
  return (
    <MuiThemeProvider>
      <Link to={props.link}>
        <Card zDepth={1} className="clear">
          <CardMedia>
            <img
              src="https://i.imgur.com/seuaOqf.gif"
              role="presentation"
            />
          </CardMedia>
          <CardHeader
            title={props.title}
            subtitle={props.subtitle}
          />
        </Card>
      </Link>
    </MuiThemeProvider>
  )
}

export default ToolsCard
