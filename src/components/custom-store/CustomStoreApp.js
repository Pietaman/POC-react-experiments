import React, { useState } from 'react';

import ReducerThemeComponent from './CustomStoreThemeComponent';
import ReducerTodoListComponent from './CustomStoreTodoListComponent';
import ReducerUserListComponent from './CustomStoreUserListComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import pocStore from './customStore';

import '../../App.style.css';

const CLASS = {
  appWrapper: 'app-wrapper',
  appWrapperReducer: 'app-wrapper--reducer',
  globalTheme: 'app-wrapper--dark'
};

const registerActions = () => {
  pocStore.registerAction({
    type: 'UPDATE_THEME',
    callback: () => {}
  });

  pocStore.registerAction({
    type: 'UPDATE_TODOS',
    callback: () => {}
  });

  pocStore.registerAction({
    type: 'UPDATE_USERS',
    callback: () => {}
  });
};

function CustomStoreApp({ data }) {
  pocStore.setStore(data);

  const [globalTheme, setGlobalTheme] = useState(data.theme);
  const [todoList, setTodoList] = useState(data.list);
  const [userList, setUserList] = useState(data.users);

  registerActions();

  pocStore.listen('UPDATE_TODOS', (event) => {
    setTodoList(event.detail.list);
  });

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
      <h1>POC using custom store()</h1>
      <p>Some info here...</p>
      <ReducerThemeComponent />
      <ReducerTodoListComponent />
      <ReducerUserListComponent />
      <PaintCounterComponent />
    </div>
  );
}

export default CustomStoreApp;
