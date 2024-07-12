import React from 'react'
import './Input.css'
function Input({increment}) {
    let value="";
  return (
    <>
    <div className="inputContainer">
        <h1 className='heading'>
        TIRED OF BORING LOREM IPSUM?
        </h1>
        <div className="input">
            <p>Paragraphs:</p>
            <input type="number" placeholder='Enter number ' onChange={(e)=>value=parseInt(e.target.value)}/>
            <button onClick={()=>increment(value)}>GENERATE</button>
        </div>
    </div>
    </>
  )
}

export default Input