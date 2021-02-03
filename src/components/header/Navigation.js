import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggler = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <div className="container">
                        <NavbarBrand href="/">Restaurant App</NavbarBrand>
                        <NavbarToggler onClick={this.navToggler} />
                        <Collapse navbar isOpen={this.state.isNavOpen} style={{textAlign:"left"}}>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about" className="nav-link">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link">Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Navigation;