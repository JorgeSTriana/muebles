import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './registerProduct.css'
//import { Form } from "react-bootstrap";
function RegisterProduct() {

  /* const [show, setShow] = React.useState(false); 

  const handleChange = () => setShow(false);
  const handleShow = () => setShow(true);  */

    return ( 
      <Fragment>  
          {/* <section className="home" id="home"> */}
            {/* <div className="content">
                <div id="id01" class="modal"> */}
                    <form class="modal-content animate" action="" method="post">
                        <div class="imgcontainer">
                            <img src="/logo1.png" alt="Avatar" class="avatar" thumbnail  />
                        </div>

                        <div class="container">
                            <h1>Registrar Objeto</h1>
                            <p>Registre el objeto que quiere intercambiar</p>
                            
                            <label for="email"><b>Nombre del Objeto</b></label>
                            <input type="text" placeholder="Ingrese el nombre del objeto" name="email" id="email" required />
                            <label for="psw"><b>Descripción del Objeto</b></label>
                            <input type="text" placeholder="Ingrese una descripción breve del objeto" name="psw" id="psw" required />
                            <label for="psw-repeat"><b>Intereses</b></label>
                            <input type="text" placeholder="Ingrese el nombre de los objetos por los cuales estaria interesado" name="psw-repeat" id="psw-repeat" required />
                            <div class="mb-3">
                                <label for="formFile" class="form-label"><b>Ingrese una imagen del objeto</b></label>
                                <input class="form-control" type="file" id="formFile" required />
                            </div>
                        </div>

                        <div class="container_btns" style={{background: '#f1f1f1'}}>
                            {/* <button onclick="document.getElementById('id02').style.display='block',document.getElementById('id01').style.display='none'" class="cancelbtn" >Register</button>
                            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button> */}
                            <button onclick="" class="cancelbtn" >Register</button>
                            <button type="button" onclick="" class="cancelbtn">Cancel</button>
                            {/* <span class="psw">Forgot <a href="#">password?</a></span> */}
                        </div>
                    </form>
                {/* </div>
            </div> */}
          {/* </section> */}
      </Fragment>
    );
}

export default RegisterProduct;