import { combineReducers }  from 'redux';

import calories from "./TestReducer";

import TDEE from "./setMacros/setCaloriesReducer";
import WEIGHT from "./setMacros/setWeightReducer";
import AGE from "./setMacros/setAgeReducer";
import HEIGHT from "./setMacros/setHeightReducer";

import caloriesArr from "./setMacrosMealArray/setCaloriesArrayReducer";
import carbArr from "./setMacrosMealArray/setCarbArrayReducer";
import fatArr from "./setMacrosMealArray/setFatArrayReducer";
import proArr from "./setMacrosMealArray/setProArrayReducer";

import totalCal from "./setMacrosTotals/setTotalCalReducer";
import totalCarb  from "./setMacrosTotals/setTotalCarbReducer"
import totalFat from "./setMacrosTotals/setTotalFatReducer"
import totalPro  from "./setMacrosTotals/setTotalProReducer"

const rootReducer = combineReducers({
  calories,
  TDEE,
  WEIGHT,
  HEIGHT,
  AGE,

  caloriesArr,
  carbArr,
  fatArr,
  proArr,

  totalCal,
  totalCarb,
  totalFat,
  totalPro
});

export default rootReducer;
