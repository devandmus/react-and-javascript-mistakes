import React, { useState } from 'react';

const Child = () => {
  const [age, setAge] = useState(10);
  console.log('Render Child');
  return (
    <button onClick={() => setAge(age + 1)}>
      I wanna growth! My age is {age}
    </button>
  );
};

export default Child;
