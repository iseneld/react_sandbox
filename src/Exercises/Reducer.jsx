
import { useReducer } from 'react';

export const Reducer = () => { 
  const [number, setNumber] = useReducer(
    (number, newValue) => number * newValue, 
    0
  );

  return ( 
    <main>
      <h1 onClick={() => setNumber(2)}>{number}</h1>
    </main> 
  );
}
