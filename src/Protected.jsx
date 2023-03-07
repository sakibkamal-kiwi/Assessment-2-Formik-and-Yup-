import React, { useEffect } from 'react'
import { useNavigate , Outlet} from 'react-router-dom';

const Protected = () => {
 const navigate = useNavigate();

   useEffect(() =>{
    let login  = localStorage.getItem('data')
    if(!login){
      navigate('/login');
    }
   });
  return (

    <div>
      <Outlet/>  
      {/* <Component />  */}
    </div>
  )
}

export default Protected