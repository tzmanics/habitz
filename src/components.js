import React from 'react';

export function Goal(props) {
  const { goal } = props;
  if(goal.get('isDone')) {
    return <strike>{ goal.get('text') }</strike>;
  } else {
    return <span>{ goal.get('text') }</span>;
  }
}

export function GoalList(props) {
  const { goals, addGoal, toggleGoal } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addGoal(text);
    }
  };
  
  const toggleClick = id => event => toggleGoal(id);

  return (
    <div className='goal'>
      <input type='text' placeholder='Add a goal' onKeyDown={ onSubmit } />
      <ul className='goal-list'>
        { goals.map(goalItem => (
          <li key={ goalItem.get('id') }
            className='goal-item'
            onClick={ toggleClick(goalItem.get('id'))}>
            <Goal goal={ goalItem } />
          </li>
        ))}
      </ul>
    </div>
  );
}

