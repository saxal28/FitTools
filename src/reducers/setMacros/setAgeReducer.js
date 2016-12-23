export default function(state = null, action) {
  switch(action.type) {
    case "SET_AGE":
      return action.age
  }
  return state;
}
