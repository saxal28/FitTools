export default function(state = null, action) {
  switch(action.type) {
    case "SET_HEIGHT":
      return action.height
    default:
      return state
  }
}
