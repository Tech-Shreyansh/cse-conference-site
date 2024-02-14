import React, { useState } from 'react';
import './Navbar.css'
import '../../app/globals.css'
import Navbar from './Navbar'
import logo from '../../../public/akg.png'
import ieeelogo from '../../../public/ieee.png'
import Image from 'next/image';
// import Popup from '../popup/Popup'

function Header(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className='w-[100%] h-[100%] flex justify-around items-center'>
        <div className='flex w-[100%] md:flex-row gap-3 flex-col md:gap-5 justify-center items-center  py-3'>
          <Image src={logo} className='w-[180px] min-w-[120px] mr-2' alt="logo" />
          <div className='flex flex-col'>
          <div className='text-center text-[22px] leading-[1em]'>
            <strong>
              1
              <sup>ST</sup>
              INTERNATIONAL CONFERENCE
              <br/>
              on
              <br/>
              ADVANCED COMPUTING & EMERGING TECHNOLOGIES (ACET)
            </strong>
            <br/>
          </div>
          <div className='text-center text-[18px] leading-[1.3em] pt-1'>
            <strong className='text-blue-800'>
August 23
<sup>rd</sup>
-24
<sup>th</sup>
, 2024
            </strong>
            <br/>
            <strong>
              Organised by
            </strong>
</div>
<div className='text-center text-[22px]'>
           <strong>
            Department of Computer Science & Engineering
            <br/>
            Ajay Kumar Garg Engineering College, Ghaziabad
            </strong>
            <br/>
          </div>
        </div>
        <Image src={ieeelogo} className='min-w-[140px] w-[220px] pb-4' alt="logo" />

        </div>
        {/* <div className='ms-5 align-items-center d-none d-md-flex'>
      <div className=' p-2 me-4 eventDate'>Event&nbsp;Date&nbsp;:&nbsp;&nbsp;18&nbsp;-&nbsp;19&nbsp;Feb’&nbsp;2022</div>
      <NotificationsIcon style={{cursor:"pointer"}} onClick={() => setModalShow(true)} />
      </div> */}
      </div>
      <Navbar active={props.active} />

      {/* <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

    </>
  );
}

export default Header;