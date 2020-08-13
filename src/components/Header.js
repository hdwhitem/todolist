import React from 'react';
import {Navbar, NavbarBrand, Container} from 'reactstrap';

export const Header = () => {
  return (
    <Navbar color="dark" dark>
      <Container style={{justifyContent: 'center'}}>
        <NavbarBrand href="/">To Do List</NavbarBrand>
      </Container>
    </Navbar>
  )

}
