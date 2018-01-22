import { List, Map } from 'immutable';

const init = List([]);

export default function (goals=init, action) {
  switch(action.type) {
    case 'ADD_GOAL':
      return goals.push(Map(action.payload));
    case 'TOGGLE_GOAL':
      return goals.map(goalItem => {
        if (goalItem.get('id') === action.payload) {
          return goalItem.update('isDone', isDone => !isDone);
        } else {
          return goalItem;
        }
      });
      default:
      return goals;
  }
}

