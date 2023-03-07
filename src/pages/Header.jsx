import React from 'react'
import {  Navbar, Nav ,Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
const GotoHome = () =>{
  alert('please login first')
    navigate('/login')
}    
const GotoMain = ()=>{
        navigate('/register')
    }
   

const Translater = ()=>{
        navigate('/translate')
    }

    
  return (
    <div>
         <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand> Assessment 2 </Navbar.Brand>
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
                <Button variant="primary" onClick={GotoHome}>
             Home Page 
              </Button>
              <Button variant="primary" onClick={GotoMain}>
                Register
              </Button>
             
              <Button variant="primary" onClick={Translater}>
               Translater
              </Button>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header