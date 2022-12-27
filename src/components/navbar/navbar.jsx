import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
   
      <Navbar bg="light" variant="light">
      <header>
    <div  className='name' position>
 
           Mr.R. Ranjithkumar Rajaperumal, 22/M

    </div>
    </header>
        <div className='topnav'>
          <Nav className="me-auto">
            <Nav.Link href="#Profile">Profile</Nav.Link>
            <Nav.Link href="#Patient Summary">Patient Summary</Nav.Link>
            <Nav.Link href="#This Visit">This Visit</Nav.Link>
            <Nav.Link href="#Precription">Prescription</Nav.Link>
            <Nav.Link href="#Printing Precription">Printing Precription</Nav.Link>
          </Nav>
          </div>
        
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;