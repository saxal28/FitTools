import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from "react-router";
import $ from "jquery";
injectTapEventPlugin();


export default class DrawerNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      notMobile: false
    };
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  handleMobileDevice() {
    //this function checks if the screen is mobile size
    //if mobile size, it hides the drawer menu
    //else, it keeps the drawer locked
    const width = $(document).width(); // returns width of HTML document
    if (width > 1024) {
      this.setState({
        notMobile : !this.state.notMobile,
        open : !this.state.open
      });
    }
  }

  componentDidMount() {
    const that = this;
    setTimeout(function() {
        that.handleMobileDevice();
    }, 400)
    console.log(this.state.open)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="text-center">
          <AppBar onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
          <Drawer
            width={200}
            overlayStyle={{"background":"transparent"}}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            ref="navbar"
          >
            <Link to="/"><MenuItem>My Stats</MenuItem></Link>
            <Link to="/tools"activeClassName="active"><MenuItem>Tools</MenuItem></Link>
            <Link to="/tools/health-status" activeClassName="active"><MenuItem>Health Status</MenuItem></Link>
            <Link to="/tools/meal-planner"activeClassName="active"><MenuItem>Meal Planner</MenuItem></Link>
            <Link to="/tools/meal-stats" activeClassName="active"><MenuItem>Meal Stats</MenuItem></Link>
            <Link to="/tools/macro-planner"activeClassName="active"><MenuItem>Macro Planner</MenuItem></Link>
            <Link to="/tools/weight-tracker" activeClassName="active"><MenuItem>Weight Tracker</MenuItem></Link>
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

// function drawerWidth() {
//   const screenWidth = $(document).width();
//   if (screenWidth)
// }
