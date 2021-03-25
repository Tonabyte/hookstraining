import React, { useRef } from 'react'

const RefInput = () => {
  const inputRef = useRef();

  const handleInput = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Ref Hook</h1>
      <input className="form-control" placeholder="Enter your name" ref={inputRef} />
      <button onClick={handleInput} className="btn btn-primary">Press me to focus</button>
    </div>
  )
};

export default RefInput;
