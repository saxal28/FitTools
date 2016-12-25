export default function(state = [0,0,0,0,0,0], action) {
  switch(action.type) {
    case "SET_CALORIES_ARRAY":
      return action.caloriesArr
    default:
      return state
  }

}
