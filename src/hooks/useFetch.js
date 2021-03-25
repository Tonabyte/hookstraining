import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, []);

  useEffect( () => {

    setState({ data: null, error: null, loading: true });

    fetch(url)
      .then(res => res.json())
      .then(data => {

        setTimeout(() => {

          if( isMounted.current) {
            setState({ data, error: null, loading: false }); 
          }
        }, 4000);
      });

  }, [url])

  return [ state ];
}

export default useFetch;
