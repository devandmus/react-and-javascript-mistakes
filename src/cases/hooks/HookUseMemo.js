import React, { useState, useMemo } from 'react';

const HookUseMemo = () => {
  const nChilds = 20;
  const [counter, setCounter] = useState(0);
  const [forceBackground, setForceBackground] = useState({ dummy: 'object' });

  const Childs = useMemo(() => {
    const handleBackground = () => {
      const getColor = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const backgroundColor = () => `rgb(${getColor(0, 255)}, ${getColor(0, 255)}, ${getColor(0, 255)})`;
      return Array.from(Array(nChilds).keys()).map(() => backgroundColor());
    }
    const backgrounds = handleBackground();
    return Array
      .from(Array(nChilds).keys())
      .map(i => <div key={i} style={{ background: backgrounds[i] }}>Child!</div>)
  }, [forceBackground]);

  return (
    <div>
      <h4>Hook useMemo</h4>
      <button onClick={() => setCounter(counter + 1)}>
        Counter! {counter}
      </button>
      <button onClick={() => setForceBackground({ ...forceBackground })}>
        Force Background Change
      </button>
      <div>
        {
          typeof Childs === 'object' ? Childs : <Childs />
        }
      </div>
    </div>
  );
};

export default HookUseMemo;
