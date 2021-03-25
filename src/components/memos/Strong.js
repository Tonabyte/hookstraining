import React from 'react';

const Strong = ({ value }) => {
  console.log('Me volví a renderizar');
  return (
    <strong>
      {value}
    </strong>
  )
}

export default Strong;
