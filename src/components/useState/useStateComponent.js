import React, { useState } from 'react'

// Styles
import './useStateComponentStyles.css';

const useStateComponent = () => {
  const [ state, setState ] = useState({
    counter: 0,
    isModalOpen: false,
  });

  const { counter, isModalOpen } = state;

  const onPress = () => setState({ ...state, counter: counter + 1 });
  return (
    <div>
      <h1>Counter {counter}</h1>
      <hr/>
      <button onClick={() => onPress()} className="btn btn-warning">Press me</button>
    </div>
  )
}

export default useStateComponent;
