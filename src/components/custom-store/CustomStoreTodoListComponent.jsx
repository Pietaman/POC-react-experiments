import React, { memo, useState } from 'react';

import CustomStoreTodoListItemComponent from './CustomStoreTodoListItemComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';
import pocStore from './customStore';

const CLASS = {
  todoList: 'todo-list',
  todoWrapper: 'todo-wrapper'
};

const renderListItems = (todoList, toggleTodo) => {
  return todoList.map((todo) => {
    return (
      <CustomStoreTodoListItemComponent
        key={todo.id}
        toggleTodo={toggleTodo}
        todo={todo}
      />
    );
  });
};

const CustomStoreTodoListComponent = () => {
  const [stateList, setStateList] = useState(pocStore.getStore().list);

  pocStore.listen('UPDATE_TODOS', (event) => {
    const store = {
      ...pocStore.getStore()
    };
    setStateList(store.list);
  });

  const handleToggleTodo = (id) => {
    const todos = [...pocStore.getStore().list];

    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const newTodo = { ...todo };
      newTodo.done = !newTodo.done;
      return newTodo;
    });

    pocStore.dispatch('UPDATE_TODOS', { list: [...newTodos] });

    setStateList(newTodos);
  };

  return (
    <div className={CLASS.todoWrapper}>
      <h2>To do</h2>
      <ul className={CLASS.todoList}>
        {renderListItems(stateList, handleToggleTodo)}
      </ul>
      <PaintCounterComponent />
    </div>
  );
};

export default memo(CustomStoreTodoListComponent);
