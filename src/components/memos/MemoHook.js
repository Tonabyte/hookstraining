import React, { useState, useMemo } from 'react'

// Hooks
import useCounter from '../../hooks/useCounter';

// Helpers
import heavyProcess from '../../helpers/heavyProcess';

const MemoHook = () => {
  const [counter, add] = useCounter(5000);
  const [show, setShow] = useState(true);

  const memorizeHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
  
  return (
    <div>
      <h1>Memorize Hook</h1>
      <h3>{counter}</h3>
      <p> {memorizeHeavyProcess}</p>
      <button onClick={() =>add()}>Press me to add <small>{counter}</small></button>
      <button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
    </div>
  )
}

export default MemoHook;
