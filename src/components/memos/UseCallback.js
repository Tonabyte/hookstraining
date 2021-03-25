import React, { useCallback, useState, useEffect } from 'react';

// Components
import IncrementButton from './IncrementButton';

const UseCallback = () => {
  const [counter, setCounter] = useState(10);

  // const add = () => setCounter(counter + 1);

  const memorizeCallback = useCallback((numFromChild) => {setCounter(c => c + numFromChild)}, [setCounter]);

  // Para que no se dispare la función cada que se renderiza
  useEffect(() => {
  }, [memorizeCallback])

  return (
    <div>
    <h1>Use Callback {counter}</h1>
    <p>Use callback allows to memorize a callback, it only executes again if there dependencies change.</p>

      <IncrementButton add={memorizeCallback} />
    </div>
  )
}

export default UseCallback;
