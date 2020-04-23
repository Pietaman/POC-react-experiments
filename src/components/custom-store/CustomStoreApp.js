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

function CustomStoreApp({ data }) {

  if (!Object.keys(pocStore.getStore()).length) {
    pocStore.setStore(data);
  }

  const [globalTheme, setGlobalTheme] = useState(data.theme);

  pocStore.register({
    type: 'UPDATE_THEME',
    callback: (store) => {
      setGlobalTheme(store.theme);
    }
  });

  pocStore.register({
    type: 'UPDATE_TODOS',
    callback: () => { }
  });

  pocStore.register({
    type: 'UPDATE_USERS',
    callback: () => { }
  });

  const getClassName = (classArray) => {
    return classArray.filter(Boolean).join(' ');
  };

  console.log('CUSTOM STORE - APP');

  return (
    <div
      className={getClassName([
        CLASS.appWrapper,
        CLASS.appWrapperReducer,
        globalTheme
      ])}
    >
      <h1>POC using custom store()</h1>
      <p>
        Custom store is a simple state management API for JS applications, based on <a href="https://github.com/zooduck/zoohq" target="_blank">https://github.com/zooduck/zoohq</a>
        <br />It is 100% framework agnostic and almost invisible at under 50 lines of code not minified. It has the following methods:
        <ul>
          <li>setStore() - for setting the initial store</li>
          <li>register(actionName, actionCallback) - for registering actions (actionCallback gets the updated store as an arg)</li>
          <li>dispatch(actionName, data, useCallback=true) - for updating the store and triggering the actionCallback</li>
          <li>listen(actionName, callback) - no different to window.addEventListener(eventName, callback)</li>
          <li>getStore() - for getting the current store</li>
        </ul>
        NOTE: The dispatch method updates the store and calls the register callback. It also fires a custom event of the action name
        with an event.detail of the updated store. If the optional third parameter (useCallback) is set to false, it will only update the store.
      </p>
      <ReducerThemeComponent />
      <ReducerTodoListComponent />
      <ReducerUserListComponent />
      <PaintCounterComponent />
    </div>
  );
}

export default CustomStoreApp;
