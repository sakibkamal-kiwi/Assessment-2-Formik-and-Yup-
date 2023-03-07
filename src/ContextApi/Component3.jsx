import React,  {useContext} from 'react'
import {data} from './Component1'

const Component3 = () => {
const { newphoto } = useContext(data);
console.log(newphoto, 'apidata')
  return (

    <>
     <h1>  Data from Component 3 </h1>
    {newphoto.map((value , index) => {
        return (
          <>
         <div key = {index}>
            <h6 >{value.id}</h6>
            <p>{value.title}</p>
            <img src={value.url} alt = "api image" />
            </div>
          </>
        );
      }).slice(0 , 10)}
</>
  )
}

export default Component3