export default function(state = [0,0,0,0,0,0], action) {
  switch(action.type) {
    case "SET_CARB_ARRAY":
      return action.carbArr
    default:
        return state
  }
}
