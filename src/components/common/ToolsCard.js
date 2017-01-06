import React from "react";
import { Link } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardHeader} from "material-ui/Card"

function ToolsCard(props) {
  return (
    <MuiThemeProvider>
      <Link to={props.link}>
        <Card
          zDepth={0}
          expanded={false}
          className="clear">
          <CardHeader>

          </CardHeader>
          <CardMedia>
            <img
              src="https://i.imgur.com/seuaOqf.gif"
              role="presentation"
            />
          </CardMedia>
        </Card>
      </Link>
    </MuiThemeProvider>
  )
}

export default ToolsCard

// <CardHeader
//   title={props.title}
//   subtitle={props.subtitle}
// />
