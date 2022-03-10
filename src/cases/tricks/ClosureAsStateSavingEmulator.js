import React, { useCallback, useMemo, useState } from 'react';

const ClosureAsWrapper = () => {
  const [counter, setCounter] = useState(0);

  const StateEmulatorClosure = useCallback((() => {
    let count = 0;
    return e => {
      count++;
      e.target.innerHTML = `Emulator: ${count}`;
    }
  })(), []);

  console.log('Render only on Init & State Counter');

  return (
    <div>
      <h4>Closure</h4>
      <button onClick={() => setCounter(counter + 1)}>
        State Counter: {counter}
      </button>
      <button onClick={StateEmulatorClosure}>Emulator: 0</button>
    </div>
  );
};

export default ClosureAsWrapper;
