import React, { useEffect, useLayoutEffect, useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  console.log('"Constructor"');

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return () => {
      console.log('Unmount useLayoutEffect');
    }
  }, [count]);

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('Unmount useEffect');
    }
  }, [count]);

  return (
    <div>
      {console.log('"Render"')}
      <h4>I'm a Funcional Component</h4>
      <button onClick={() => setCount(count + 1)}>
        Update me! Count: {count}
      </button>
    </div>
  );
};

export default FunctionalComponent;
