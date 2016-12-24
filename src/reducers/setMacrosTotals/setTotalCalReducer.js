export default function(state= null, action) {
  switch(action.type) {
    case "SET_TOTAL_CAL":
      return action.totalCal
    default:
      return state
    }
}
