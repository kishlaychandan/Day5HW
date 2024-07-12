import React, { useState } from 'react'
import './Home.css'
import Input from '../../Input/Input'
import Output from '../../Output/Output';
function Home() {
    const[count,setCount]=useState(0);
    function increment(value){
        setCount(value);
    }
  return (
    <>
    <div className="main">
    <Input increment={setCount}/>
    {/* {console.log(count)} */}
    <Output count={count}/>
    </div>
    </>
  )
}

export default Home