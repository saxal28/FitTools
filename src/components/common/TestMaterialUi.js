import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const MyAwesomeReactComponent = () => (
  <MuiThemeProvider>

    <RaisedButton label="Default" />
  </MuiThemeProvider>
);

export default MyAwesomeReactComponent;
