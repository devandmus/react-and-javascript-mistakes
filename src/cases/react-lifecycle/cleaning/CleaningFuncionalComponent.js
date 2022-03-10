import React, { useEffect, useState } from 'react';

const NastyComponent = () => {
  const [red, setRed] = useState(false);

  useEffect(() => {
    const domEl = document.querySelector('main').style;
    const setBackground = bk => domEl.background = bk;
    if (red) {
      setBackground('red');
    }
    return () => setBackground('');
  }, [red]);

  return (
    <div>
      <button onClick={() => setRed(!red)}>
        {`Change to ${ !red ? 'red' : 'original' } color`}
      </button>
      <br/>
      <div>I'm an side effect component 😀</div>
    </div>
  )
};

const CleaningFuncionalComponent = () => {
  const [unmountNasty, setUnmountNasty] = useState(false);
  if (unmountNasty)
    return <div>Nasty component Unmounted 🤯</div>
  return (
    <div>
      <button onClick={() => setUnmountNasty(!unmountNasty)}>Unmount Nasty Component</button>
      <NastyComponent />
    </div>
  )
};

export default CleaningFuncionalComponent;
