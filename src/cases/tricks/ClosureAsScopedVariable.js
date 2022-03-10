import React from 'react';

const ClosureAsScopedVariable = () => {
  const comisionRate = (percent) => {
    const rate = percent || 0;
    return (over) => (over / 100) * rate;
  }

  const rate10 = comisionRate(10);
  const rate30 = comisionRate(30);
  const rate50 = comisionRate(50);

  return (
    <div>
      <h4>Closure as Variable Protector</h4>
      <div>10% over 1000: {rate10(1000)}</div>
      <div>30% over 1000: {rate30(1000)}</div>
      <div>50% over 1000: {rate50(1000)}</div>
    </div>
  );
};

export default ClosureAsScopedVariable;
