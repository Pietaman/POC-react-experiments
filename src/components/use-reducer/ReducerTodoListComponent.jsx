import React, { memo } from 'react';

import ReducerTodoListItemComponent from './ReducerTodoListItemComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';

const CLASS = {
  todoList: 'todo-list',
  todoWrapper: 'todo-wrapper'
};

const renderListItems = (todoList, dispatchTodoStatus) => {
  return todoList.map((todo) => {
    return (
      <ReducerTodoListItemComponent
        key={todo.id}
        dispatchTodoStatus={dispatchTodoStatus}
        todo={todo}
      />
    );
  });
};

const ReducerTodoListComponent = ({ state, dispatch }) => {
  const { list: todoList } = state;

  const dispatchTodoStatus = (id, checked) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id, checked } });
  };

  console.log('REDUCER - TODO LIST');

  return (
    <div className={CLASS.todoWrapper}>
      <h2>To do</h2>
      <ul className={CLASS.todoList}>
        {renderListItems(todoList, dispatchTodoStatus)}
      </ul>
      <PaintCounterComponent />
    </div>
  );
};

export default memo(ReducerTodoListComponent);
