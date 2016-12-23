export default function(state = [500,500,500,500,500,500], action) {
  switch(action.type) {
    case "SET_CALORIES_ARRAY":
      return action.caloriesArr
  }
  return state;
}
