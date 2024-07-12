import React from 'react'
import './Output.css'
import data from '../data/data'
function Output({count}) {
    // console.log(data);
    let elements=[];
    for(let i=0;i<count;i++){
      elements.push(<p>{i+1}) {data[i]}</p>)
    }
  return (
    <>
    <div className="output">
      <h1>Output</h1>
      {elements}
    </div>

    </>
  )
}

export default Output