export default function(state= null, action) {
  switch(action.type) {
    case "SET_TOTAL_PRO":
      return action.totalPro;
    default:
      return state;
    }
}
