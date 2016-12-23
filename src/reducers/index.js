import { combineReducers }  from 'redux';

import  calories  from "./TestReducer";

import TDEE from "./setMacros/setCaloriesReducer";
import WEIGHT from "./setMacros/setWeightReducer";
import AGE from "./setMacros/setAgeReducer";

import caloriesArr from "./setMacrosMealArray/setCaloriesArrayReducer";
import carbArr from "./setMacrosMealArray/setCarbArrayReducer";
import fatArr from "./setMacrosMealArray/setFatArrayReducer";
import proArr from "./setMacrosMealArray/setProArrayReducer";

const rootReducer = combineReducers({
  calories,
  TDEE,
  WEIGHT,
  AGE,
  caloriesArr,
  carbArr,
  fatArr,
  proArr
});

export default rootReducer;
