import React, { useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Register() {

  
const navigate = useNavigate();

    const [user, setUser] = useState({
        userName : "",
        email : "",
        password : "",
        reEnterPassword: "",
        
    })
    const [record , setRecord] = useState([]);
    const [formErrors , setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const GotoHome = () => {
      navigate('/')
    }

const handleChange = (e)=>{
const name  = e.target.name;
const value = e.target.value;

setUser({
    ...user,
    [name] : value
})

}
const handleSubmit = (e) =>{
e.preventDefault(); 
const newRecord = { ...user,  id : new Date().getTime().toString() };
setRecord([ ...record , newRecord]);
console.log(record);
setFormErrors(validate(user));
setIsSubmit(true);
setUser({userName : "", email : "", password : "", reEnterPassword: "",});
}

useEffect( ()=>{
 
if( Object.keys(formErrors).length === 0 && isSubmit){
 localStorage.setItem("record", JSON.stringify(record));
 navigate('/registerdata');
}
}, [formErrors])


const validate = (values) =>{
const errors = {};

if(!values.userName){
  errors.userName = " ***username requiered *** ";
}else if(values.userName.length < 5){
  errors.userName = " user name is too sort **";
}
if(!values.email){
  errors.email = " ***email requiered ***";
}else if(!values.email.includes("@") ){
  errors.email = " it must include '@' symbol ";
}else if(!values.email.includes(".com")){
errors.email = "please provide correct email format";
}
if(!values.password){
  errors.password = " **password requiered **";
}else if(values.password.length < 4){
  errors.password = " ** password is too sort";
}
if(!values.reEnterPassword){
  errors.reEnterPassword = " *** reEnterPassword requiered **";
}else if(values.password !== values.reEnterPassword ){
  errors.reEnterPassword = "** password does not matched ";
}
return errors;

}

  return (
    <>
    <Header/>
    <div>
     {Object.keys(formErrors).length === 0 && isSubmit ? (alert('Registaration success')) : (<h3> Please register </h3>)}
    <Form className ="register-form-style" onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>userName</Form.Label>
        <Form.Control type="text" autoComplete='off' value={user.userName} name='userName' onChange={handleChange}/>
        <Form.Text className="text-muted"> 
        </Form.Text>
      </Form.Group>
      <p className='error-message'>{formErrors.userName}</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" autoComplete='off' value={user.email}  name='email'  onChange={handleChange}/>
        <Form.Text className="text-muted"> 
        </Form.Text>
      </Form.Group>
      <p className='error-message'>{formErrors.email}</p>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" autoComplete='off'  value={user.password}  name='password' onChange={handleChange}/>
      </Form.Group>
      <p className='error-message'>{formErrors.password}</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>reEnter Password</Form.Label>
        <Form.Control type="password" autoComplete='off' value={user.reEnterPassword}  name='reEnterPassword' onChange={handleChange}/>
      </Form.Group>
      <p className='error-message'>{formErrors.reEnterPassword}</p>
      <Button variant="primary" autoComplete='off' type="submit" > Submit </Button>
    </Form>
   <br/>
  <Button variant="primary" onClick={GotoHome}>  Go to Home    </Button>
    </div>
    </>
  )
}

export default Register