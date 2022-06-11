import React, {Fragment, useState, useRef, useEffect} from "react"   //hoock useState
import ContactList from "./components/ContactList"
import AppHeader from "./components/body/AppHeader"
import { v4 as uuid } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/product/Product";
import RegisterProduct from "./components/product/RegisterProduct";
//import Register from "./components/auth/register/Register";
import authHelper from './helpers/auth.helper'
import { Navigate } from "react-router-dom";
import Modal from 'react-modal'
//import Login from './components/auth/login/Login'

export function App(){
  const [modalOpen, setModalOpen] = useState(false)
  //const contacts = [
  const [contacts, setContacts] = useState([    //useState modifica el estado del elemento, lista inmutable
    //{id: 1, name:'Ana'},
    //{id: 2, name:'Jorge'},
    //{id: 3, name:'Pedro'},
  ])
  const KEY = 'contacts'
  const contactRef = useRef()
  
  useEffect(()=>{
    const storedContacts = JSON.parse(localStorage.getItem(KEY))
    if(storedContacts){
        setContacts(storedContacts)
    }
},[])
  
useEffect(()=>{
  localStorage.setItem(KEY, JSON.stringify(contacts))
}, [contacts])

const checkContact = (id) => {
  const newContacts = [...contacts]
  const contact = newContacts.find((contact) => contact.id ===id)
  contact.isSelected = !contact.isSelected
  setContacts(newContacts)
}
const addContact = ()=>{
  const name = contactRef.current.value
  if(name === '') return
  setContacts((oldContacts)=>{      //()=>{} estado anterior y nuevo estado
    //return [...oldContacts, {id: 4, name}]
    return [...oldContacts, {id: uuid(), name, isSelected: false}]
  })   
  contactRef.current.value = null   //borra lo escrito en el input
}

const deleteContact = ()=>{
  const selectedContacts = contacts.filter((contact) => !contact.isSelected)
  setContacts(selectedContacts)
}

 //return (<div>Hola React</div>)
  return(
    //<ContactList contacts={[
    //  {id: 1, name:'Ana'},
    //]} /> 
    // <> esto soluciona un error o con Fragment
    /* console.log(authHelper.getToken()) */
    authHelper.getToken() ?
    <Fragment>
    <AppHeader />
      {/* <Login/> */}
      {/* <Register/> 
      <RegisterProduct /> */}
      <button className="cancelbtn" onClick={()=>{setModalOpen(true)}}>New Object</button>
      <Product />
      <ContactList contacts={contacts} checkContact={checkContact}/>
      <input ref={contactRef} type="text" placeholder="Nuevo contacto"></input>
      <button onClick={addContact}>🤦‍♀️Add</button>  
      <button onClick={deleteContact}>🙅‍♀️Del</button>
      <div> 🙋‍♀️ {contacts.filter((contact)=> contact.isSelected).length} Contactos Seleccionados </div>
      <button onClick={()=>{setModalOpen(true)}}>Open Modal</button>
      <Modal isOpen={modalOpen} onRequestClose={()=>setModalOpen(false)}>
        {/* <h2>Titulo</h2>
        <p>Cuerpo</p> */}
        <div><RegisterProduct/></div>
        <button onClick={()=>{setModalOpen(false)}}>Close</button>
      </Modal>
    </Fragment>
    
    :
    <Navigate to={'/login'} />
  )
}