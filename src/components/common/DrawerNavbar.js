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
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  componentDidMount() {
    const width = $(document).width(); // returns width of HTML document
    if(width < 400) {
      alert("current width: " + width);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="text-center">
          <AppBar onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
          <Drawer
            docked={false}
            width={250}
            overlayStyle={{"background":"transparent"}}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            swipeAreaWidth={200}
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
