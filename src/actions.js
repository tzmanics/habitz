const uid = () => Math.random().toString(34).slice(2);

export function addGoal(text) {
  return {
    type: 'ADD_GOAL',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleGoal(id) {
  return {
    type: 'TOGGLE_GOAL',
    payload: id
  };
}

