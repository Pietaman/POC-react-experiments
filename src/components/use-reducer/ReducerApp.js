import React, { useReducer } from 'react';

import ReducerThemeComponent from './ReducerThemeComponent';
import ReducerTodoListComponent from './ReducerTodoListComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';
import ReducerUserListComponent from './ReducerUserListComponent';

const CLASS = {
  appWrapper: 'app-wrapper',
  appWrapperReducer: 'app-wrapper--reducer',
  globalTheme: 'app-wrapper--dark'
};

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

function ReducerApp({ data }) {
  const [state, dispatch] = useReducer(reducer, data);

  const { theme: globalTheme } = state;

  const getClassName = (classArray) => {
    return classArray.filter(Boolean).join(' ');
  };

  console.log('REDUCER - APP');

  return (
    <div
      className={getClassName([
        CLASS.appWrapper,
        CLASS.appWrapperReducer,
        globalTheme
      ])}
    >
      <h1>POC using useReducer()</h1>
      <p>
        UseReducer is used when one element of your state relies on the value of
        another element of your state in order to update.
      </p>
      <ReducerThemeComponent globalTheme={globalTheme} dispatch={dispatch} />
      <ReducerTodoListComponent state={state} dispatch={dispatch} />
      <ReducerUserListComponent state={state} dispatch={dispatch} />
      <PaintCounterComponent />
    </div>
  );
}

export default ReducerApp;
