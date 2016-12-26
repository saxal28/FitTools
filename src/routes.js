import React from "react";
import { Route, IndexRoute } from 'react-router';
import App from "./components/App";

import HomePage from "./components/home/HomePage";
import MealPageContainer from "./components/mealComponents/MealPageContainer";
import MealStatsContainer from "./components/mealStats/MealStatsContainer";
import ToolsPage from "./components/tools/ToolsPage";
import TestPage from "./components/tools/TestPage";
import TdeeCalculator from "./components/calculators/TdeeCalculator";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="tools" component={ToolsPage} />
    <Route path="tools/meal-planner" component={MealPageContainer} />
    <Route path="tools/meal-stats" component={MealStatsContainer} />
    <Route path="tools/tdee-calculator" component={TdeeCalculator} />
    <Route path="tools/test-page" component={TestPage} />
  </Route>
)
