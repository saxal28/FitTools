export default function(state = [50,50,50,50,50,50], action) {
  switch(action.type) {
    case "SET_PRO_ARRAY":
      return action.proArr
    default:
        return state
  }
}
