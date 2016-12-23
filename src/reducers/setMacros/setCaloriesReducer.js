export default function(state = null, action) {
  switch(action.type) {
    case "SET_CALORIES":
      return action.calories
    default:
      return state
  }
}
