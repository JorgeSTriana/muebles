import React, { Fragment, useState } from "react";
import './appHeader.css'
import Modal from 'react-modal'
import Register from "../auth/register/Register";
import Login from "../auth/login/Login";
import authHelper from '../../helpers/auth.helper'
import axios from "axios";
/* import Employees from '../../pages/Employees'
import Furniture from '../../pages/Furniture'
import Materials from '../../pages/Materials'
import Order from '../../pages/Order'
import Payroll from '../../pages/Payroll' */

/* import {useNavigate, Navigate} from 'react-router-dom'

let navigate = useNavigate() */
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import {Nav, Navbar, NavDropdown, Container,Image, Col } from 'react-bootstrap'; 

const signOut = async () => {
  authHelper.deleteToken()
  /* let form = new URLSearchParams()
  form.append('email', email.current.value)
  form.append('password', pass.current.value)
  console.log(process.env.REACT_APP_API_URL)
  const data = await axios.post(process.env.REACT_APP_API_URL+'auth/login',form,{
      header:{'Accept': 'application/json'}
  } ) */
  /* console.log(data.data.user) */
  /* await authHelper.setToken(data.data.token.token) */
  /* await authHelper.setToken(data.data.token)  */
  /* let userData = data.data.token.user */
  /* let userData = data.data.user
  let user = new User(userData._id, userData.name, userData.email) */
  /* console.log(data)
  console.log(userData);
  console.log(data.data)
  console.log(user) */
  /* navigate('/Login') */
}


const UserLogged= async () => {
  /* const data = await axios.post(process.env.REACT_APP_API_URL+'auth/login',form,{
    header:{'Accept': 'application/json'}
} ) */
const data = await axios.get(process.env.REACT_APP_API_URL+'auth/login',{
  header:{'Accept': 'application/json'}
} )
  await authHelper.getToken(data.data)
  return console.log(data.data.user)

}

export function AppHeader(){
  const [modalOpenRegister, setModalOpenRegister] = useState(false) 
  const [modalOpenLogin, setModalOpenLogin] = useState(false)
  UserLogged()
    return (  
      <Fragment>
        <Navbar bg="light" expand="lg">
            <Container className="containernav">
              {/* <Col xs={6} md={4}> */}
                  {/* <Image src="/logo3.jpeg" rounded width="100" height="100" /> */}
                  <Image src="/logo4.png" rounded  height="100" padding="0"/>
              {/* </Col> */}
              {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
              <Nav className="justify-content-center" activeKey="/home">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link id='links' className="links" href="/">Home</Nav.Link>
                  <Nav.Link className="links" href="/furniture">furniture</Nav.Link>
                  <Nav.Link className="links" href="/employees">employees</Nav.Link>
                  <Nav.Link className="links" href="/payroll">payroll</Nav.Link>
                  <Nav.Link className="links" href="/materials">materials</Nav.Link>
                  <Nav.Link className="links" href="/orders">orders</Nav.Link>
                  <Nav.Link className="links" href="" onClick={()=>{setModalOpenRegister(true)}}>Register</Nav.Link>
                  <NavDropdown className="links" title="User" id="basic-nav-dropdown">
                    {/* <NavDropdown.Item  href="" onClick={()=>{setModalOpenLogin(true)}}  >Login</NavDropdown.Item> */}
                    <NavDropdown.Item href="/Profile" >Profile</NavDropdown.Item>
                    <NavDropdown.Item  href="" >Configuración</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Login" onClick={signOut}>LogOut</NavDropdown.Item>
                  </NavDropdown>
                  {/* <Col xs={6} md={4}> */}
                    {/* <Image className="img-profile" src="/img-log.png" width="50" height="50" /> */}
                  {/* </Col> */}
                </Nav>
              </Navbar.Collapse>
              <Image className="img-profile2" src="/img-log.png" width="80" height="80" />
              <p></p>
              </Nav>
            </Container>
        </Navbar>
        {/* <button onClick={()=>{setModalOpenRegister(true)}}>Open Modal</button>*/}
        
      <Modal isOpen={modalOpenRegister} onRequestClose={()=>setModalOpenRegister(false)}> 
        {/* <h2>Titulo</h2>
        <p>Cuerpo</p> */}
         <div><Register/></div>
        <button onClick={()=>{setModalOpenRegister(false)}}>Close</button>
      </Modal> 
      <Modal isOpen={modalOpenLogin} onRequestClose={()=>setModalOpenLogin(false)}> 
        {/* <h2>Titulo</h2>
        <p>Cuerpo</p> */}
         <div><Login/></div>
        <button onClick={()=>{setModalOpenLogin(false)}}>Close</button>
      </Modal>
      </Fragment>
    );
}

export default AppHeader;