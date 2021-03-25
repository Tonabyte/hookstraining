import { useState } from 'react'

const useCounter = (initialState = 1) => {
  const [counter, setState] = useState(initialState);

  const add = ( factor = 1) => setState(counter + factor);

  const subtract = ( factor = 1) => setState(counter - factor);

  const reset  = () => setState(initialState);

  return [
    counter,
    add,
    subtract,
    reset,
  ];
};

export default useCounter;
