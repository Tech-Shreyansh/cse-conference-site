import React from 'react'
import "../app/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"; 
const Footer = () => {
  return (
    <div id="footer"  className="absolute bg-[#1f1f1f] xl:bg-white w-full mt-[30px] d-flex flex-column align-items-center justify-content-center pb-0 mb-0 text-xs pt-2" >
    <img className="w-[4rem] bg-white rounded-full md:mt-2" src="akgec.png" />
    <p className='text-gray-400 text-base md:text-lg mt-2 md:mt-4 md:w-3/5 text-center'>Venue: Department of Computer Science & Engineering</p>
    <p className="my-2 md:mb-4 text-gray-500 text-center text-base md:text-lg w-11/12">Ajay Kumar Garg Engineering College, Ghaziabad, India</p>
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
