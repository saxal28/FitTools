export default function(state = [5,5,5,5,5,5], action) {
  switch(action.type) {
    case "SET_FAT_ARRAY":
      return action.fatArr
    default:
      return state
  }
}
