import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Get Beers!
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title="sort">
            <MenuItem>Name</MenuItem>
            <MenuItem>ABV</MenuItem>
            <MenuItem>Volume</MenuItem>
            <MenuItem>First Brewed</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
