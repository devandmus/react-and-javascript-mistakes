import React, { useEffect } from 'react';

const GetRick = () => fetch('https://rickandmortyapi.com/api/character/1');
const GetMorty = () => fetch('https://rickandmortyapi.com/api/character/2');
const GetSummer = () => fetch('https://rickandmortyapi.com/api/character/3');

const AsyncAwaitManagement = () => {
  const AsyncFn = async () => {
    const rick = await GetRick().then(async() => {
      console.log('Single Rick resolved');
    });

    const morty = await GetMorty().then(() => {
      console.log('Single Morty resolved');
    });

    await Promise.all([GetRick(), GetMorty()])
      .then(([r, m]) => {
        console.log('Rick & Morty from Promise resolved');
      });

    console.log('rick var: ', rick);
    console.log('morty var: ', morty);
    console.log('Bottom Async Await');
  }

  useEffect(() => {
    AsyncFn();
    console.log('Bottom useEffect');
  }, []);

  return (
    <div>
      <h4>Async/ Await Management</h4>
    </div>
  );
};

export default AsyncAwaitManagement;
