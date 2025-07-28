import React, { useState } from 'react'

const Counter = () => {
const [a, b] = useState(0);  
  return (
    <>
    <div className='box'>
      <h1>{a}</h1>
    </div>
    <div>
        <button className='button2' onClick={()=>b(a+1)} >Increment</button>
      <button className='button1' onClick={()=>b(a-1)}>Dcrement</button>
    </div>
    </>
  )
}

export default Counter;
