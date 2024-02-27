"use client";
import React from 'react'
import Theme from "../../components/theme.jsx"
import Footer from "../../components/footer.jsx"
import Header from '../../components/Header/Header.js'
import ieeelogo from '../../../public/ieee.png'
import logo from '../../../public/akg.png'
import Image from 'next/image.js';

const page = () => {
  return (
    <>
      <Header active='home' />
      <div className="relative flex flex-col overflow-hidden bg-white ">
        <div className=" lg:pt-[100px] mb-[50px]  mx-auto flex flex-col space-y-4 px-4 text-center lg:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 ">
          <div className=" mb-[100px]">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="heading1 text-[1.125rem] font-medium self-center">
                INTERNATIONAL{" "}
                <span className=" text-blue-800 "> CONFERENCE ON</span>
                <span className="ml-2 cursor-pointer font-bold">&rarr;</span>
              </p>
            </div>
            <h1 className="heading2 text-center  mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Advanced Computing & <span className=''>Emerging Technologies{" "}</span>
              <span className="block text-blue-800 mt-1 ">(A.C.E.T)</span>
            </h1>
            <div className="heading3 flex mt-8  text-lg text-gray-700 items-center gap-2 ">
              <img src="calendar.svg" className=" h-[36px] w-[36px]" />
              < >August 23-24, 2024</>
            </div>
          </div>
          <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center  lg:justify-center ">
            <div className="relative mx-5 lg:w-96">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-200 :border-blue-900 lg:size-72" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 :border-blue-950 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 :border-blue-900 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0  -mr-14 size-40 rounded-full border border-blue-100 :border-blue-950 lg:size-72 " />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 :bg-gray-800" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner :bg-blue-900 :bg-opacity-75" />
              <img
                src="naya.png"
                className="relative w-[100%] rounded-lg shadow-lg h-[400px] bg-white"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-10 md:gap-8 px-4 md:px-8'>
          <div className='md:col-span-6'>
            <div id="date" className="lg:mt-3 px-[12px] mt-[50px] ">
              <div className="">
                <h1 className="mb-3 text-blue-800 md:text-4xl text-2xl underline underline-offset-4">
                  Date and Venue of the Conference
                </h1>
                <p className=" text-[15px] md:text-lg text-gray-700 ">
                  The conference organized by Department of Computer Science &
                  Engineering, will be held offline at AKGEC, Ghaziabad, Uttar
                  Pradesh, India on 23-24 August 2024 in collaboration with IEEE
                  Uttar Pradesh Section. The conference will include regular
                  sessions with poster/oral presentations, global and technical
                  sessions, panel discussions and poster presentations organized in
                  AKGEC.
                </p>
              </div>
            </div>
            <div id="theme" className="mt-5 px-[12px]">
              <div className=" mb-5">
                <h1 className="mb-3 text-blue-800 md:text-4xl text-2xl underline underline-offset-4"> Conference Theme </h1>
                <p className=" text-[15px] md:text-lg text-gray-700 mb-4 ">
                  The international conference on Advanced Computing and Emerging
                  Technologies (ACET-2024) will offer themes in the engineering
                  aspects of renewable energy and computing. The main aim of this
                  conference will be to provide an international premier forum for
                  the presentation of new advances and research results in the field
                  of Green Energy, Computing and security, sustainable development,
                  Artificial intelligence and Embedded Systems.
                </p>
                <div className="text-lg sm:text-2xl text-[#000] mb-4 "> The focus area and tracks of the conference would be:</div>
                <ul className=" text-[15px] sm:text-lg text-gray-700  sm:pl-6">
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 1:&nbsp;</span> Advances in Machine
                    Learning and Deep Learning
                  </li>
                  <li className=" flex   gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 2:&nbsp;</span> Advances in Data
                    Science
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 3:&nbsp;</span> Applications of
                    Artificial Intelligence in Interdisciplinary areas
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 4:&nbsp;</span> High Performance
                    Computing
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 5:&nbsp;</span> Advances in
                    Communication and Networks
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 6:&nbsp;</span> Advanced Algorithms
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl md:text-2xl text-[#000] whitespace-nowrap">Track 7:&nbsp;</span> Teaching & Learning
                    Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-4 md:w-3/4'>
            <div className='my-2'>
              <h1 className="mb-3 text-blue-800 md:text-2xl text-lg underline underline-offset-4">
                Publishing & Indexing
              </h1>
              <p>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements</p>
              <Image src={ieeelogo} className='w-1/2 mx-auto' alt="IEEE_logo" />
            </div>
            <hr />
            <div className='md:w-1/2 mx-auto my-4'>
              <p className='md:text-lg text-center font-semibold'>In Association with</p>
              <Image src={logo} className='w-1/2 md:w-4/5 mx-auto' alt="logo" />
            </div>
            <hr />
            <div className='my-2 mb-4'>
              <h1 className="mb-3 text-blue-800 md:text-2xl text-lg underline underline-offset-4">
                Important Dates
              </h1>
              <ul class="text-sm md:text-lg space-y-1">
                <li><span class="font-bold">Full Paper Submission</span> : <p>July 15, 2024</p></li>
                <li><span class="font-bold">Acceptance Notification due</span> : <p>July 25, 2024</p></li>
                <li><span class="font-bold">Registration due</span> : <p>August 05, 2024</p></li>
                <li><span class="font-bold">Conference dates</span> : <p>August 23-24, 2024</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
