import React, { memo } from 'react'

const IncrementButton = memo(({ add }) => {

  console.log('me volví a generar');
  return (
    <button onClick={ () => add(5)} className="btn btn-primary">
      Press Me
    </button>
  )
})

export default IncrementButton;
