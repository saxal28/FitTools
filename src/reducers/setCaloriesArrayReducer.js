export default function(state = [], action) {
  switch(action.type) {
    case "SET_CALORIES_ARRAY":
      return action.caloriesArr
  }
  return state;
}
