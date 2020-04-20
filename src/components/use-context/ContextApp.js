import React, { createContext, useReducer } from 'react';

import ContextThemeComponent from './ContextThemeComponent';
import ContextTodoListComponent from './ContextTodoListComponent';
import ContextUserListComponent from './ContextUserListComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';

const CLASS = {
  appWrapper: 'app-wrapper',
  appWrapperContext: 'app-wrapper--context',
  globalTheme: 'app-wrapper--dark'
};

const stateContext = createContext();

const reducer = (state, action) => {
  const { list, users, theme } = state;
  switch (action.type) {
    case 'TOGGLE_TODO': {
      const { id, checked } = action.payload;
      const newList = list.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        todo.done = checked;
        return todo;
      });
      return { ...state, list: newList };
    }
    case 'DELETE_USER': {
      const { id } = action.payload;
      const newUsers = users.filter((user) => user.id !== id);
      const newList = list.filter((todo) => todo.userId !== id);
      return { ...state, list: newList, users: newUsers };
    }
    case 'TOGGLE_BACKGROUND': {
      const newTheme = theme ? null : CLASS.globalTheme;
      return { ...state, theme: newTheme };
    }
    default:
      throw new Error(`Action is ${action.type} is not defined`);
  }
};

function ContextApp({ data }) {
  const [state, dispatch] = useReducer(reducer, data);

  const { theme: globalTheme } = state;

  const getClassName = (classArray) => {
    return classArray.filter(Boolean).join(' ');
  };

  console.log('CONTEXT - APP');

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <div
        className={getClassName([
          CLASS.appWrapper,
          CLASS.appWrapperContext,
          globalTheme
        ])}
      >
        <h1>POC using useContext()</h1>
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </p>
        <ContextThemeComponent />
        <ContextTodoListComponent />
        <ContextUserListComponent />
        <PaintCounterComponent />
      </div>
    </stateContext.Provider>
  );
}

export { ContextApp as default, stateContext };
