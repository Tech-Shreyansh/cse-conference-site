import React from 'react'
import ieeelogo from "../../public/ieee.png"
import logo from "../../public/akg.png"
import Image from 'next/image'

const SideSection = () => {
    return (
        <div>
            <div className='my-2'>
              <h1 className="font-extrabold md:text-2xl text-lg">
                Publishing & Indexing
              </h1>
              <hr className='border-2 border-blue-800 mb-2' />
              <p>Accepted and presented papers will be submitted for inclusion into IEEE Xplore digital library subject to meeting IEEE Xplore’s scope and quality requirements.</p>
              <Image src={ieeelogo} className='w-1/2 mx-auto' alt="IEEE_logo" />
            </div>
            <hr />
            <div className='md:w-1/2 mx-auto my-4'>
              <p className='md:text-lg text-center font-semibold'>In Association with</p>
              <Image src={logo} className='w-1/2 md:w-4/5 mx-auto' alt="logo" />
            </div>
            <div className='my-2 mb-4'>
              <h1 className="font-extrabold md:text-2xl text-lg">
                Important Dates
              </h1>
              <hr className='border-2 border-blue-800 mb-2' />
              <ul class="text-sm md:text-lg space-y-1 ml-0">
                <li><span class="font-bold">Full Paper Submission date</span> : <s><p>21 June, 2024</p></s><p>15 July, 2024</p></li>
                <li><span class="font-bold">Acceptance Notification date</span> : <s><p>20 July, 2024</p></s><p>05 Aug, 2024</p></li>
                <li><span class="font-bold">Registration date</span> : <s><p>20 July, 2024</p></s><p>05 Aug, 2024</p></li>
                <li><span class="font-bold">Camera Ready Paper Submission date</span> : <s><p>20 July, 2024</p></s><p>05 Aug, 2024</p></li>
                <li><span class="font-bold">Conference dates</span> : <p>23-24 August, 2024</p></li>
              </ul>
            </div>
        </div>
    )
}

export default SideSection;