import React from 'react';

const AsyncAwaitType = () => {
  const AsyncFn = async () => {
    return true;
  }

  console.log(typeof AsyncFn);
  console.log(AsyncFn() instanceof Promise);

  return (
    <div>
      <h4>Async / Await Type</h4>
    </div>
  );
};

export default AsyncAwaitType;
