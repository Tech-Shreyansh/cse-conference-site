import React from 'react'
import "../app/globals.css"

const Footer = () => {
  return (
    <div id="footer"  className="d-flex flex-column align-items-center justify-content-center pb-0 mb-0" >
    {/* <Logo className="mt-5"/> */}
    <img className="mt-5 w-[8rem] bg-white rounded-full" src="akgec.png" />
    <p className="mt-3 mb-5 text-gray-600 text-2xl">Ajay Kumar Garg Engineering College, Ghaziabad</p>
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
