import React, { Fragment } from "react"
import AppHeader from "../body/AppHeader";
import Product from "../product/Product";
import './swap.css'
export function Swap() {
    
    return ( 
        <Fragment>
            <AppHeader />
            <div className="container">
            <div className="swap">
                <div className="swapobject">
                    <h2>Monitor</h2>
                    <img src="img_product2.jpg" alt="" />
                    <h3>Desciption</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur beatae inventore vitae 
                    </p>
                    <h3>Intereses</h3>
                    <p>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </p>
                </div>

                <div className="swapobjectofert">
                    <h2>My Objects</h2>
                    <div>
                    <Product />
                    <button className="cancelbtn">edit</button>
                    <button>Delete</button>
                    </div>
                </div>
            </div></div>
        </Fragment>
     );
}

export default Swap;