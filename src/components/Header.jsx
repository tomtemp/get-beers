import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends Component {
  isActive(sort) {
    return sort === this.props.sort;
  }

  render() {
    const { sort, handleSortSelect } = this.props;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Get Beers!
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title={sort} onSelect={handleSortSelect} id="nav-dropdown">
            <MenuItem eventKey="name" active={this.isActive('name')}>
              Name
            </MenuItem>
            <MenuItem eventKey="abv" active={this.isActive('abv')}>
              ABV
            </MenuItem>
            <MenuItem eventKey="volume" active={this.isActive('volume')}>
              Volume
            </MenuItem>
            {/*<MenuItem eventKey="firstBrewed" active={this.isActive('firstBrewed')}>
              First Brewed
            </MenuItem>*/}
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
