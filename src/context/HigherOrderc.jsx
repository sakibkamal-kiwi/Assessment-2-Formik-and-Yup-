import React, { useState } from 'react'

const HigherOrderc = () => {
  return (
    <>
    <div>HigherOrderc</div>
    <HOCred cmp = {Counter}/>
    <HOCgreen cmp = {Counter}/>
    <HOCyellow cmp = {Counter}/>

    </>
  )
}

const HOCred = (props) =>{
  return(
    <>
    <h3> hello its first</h3>
  <h1 style={{backgroundColor : 'red' , width : "200px", height : "150px "}}> <props.cmp /> </h1> 
  </> 
  )
}
const HOCgreen = (props) =>{
  return(


  <>
<p>  hjdsbfdaeswc</p>

 <h1 style={{backgroundColor : 'green' , width : "150px", height : "150px "}}> <props.cmp /> </h1> 
  </>
  )
}
const HOCyellow = (props) =>{
  return <h1 style={{backgroundColor : 'yellow' , width : "150px", height : "150px "}}> <props.cmp /> </h1> 
}

const Counter = () =>{
const [count, setCount]=useState(0);
const handleClick = () =>{
setCount(count+1);
}
return(
    <div>
       <h5> Counter </h5>
        <h1> {count} </h1>
        <button onClick ={handleClick}>  Increment </button>
    </div>
)
}

export default HigherOrderc