export default function(state = [0,0,0,0,0,0], action) {
  switch(action.type) {
    case "SET_FAT_ARRAY":
      return action.fatArr
    default:
      return state
  }
}
