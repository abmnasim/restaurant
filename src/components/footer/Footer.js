import React from 'react';
import { Col } from "reactstrap";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <Col className="col-auto">
                        <p>Restaurant App &copy; Copyright 2021</p>
                    </Col>
                </div>            
            </div>
        </div>
    )
}
export default Footer;