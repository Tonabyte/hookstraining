import React from 'react'

// Hooks
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const MultipleCustomHook = () => {
  const [counter, add] = useCounter();
  const [state] = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { data, loading } = state;
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />
      {
        loading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        ) : (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }
      <button className="btn btn-primary" onClick={ () => add() }>Load Quote</button>
    </div>
  )
};

export default MultipleCustomHook;
