import React, { Component } from 'react';
import DrawerNavbar from "./common/DrawerNavbar";

class App extends Component {
  render() {
    return (
      <div>
        <DrawerNavbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
