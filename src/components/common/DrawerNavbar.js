import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from "material-ui/Divider";

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Link } from "react-router"

export default class DrawerNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <div className="text-left">
            <RaisedButton
              label="X"
              onTouchTap={this.handleToggle}
            />
          </div>
          <Drawer
            docked={false}
            width={120}
            overlayStyle={{"background":"transparent"}}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem><Link to="/">My Stats</Link></MenuItem>
            <Divider />
            <MenuItem><Link to="/tools">Tools</Link></MenuItem>
            <Divider />
            <MenuItem><Link to="/tools/meal-planner">Meal Planner</Link></MenuItem>
            <MenuItem><Link to="/tools/meal-stats" activeClassName="active">Meal Stats</Link></MenuItem>
            <MenuItem><Link to="/tools/run-helper" activeClassName="active">Run Helper</Link></MenuItem>

            <RaisedButton
              label="test"
              onTouchTap={() => alert(this.state.open)}/>

          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
