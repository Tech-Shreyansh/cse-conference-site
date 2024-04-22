import React, { useState } from 'react';
import './Navbar.css'
import '../../app/globals.css'
import Navbar from './Navbar'
import logo from '../../../public/combined_logo.jpeg'
import ieeelogo from '../../../public/ieee.png'
import Image from 'next/image';
// import Popup from '../popup/Popup'

function Header(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className='w-[100%] h-[100%] flex justify-around items-center'>
        <div className='flex w-[100%] md:flex-row flex-col md:gap-5 xl:gap-[4rem] sm:gap-3 justify-center items-center  py-3'>
          <Image src={logo} className='w-[11.25rem] md:flex hidden min-w-[7.5rem] x-2' alt="logo" />
          <div className='flex flex-col'>
            <div className='text-center text-[0.75rem] md:text-[1.375rem] md:leading-[1em] leading-[1.2em]'>
              <strong>
                1
                <sup>ST</sup>
                INTERNATIONAL CONFERENCE{" "}
                <br className='hidden md:flex' />
                on
                <br />
                ADVANCED COMPUTING & EMERGING TECHNOLOGIES (ACET-2024)
              </strong>
              <br />
            </div>
            <div className='text-center text-[0.65rem] md:text-[1.125rem] leading-[1.3em] pt-1'>
              <strong className='hidden md:block font-extrabold '>
                23-24 August, 2024
              </strong>
              <p className='text-center text-blue-500 mb-2 md:mb-4 font-extrabold'>[ HYBRID MODE ]</p>
              <strong className='font-extrabold  md:text-black'>
                Organised by
              </strong>
            </div>
            <div className='text-center text-[0.75rem] leading-[1.2em] md:leading-normal md:text-[1.375rem]'>
              <strong>
                <span className='text-[0.6rem] md:text-[1.25rem] font-extrabold'>Department of Computer Science & Engineering</span>
                <br />
                Ajay Kumar Garg Engineering College, Ghaziabad, India
              </strong>
              <br />
            </div>
          </div>
          <Image src={ieeelogo} className='min-w-[8.625rem] md:flex hidden w-[13.75rem] pb-4' alt="logo" />

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
      <Image src={'/banner.png'} width={1600} height={512}  className='w-full mx-auto'/>
    </div>
  );
}

export default Header;