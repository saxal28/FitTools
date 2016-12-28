import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Link } from "react-router"

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
      <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <div className="text-left">
            <FlatButton
              label=""
              onTouchTap={this.handleToggle}
              style={buttonStyles}
            ><i className="fa fa-bars" aria-hidden="true"></i></FlatButton>
          </div>
          <Drawer
            docked={false}
            width={140}
            overlayStyle={{"background":"transparent"}}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem><Link to="/">My Stats</Link></MenuItem>
            <MenuItem><Link to="/tools"activeClassName="active">Tools</Link></MenuItem>
            <MenuItem><Link to="/tools/test-page"activeClassName="active">Test Page</Link></MenuItem>
            <MenuItem><Link to="/tools/meal-planner"activeClassName="active">Meal Planner</Link></MenuItem>
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
