export default function(state = null, action) {
  switch(action.type) {
    case "SET_WEIGHT":
      return action.weight
  }
  return state;
}
