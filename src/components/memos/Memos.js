import React, { useState, memo } from 'react'

// Hooks
import useCounter from '../../hooks/useCounter';

// Components
import Strong from './Strong';

const Memos = memo(() => {
  const [counter, add] = useCounter(10);
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <h1>Memorize: <Strong value={counter}/></h1>
      <button onClick={() =>add()}>Press me to add</button>
      <button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
    </div>
  )
})

export default Memos;
