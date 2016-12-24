export default function(state= null, action) {
  switch(action.type) {
    case "SET_TOTAL_CARB":
      return action.totalCarb;
    default:
      return state;
    }
}
