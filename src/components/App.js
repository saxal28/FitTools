import React, { Component } from 'react';

// import MealPageContainer from "./mealComponents/MealPageContainer"

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
