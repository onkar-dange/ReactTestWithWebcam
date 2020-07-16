import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem,Row } from 'react-bootstrap';
class MYNavigationbar extends React.Component {
    render() {
        return (
            <Row className="custom_row">
                <Navbar inverse collapseOnSelect style={{marginBottom:"0px"}}>
                    <Navbar.Header>
                        <Navbar.Brand>  
                            <NavLink to="/" activeClassName="selected" exact={true}>React-Test</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} >
                                 <NavLink className="menu" to="form" activeClassName="selected">Mytest</NavLink>
                             </NavItem>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Navbar>
             </Row>
        )
    }
}


export default MYNavigationbar;