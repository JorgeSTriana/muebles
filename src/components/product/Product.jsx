import React from "react";
import './product.css'
import Modal from 'react-bootstrap/Modal'
//import RegisterProduct from 'RegisterProduct'
/* import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle' */
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
/* import React, { useEffect, useState } from "react"; */
import {Card, Button} from 'react-bootstrap';
//import {Card, useState, Button} from 'react-bootstrap';
//import authHelper from '../../helpers/auth.helper'
//import { Navigate } from "react-router-dom";

function Product() {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* const addProduct = ()=>{
    const name = contactRef.current.value
    if(name === '') return
    setContacts((oldContacts)=>{      //()=>{} estado anterior y nuevo estado
      //return [...oldContacts, {id: 4, name}]
      return [...oldContacts, {id: uuid(), name, isSelected: false}]
    })   
    contactRef.current.value = null   //borra lo escrito en el input
  } */
    return ( 
      <>
      <div className="container">
      {/* <div className="d-grid gap-2 " id="">
          <Button onclick="#modal2" className="btn btn3" variant="outline-success" variant="primary" size="large" style={{ width: '250px'}}>Registrar Nuevo Objeto</Button>
      </div>  */}
      
      <Card border="secondary" className="tarjeta" style={{ width: '30rem'}}>
        <Card.Body /*onMouseOver={handleShow} style={{ height: '20rem'}} */>
          <Card.Img id="id04" className="imagen" variant="top" src="img_product2.jpg" style={{ height: 'auto'}} />          
          <Card.Title className="titulo">Monitor</Card.Title>                        
          <Modal 
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton style={{width: '1000px'}}>
              <Modal.Title>Monitor de PC</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{width: '1000px'}}>
              <Card.Img id="id04" className="imagen" variant="top" src="img_product2.jpg" style={{width: '50%'}} />
            </Modal.Body>
          </Modal>
        </Card.Body>
        
        <Card.Body className="content">
          <Modal.Header>
            {/* <Modal.Title>Monitor de PC</Modal.Title> */}
            <Card.Header><h2>Monitor de PC</h2></Card.Header>
          </Modal.Header>
          <Modal.Body>
            <Modal.Title><h3>Description</h3></Modal.Title>
            <p>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </p>
            <Modal.Title><h3>Intereses</h3></Modal.Title>
            <p>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </p>
            <Button className="btn2" type="submit" onClick={handleShow}>view image</Button> 
          </Modal.Body>
        </Card.Body>
        {/* {authHelper.getToken() ?
        <div className="d-grid gap-2 ">
              <Button href="/swap" className="cancelbtn" variant="outline-success" variant="primary" size="large">Swap</Button>
        </div> 
        :
        <div className="d-grid gap-2 ">
              <Button href="/swap" className="cancelbtn" variant="outline-success" variant="primary" size="large" disabled>Swap</Button>
        </div>
        } */}
        
      </Card>

      {/* <Button variant="primary" onMouseOver={handleShow}>
        Launch static backdrop modal
      </Button> */}

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
      </div>
      </>
    );
}

export default Product;