import React, { useState } from 'react';
import Child from './Child';

const Wrapper = () => {
  const [age, setAge] = useState(40);

  return (
    <div>
      <h4>Wrapper propagation</h4>
      <div>
        <button onClick={() => setAge(age + 1)}>I'm a {age} years old!</button>
      </div>
      {Array.from(Array(10).keys()).map((i) => <Child key={i} />)}
    </div>
  );
};

export default Wrapper;
