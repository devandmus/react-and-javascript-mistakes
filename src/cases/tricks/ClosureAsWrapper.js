import React from 'react';

const ClosureAsWrapper = () => {
  const wrapperFn = (fn) => {
    return ({ ...kwargs } = {}) =>
      kwargs.type !== undefined ? fn(kwargs) : 'Invalid type'
  }

  const animal = wrapperFn(({ type }) => {
    return `The animal is "${type}"`;
  });

  const invalid = animal();
  const perro = animal({ type: 'perro' });

  return (
    <div>
      <h4>Closure</h4>
      <div>{invalid}</div>
      <div>{perro}</div>
    </div>
  );
};

export default ClosureAsWrapper;
