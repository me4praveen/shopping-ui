import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SideNavigation from '../SideNavigation';
import { HEADER_CONFIG } from '../../assets/config/header';
import logo from '../../assets/images/eylogo.svg';
import './Header.css'
const Header = () => {
    console.log('Header Component');
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <SideNavigation />
            {/* <span className = "product-logo"><Logo /></span> */}
            <Navbar.Brand href="/">
                <img className= "product-logo" src={logo} /> 
                {HEADER_CONFIG.product_family} {HEADER_CONFIG.product_name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {
                        HEADER_CONFIG.tabs.map( (tab, index) => {
                            if (!tab.subtabs) {
                                return <Nav.Link key = {index} href={tab.path}>{tab.title}</Nav.Link>
                            }
                            return <NavDropdown key = {index} title={tab.title} id="collasible-nav-dropdown">
                                        { 
                                            tab.subtabs.map ((subtab, idx) => <NavDropdown.Item key = {idx} href={ subtab.path}>{subtab.title}</NavDropdown.Item>)
                                        }
                                   </NavDropdown>

                        })
                    }
                </Nav>
                <Nav>
                    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default React.memo(Header)
