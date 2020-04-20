import React, { useState } from 'react';

import EffectThemeComponent from './EffectThemeComponent';
import EffectTodoListComponent from './EffectTodoListComponent';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';

const CLASS = {
  appWrapper: 'app-wrapper',
  appWrapperDark: 'app-wrapper--dark'
};

function EffectApp({ data }) {
  const [globalTheme, setGlobalTheme] = useState(data.theme);
  const [todoList, setTodoList] = useState(data.list);

  const getClassName = (classArray) => {
    return classArray.filter(Boolean).join(' ');
  };

  const handleGlobalTheme = (value) => {
    setGlobalTheme(value);
  };

  const handleTodoChange = (value) => {
    setTodoList(value);
  };

  console.log('EFFECT - APP');

  return (
    <div className={getClassName([CLASS.appWrapper, globalTheme])}>
      <h1>POC using useEffect()</h1>
      <p>
        useEffect is used when it's just an independent element of state you're
        managing
      </p>
      <EffectThemeComponent
        globalTheme={globalTheme}
        setGlobalTheme={handleGlobalTheme}
      />
      <EffectTodoListComponent
        todoList={todoList}
        setTodoList={handleTodoChange}
      />
      <PaintCounterComponent />
    </div>
  );
}

export default EffectApp;
