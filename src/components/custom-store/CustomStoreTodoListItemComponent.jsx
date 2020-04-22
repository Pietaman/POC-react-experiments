import React from 'react';

import '../../App.style.css';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

const CLASS = {
  todoListItem: 'todo-list__item',
  todoListItemDone: 'todo-list__item--done'
};

const getClassName = (classArray) => {
  return classArray.filter(Boolean).join(' ');
};

const CustomStoreTodoListItemComponent = ({ todo, toggleTodo }) => {
  const className = getClassName([
    CLASS.todoListItem,
    todo.done ? CLASS.todoListItemDone : null
  ]);

  console.log('REDUCER - LIST ITEM');

  return (
    <li className={className}>
      <input
        id={`{todo-${todo.id}`}
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.done}
      />
      <label htmlFor={`todo-${todo.id}`}>
        {todo.title} - {todo.userId}
      </label>
      <PaintCounterComponent />
    </li>
  );
};

export default CustomStoreTodoListItemComponent;
