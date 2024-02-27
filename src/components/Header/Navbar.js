import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'
import Link from 'next/link';
// import Popup from '../popup/Popup'

function Navigationbar(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='px-3 md:py-0 navbarcolor'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className='d-flex d-md-none'>
          <div className='text-white p-1 me-4' style={{ fontSize: "12px", border: '1px solid white' }}>Date&nbsp;:&nbsp;23&nbsp;-&nbsp;24&nbsp;Aug&nbsp;2024</div>
          {/* <NotificationsIcon onClick={() => setModalShow(true)} className='m-0 p-0' style={{color:"white"}}/> */}
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-around md:h-[3rem] w-100 nav-options">
            <Link href='/' className={props.active === 'home' ? 'p-3 activeLink active d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Home</Link>
            <Link href='/about' className={props.active === 'about' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>About</Link>
            <Link href='/committee' className={props.active === 'committee' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Committee</Link>
            <Link href='/call-for-paper' className={props.active === 'call' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Call for Paper</Link>
            <Link href='/paper-submission' className={props.active==='paper-submission'?'p-3 active activeLink d-flex align-items-center':'p-3 inactiveLink inactive d-flex align-items-center'}>Paper Submission</Link>
            <Link href='/registration' className={props.active === 'registration' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Registration</Link>
            <Link href='/accomodation' className={props.active === 'accomodation' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Accomodation</Link>
            <Link href='/travel-grant' className={props.active === 'travel-grant' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Travel Grant</Link>
            <Link href='/contact-us' className={props.active === 'contact-us' ? 'p-3 active activeLink d-flex align-items-center' : 'p-3 inactiveLink inactive d-flex align-items-center'}>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

    </>
  );
}

export default Navigationbar;
