import React, { memo, useContext } from 'react';

import ContextTodoListItemComponent from './ContextTodoListItemComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import { stateContext } from './ContextApp';

import '../../App.style.css';

const CLASS = {
  todoList: 'todo-list',
  todoWrapper: 'todo-wrapper'
};

const renderListItems = (todoList, dispatchTodoStatus) => {
  return todoList.map((todo) => {
    return (
      <ContextTodoListItemComponent
        key={todo.id}
        dispatchTodoStatus={dispatchTodoStatus}
        todo={todo}
      />
    );
  });
};

const ContextTodoListComponent = () => {
  const { state, dispatch } = useContext(stateContext);
  const { list: todoList } = state;

  const dispatchTodoStatus = (id, checked) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id, checked } });
  };

  console.log('CONTEXT - TODO LIST');

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

export default memo(ContextTodoListComponent);
