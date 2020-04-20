import React from 'react';

import EffectApp from './components/use-effect/EffectApp';
import ReducerApp from './components/use-reducer/ReducerApp';

import './App.style.css';
import ContextApp from './components/use-context/ContextApp';

const data = {
  list: [
    { id: 1, title: 'Investigate performance', done: false, userId: 1 },
    { id: 2, title: 'Implement React.memo', done: false, userId: 3 },
    { id: 3, title: 'Take a break', done: true, userId: 2 },
    { id: 4, title: 'Finish investigation', done: false, userId: 3 }
  ],
  users: [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Jef' },
    { id: 3, name: 'Jos' }
  ],
  theme: null
};

const CLASS = {
  appContainer: 'app-container'
};

function App() {
  console.log('APP');

  return (
    <div className={CLASS.appContainer}>
      <EffectApp data={data} />
      <ReducerApp data={data} />
      <ContextApp data={data} />
    </div>
  );
}

export default App;
