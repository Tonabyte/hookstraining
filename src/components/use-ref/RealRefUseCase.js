import React, { useState } from 'react'
import MultipleCustomHook from '../examples/MultipleCustomHook';

// Components


const RealRefUseCase = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Real Ref Hook Use Case</h1>
      <hr />
      {show && <MultipleCustomHook/>}
      <button className="btn btn-primary" onClick={() => {
        setShow(!show)
      }}>Press me</button>
    </div>
  )
}

export default RealRefUseCase;
