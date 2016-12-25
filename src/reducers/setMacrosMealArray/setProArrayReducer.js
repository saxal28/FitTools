export default function(state = [0,0,0,0,0,0], action) {
  switch(action.type) {
    case "SET_PRO_ARRAY":
      return action.proArr
    default:
        return state
  }
}
