import React from 'react';

import EffectTodoListItemComponent from './EffectTodoListItemComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';

const CLASS = {
  todoList: 'todo-list',
  todoWrapper: 'todo-wrapper'
};

const renderListItems = (todoList, setTodoStatus) => {
  return todoList.map((todo) => {
    return (
      <EffectTodoListItemComponent
        key={todo.id}
        todo={todo}
        setTodoStatus={setTodoStatus}
      />
    );
  });
};

const EffectTodoListComponent = ({ todoList, setTodoList }) => {
  const setTodoStatus = (id, checked) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const newTodo = { ...todo };
      newTodo.done = checked;
      return newTodo;
    });
    setTodoList(newTodos);
  };

  console.log('EFFECT - TODO LIST');

  return (
    <div className={CLASS.todoWrapper}>
      <h2>To do</h2>
      <ul className={CLASS.todoList}>
        {renderListItems(todoList, setTodoStatus)}
      </ul>
      <PaintCounterComponent />
    </div>
  );
};

export default EffectTodoListComponent;
