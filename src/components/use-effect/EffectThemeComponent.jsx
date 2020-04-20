import React, { useState } from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import '../../App.style.css';

const CLASS = {
  btn: 'btn',
  initTheme: 'btn--primary',
  globalTheme: 'app-wrapper--dark',
  localTheme: 'btn--secondary',
  themeActions: 'theme-actions',
  themeWrapper: 'theme-wrapper'
};

const EffectThemeComponent = ({ globalTheme, setGlobalTheme }) => {
  const [theme, setTheme] = useState(CLASS.initTheme);

  const toggleGlobalBackground = () => {
    return setGlobalTheme(globalTheme ? null : CLASS.globalTheme);
  };

  return (
    <div className={CLASS.themeWrapper}>
      <h2>Theme</h2>
      <section className={CLASS.themeActions}>
        <button
          className={`${CLASS.btn} ${theme}`}
          onClick={toggleGlobalBackground}
        >
          Toggle global background
        </button>
        <button
          className={`${CLASS.btn} ${theme}`}
          onClick={() => setTheme(CLASS.localTheme)}
        >
          Change button colors
        </button>
        <button
          className={`${CLASS.btn} ${theme}`}
          onClick={() => setTheme(CLASS.initTheme)}
        >
          Reset button colors
        </button>
      </section>
      <PaintCounterComponent />
    </div>
  );
};

export default EffectThemeComponent;
