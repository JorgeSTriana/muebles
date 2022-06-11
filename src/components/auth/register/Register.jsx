import React, { Fragment, useRef } from "react";
import authHelper from '../../../helpers/auth.helper'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'

//import authHelper, { getToken } from '../../../helpers/auth.helper'
//import { Form } from "react-bootstrap";
function Register() {

  const navigate = useNavigate()
  const name = useRef();
  const email = useRef();
  const pass = useRef();


  const signup = async () => {
    let form = new URLSearchParams()
    form.append('name', name.current.value)
    form.append('email', email.current.value)
    form.append('password', pass.current.value)
    console.log(process.env.REACT_APP_API_URL)
    const data = await axios.post(process.env.REACT_APP_API_URL+'auth/register',form,{
        header:{'Accept': 'application/json'}
    } )
    console.log(name)
    await authHelper.setToken(data.data.token)
    /* await authHelper.setToken(data.data.token.token) */
    /* console.log(data.data)
    let userData = data.data.token.user
    let user = new User(userData._id, userData.name, userData.email) */
    console.log(data)
    console.log(data.data)
    console.log(data.data.token)
    /* console.log(data.data.token.token)
    console.log("user") */
    navigate('/')
}

    return ( 
      /* !authHelper.getToken() ? */
      <Fragment>
        <h1>Registro de ususarios</h1>
        <label htmlFor="name">Nombre</label>
        <input ref={name} type="text" id="name"/>
        <label htmlFor="email">E-mail</label>
        <input ref={email} type="email" id="email"/>
        <label htmlFor="pass">Contaseña</label>
        <input ref={pass} type="password" id="pass"/>
        <button onClick={signup}>Registrarme</button>
      </Fragment>/* :
      <Navigate to={'/'} /> */
    );
}

export default Register;