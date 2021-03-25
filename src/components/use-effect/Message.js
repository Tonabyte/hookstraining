import React, { useEffect, useState } from 'react'

const Message = () => {
  const [ coords, setCoords ] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = coords;

  useEffect(() => {

    const setCoordinates = e => setCoords({ x: e.screenX, y: e.screenY });
    window.addEventListener('mousemove', setCoordinates);
    console.log('Message Component Mounted');
    return () => {
      window.removeEventListener('mousemove', setCoordinates);
      console.log('Message Component Unmounted');
    };
  }, []);

  return (
    <>
      <h3>Conditional Message</h3>
      <p>{`X coordinate: ${x}`}</p>
      <p>{`Y coordinate: ${y}`}</p>
    </>
  )
};

export default Message;
