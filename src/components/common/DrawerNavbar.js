import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from "react-router"
injectTapEventPlugin();

const buttonStyles =  {
  width:"30px",
  paddingTop:"10px"
}

export default class DrawerNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});



  render() {
    return (
      <MuiThemeProvider>
        <div className="text-center">
          <AppBar onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
          <Drawer
            docked={false}
            width={150}
            overlayStyle={{"background":"transparent"}}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <Link to="/"><MenuItem>My Stats</MenuItem></Link>
            <Link to="/tools"activeClassName="active"><MenuItem>Tools</MenuItem></Link>
            <Link to="/tools/test-page"activeClassName="active"><MenuItem>Test Page</MenuItem></Link>
            <Link to="/tools/meal-planner"activeClassName="active"><MenuItem>Meal Planner</MenuItem></Link>
            <Link to="/tools/meal-stats" activeClassName="active"><MenuItem>Meal Stats</MenuItem></Link>
            <Link to="/tools/run-helper" activeClassName="active"><MenuItem>Run Helper</MenuItem></Link>

            <RaisedButton
              label="Hide"
              primary={true}
              fullWidth={true}
              onTouchTap={() => this.setState({open : !this.state.open})}/>

          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
