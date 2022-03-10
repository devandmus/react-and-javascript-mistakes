import React, { useState, useCallback } from 'react';

const HookUseCallback = () => {
  const [update, setUpdate] = useState({ stupid: 'reload' });

  const handleClick = useCallback((() => {
    const closure = (new Date).getTime();
    return () => {
      console.log(closure);
    }
  })(), []);

  const handleUpdate = () => setUpdate({ ...update })

  console.log('RELOAD')
  return (
    <div>
      <h4>Hook useCallback</h4>
      <button onClick={handleUpdate}>Force Reload!</button>
      <button onClick={handleClick}>Handle Click!</button>
    </div>
  );
};

export default HookUseCallback;
