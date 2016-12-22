import { combineReducers }  from 'redux';
import  calories  from "./TestReducer";
import TDEE from "./setCaloriesReducer";

const rootReducer = combineReducers({
  calories,
  TDEE
});

export default rootReducer;
