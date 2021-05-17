/*import { Button } from 'bootstrap';*/
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input } from 'reactstrap';

function Header() {
    const [isModalOpen, toggleModal] = useState(false);
    const [isNavOpen, toggleNav] = useState(false)
    return(
        <div>
            <React.Fragment>
                <Navbar dark expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="50" alt="Foodie" />
                        </NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-home fa-lg">Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu" >
                                        <span className="fa fa-list fa-lg">Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/" >
                                        <span className="fa fa-info fa-lg">About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/" >
                                        <span className="fa fa-address-card fa-lg">Contact Us</span>
                                    </NavLink>
                                </NavItem>   
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button color="danger" onClick={() => toggleModal(!isModalOpen)}>
                                        <span className="fa fa-sign-in fa-lg">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-7">
                                <h1>Foodie Na Foodie</h1>
                                <p>Na here Jesus collect bread feed five thousand. Try our bread today and never be hungry again</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={isModalOpen} toggle={() => toggleModal(!isModalOpen)}>
                    <ModalHeader toggle={() => toggleModal(!isModalOpen)}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" placeholder="Email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" placeholder="Password"/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="danger">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        </div>
    );
    
}

export default Header;