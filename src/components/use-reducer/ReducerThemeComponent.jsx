import React, { memo, useState } from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';

const CLASS = {
  btn: 'btn',
  initTheme: 'btn--primary',
  localTheme: 'btn--secondary',
  themeActions: 'theme-actions',
  themeWrapper: 'theme-wrapper'
};

const ReducerThemeComponent = ({ dispatch }) => {
  const [theme, setTheme] = useState(CLASS.initTheme);

  console.log('REDUCER - THEME');

  return (
    <div className={CLASS.themeWrapper}>
      <h2>Theme</h2>
      <section className={CLASS.themeActions}>
        <button
          className={`${CLASS.btn} ${theme}`}
          onClick={() =>
            dispatch({
              type: 'TOGGLE_BACKGROUND'
            })
          }
        >
          Toggle global background
        </button>
        <button
          className={`${CLASS.btn} ${theme}`}
          onClick={() => setTheme(CLASS.localTheme)}
        >
          Change this theme
        </button>
        <button
          className={`${CLASS.btn} ${theme}`}
          onClick={() => setTheme(CLASS.initTheme)}
        >
          Reset theme
        </button>
      </section>
      <PaintCounterComponent />
    </div>
  );
};

export default memo(ReducerThemeComponent);
