import React, { Fragment } from "react"
import AppHeader from "../body/AppHeader";
import Product from "../product/Product";
import './profile.css'
import {Col, Container, Image, Row } from 'react-bootstrap'; 
import authHelper from '../../helpers/auth.helper'
import { Navigate } from "react-router-dom";

export function Profile() {
    
    return ( 
        authHelper.getToken() ?
        <Fragment>
            <AppHeader />
            <div className="profile">
                <div className="infoProfile" >
                   <h2>Profile</h2>
                   <Image className="img-profile" src="/img-log.png" width="50" height="50" />
                </div>
                <Container>
                    <h2>My Objects</h2>
                    <Row >
                    <Col className="myObjects">
                        <Product />
                    </Col>
                    <Col className="myObjects">
                        <Product />
                    </Col>
                    </Row>
                    <Row>
                    <div className="myObjects">
                        <Product />
                    </div>
                    </Row></Container>
            </div>
        </Fragment>
        :
        <Navigate to={'/'} />
     );
}

export default Profile;