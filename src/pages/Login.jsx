import React, { useEffect, useState } from 'react';
import { Card, Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Field from './Field';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form } from 'formik';
import { SignUpSchema } from '../schemas'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import {usePasswordTogle} from '../hooks/usePasswordTogle'



function Login() {

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
// {isAuthenticated ? navigate('/user/home') : navigate('/login')}


  //const [InputType , iconType] = usePasswordTogle();

  const handleClose = () => {
    setShow(false)
  }
  const GotoContext = ()=>{
    navigate('/context');
}
const HigherOrder = ()=>{
  navigate('/higherorder');
}
const GoogleIn = ()=>{
  navigate('/googlelogin');
}
  const GotoMain = () => {
    navigate('/register')
  }
  const Translator = () => {
    navigate('/translate')
  }
  const handleShow = () => setShow(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  useEffect(() => {
    let login = localStorage.getItem('data')
    if (login) {
      navigate('/user/home');
    }
  });

  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Assessment 2</Navbar.Brand>
          <Button variant="primary" onClick={Translator}>
                Translator
              </Button>
              <Button variant="primary" onClick={GoogleIn}>
                Google Login
              </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Navbar.Brand
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "15rem",
              }}
            >
              <Button variant="primary" onClick={handleShow} > 
                <AccountBoxIcon /> Login
              </Button>
              
              <Button variant="primary" onClick={GotoMain}>
                Register
              </Button>
              <Button variant="primary" onClick={GotoContext}>
                ContextApi
              </Button>
              <Button variant="primary" onClick={HigherOrder}>
           HigherOrder
              </Button>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card>
        <Card.Img
          variant="top"
          src="https://wallpaperaccess.com/full/427852.jpg"
          style = {{height : '100%'}}
        />
      </Card>
      <Formik
        initialValues={{
          email: "",
          password: "",

        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, action) => {
          localStorage.setItem("data", JSON.stringify(values))
          navigate('/user/home');
          action.resetForm();
        }}
      >
        <Modal className="model-top-style" show={show} onHide={handleClose} >
          <div className='model-style'>
            <Modal.Header closeButton>
              <Modal.Title>
                <img className='login-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8L1qW1D11oTfSSbjnvooMObhKAc6vndzvw&usqp=CAU' />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <Form>
                <div className='model-input'>
                  <Field label="Enter Email :" name="email" type="email" />
                  <br /><br />
                  <Field label="Enter Password :" name="password" type={passwordShown ? "text" : "password"} />
                  <span className='eye-icon' onClick={togglePasswordVisiblity}>{passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />} </span>
                  <br /><br />
                  <Button variant="primary"  type='submit'  >  Login    </Button>
                </div>
              </Form>
            </Modal.Body>
          </div>
        </Modal>
      </Formik>
    </>
  );
}
export default Login
