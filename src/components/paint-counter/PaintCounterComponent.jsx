import React from 'react';

import './PaintCounterComponent.style.css';

const PaintCounterComponent = () => {
  const updates = React.useRef(0);

  const updateCounter = () => {
    return updates.current++;
  };

  return (
    <div className="paint">
      <p className="paint__result">Paints: {updateCounter()}</p>
    </div>
  );
};

export default PaintCounterComponent;
