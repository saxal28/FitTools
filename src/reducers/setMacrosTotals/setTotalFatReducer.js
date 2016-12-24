export default function(state= null, action) {
  switch(action.type) {
    case "SET_TOTAL_FAT":
      return action.totalFat;
    default:
      return state;
    }
}
