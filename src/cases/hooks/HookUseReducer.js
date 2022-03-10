import React, { useState, useEffect, useReducer } from 'react';

const GetRick = () => fetch('https://rickandmortyapi.com/api/character/1');
const GetMorty = () => fetch('https://rickandmortyapi.com/api/character/2');

const initialState = {
  error: false,
  rick: [],
  morty: [],
  loading: false,
}

const UsingStates = () => {
  const [error, setError] = useState(false);
  const [rick, setRick] = useState([]);
  const [morty, setMorty] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    setError(false);
    setRick([]);
    setMorty([]);
    Promise.all([GetRick(), GetMorty()])
      .then(values => Promise.all(values.map(v => v.json())))
      .then(([rick, morty]) => {
        setRick(rick);
        setMorty(morty);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setRick([]);
        setMorty([]);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  if (error)
    return <div>Error</div>;
  if (rick && morty)
    return <div>Render</div>
  if (loading)
    return <div>Loading</div>
  return <></>
}

const TypesReducer = {
  FETCHING: 'fetching',
  ERROR: 'error',
  SETTING_DATA: 'setting_data',
}

const reducer = (rawState, action) => {
  if (action.type === TypesReducer.FETCHING) {
    return {
      loading: true,
      error: false,
      rick: [],
      morty: [],
    }
  }
  if (action.type === TypesReducer.SETTING_DATA) {
    return {
      loading: false,
      error: false,
      rick: action.payload.rick,
      morty: action.payload.morty,
    }
  }
  if (action.type === TypesReducer.ERROR) {
    return {
      ...initialState,
      loading: false,
      error: true,
    }
  }
}

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = () => {
    dispatch({ type: TypesReducer.FETCHING });
    Promise.all([GetRick(), GetMorty()])
      .then(values => Promise.all(values.map(v => v.json())))
      .then(([rick, morty]) => {
        dispatch({ type: TypesReducer.SETTING_DATA, payload: { rick, morty }})
      })
      .catch(() => {
        dispatch({ type: TypesReducer.ERROR });
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(state);

  return (
    <div>
      <h4>Hook useReducer</h4>
    </div>
  );
};

export default HookUseReducer;
