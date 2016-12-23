export default function(state = [50,50,50,50,50,50], action) {
  switch(action.type) {
    case "SET_CARB_ARRAY":
      return action.carbArr
    default:
        return state
  }
}
