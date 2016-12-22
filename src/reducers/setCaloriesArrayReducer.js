export default function(state = [1,2,3,4,5], action) {
  switch(action.type) {
    case "SET_CALORIES_ARRAY":
      return action.caloriesArr
  }
  return state;
}
