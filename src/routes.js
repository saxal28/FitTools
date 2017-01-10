import React from "react";
import { Route, IndexRoute } from 'react-router';
import App from "./components/App";

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/About";
import MealPageContainer from "./components/mealComponents/MealPageContainer";
import MealStatsContainer from "./components/mealStats/MealStatsContainer";
import ToolsPage from "./components/tools/ToolsPage";
import HealthStatusContainer from "./components/healthStatus/HealthStatusContainer"
import TestPage from "./components/tools/TestPage";
import TdeeCalculator from "./components/calculators/TdeeCalculator";
import RunHelper from "./components/runHelper/RunHelper";
import MacroPlannerContainer from "./components/macroPlanner/MacroPlannerContainer";
import WeightTracker from "./components/weightTracker/WeightTrackerContainer";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="tools" component={ToolsPage} />
    <Route path="tools/health-status" component={HealthStatusContainer} />
    <Route path="tools/meal-planner" component={MealPageContainer} />
    <Route path="tools/meal-stats" component={MealStatsContainer} />
    <Route path="tools/macro-planner" component={MacroPlannerContainer} />
    <Route path="tools/tdee-calculator" component={TdeeCalculator} />
    <Route path="tools/weight-tracker" component={WeightTracker} />
    <Route path="tools/run-helper" component={RunHelper} />
    <Route path="tools/test-page" component={TestPage} />
  </Route>
)
