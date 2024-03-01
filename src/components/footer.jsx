import React from 'react'
import "../app/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"; 
const Footer = () => {
  return (
    <div id="footer"  className="absolute bg-[#1f1f1f] xl:bg-white w-full mt-[30px] d-flex flex-column align-items-center justify-content-center pb-0 mb-0" >
    <img className="mt-5 w-[8rem] bg-white rounded-full" src="akgec.png" />
    <p className='md:text-lg text-gray-400 md:text-xl mt-4 w-3/5 text-center'>Venue: Department of Computer Science & Engineering</p>
    <p className="mt-2 mb-4 text-gray-500 text-lg text-center md:text-2xl">Ajay Kumar Garg Engineering College, Ghaziabad, India</p>
    <div class="row text-light">
        <div class="col-sm"></div>
    </div>
    <div className="hrline"></div>
    <div className='d-flex align-items-center pt-2 pb-2 justify-content-center footer-bottom text-light si-text'>
        DESIGNED &amp; DEVELOPED BY :&nbsp;&nbsp; <img src='silogo.svg'/>&nbsp; <a href="https://silive.in" rel="noreferrer" className="si" target="_blank">SOFTWARE INCUBATOR</a>
    </div>
</div>
  )
}

export default Footer
