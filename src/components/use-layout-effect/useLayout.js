import React, { useLayoutEffect, useRef } from 'react'

// Hooks
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

// Styles
import './useLayout.css';

const useLayout = () => {
  const [counter, add] = useCounter();
  const [state] = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { data } = state;
  const { author, quote } = !!data && data[0];
  const paragraphRef = useRef();

  useLayoutEffect(() => {
    console.log(paragraphRef.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={paragraphRef}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <button className="btn btn-primary" onClick={ () => add() }>Load Quote</button>
    </div>
  )
};

export default useLayout;
