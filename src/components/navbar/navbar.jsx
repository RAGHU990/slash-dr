import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
   
      <Navbar bg="light" variant="light">
      <header>
    <div  className='name' position>
 
        <nav class = "text-primary font-weight-bold">  Mr.AABITHA D 29/M </nav> 

    </div>

    </header>
        <div className='topnav'>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/patient">Patient Summary</Nav.Link>
            <Nav.Link href="visit">This Visit</Nav.Link>
            <Nav.Link href="/prescription">Prescription</Nav.Link>
            <Nav.Link href="/printing">Printing Precription</Nav.Link>
          </Nav>
          </div>
        
      </Navbar>

    </>
  );
}

export default Header;