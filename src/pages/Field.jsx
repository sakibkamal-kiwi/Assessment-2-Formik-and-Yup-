import React from 'react'
import { useField } from 'formik'

const Field = ({ label , ...props }) => {
  const [field , meta] = useField(props);
  
  return (
    <div>
      <label htmlFor={field.name}> {label}</label>
      <input 
        {...field}
        {...props}
       autoComplete= 'off'
      /> 
       {meta.touched && meta.error ? (<p> {meta.error}</p> ): "" }
    </div>
  )
}

export default Field