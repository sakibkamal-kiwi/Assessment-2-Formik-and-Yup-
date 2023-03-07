import React, {createContext} from 'react'
import Child1 from './Child1';
import Child2 from './child2'

export const data = createContext(); 

const Parent = () => {

    const Mentor = [
        { id: 1, name: "Ishan Mohan"  },
    ]
    const batch7 = [
        { id: 1, name: "sakib", age: 22 },
        { id: 3, name: "chaman", age: 22 },
    ];
    
    const batch8 = [
        { id: 2, name: "shakshi", age: 20 },
        { id: 4, name: "surya", age: 21 },
    ];
    
  return (
    <div>
    <data.Provider value = {{batch7 , batch8, Mentor}}> 
    <h1> Importing from Parent </h1>
    <Child1/>
    <Child2/>
     </data.Provider>

    </div>
  )
}

export default Parent;

