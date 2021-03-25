import React from 'react'

// Styles
import './useStateComponentStyles.css';

// Hooks
import useCounter from '../hooks/useCounter';

const CounterHookComponent = () => {
  const [state, add, subtract, reset ] = useCounter();

  return (
    <>
      <h1>Custom Hook Component {state}</h1>
      <div className="buttonContainer">
        <button className="btn btn-warning" onClick={() => add(5)}>Add</button>
        <button className="btn btn-warning" onClick={() => subtract(5)}>Subtract</button>
        <button className="btn btn-danger" onClick={reset} >Reset</button>
      </div>
    </>
  )
}

export default CounterHookComponent;
