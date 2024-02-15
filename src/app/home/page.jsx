"use client";
import React from 'react'
import Theme from "../../components/theme.jsx"
import Footer from "../../components/footer.jsx"
import Header from '../../components/Header/Header.js'
const page = () => {
  return (
    <>
     <Header active='home'/>
    <div className="relative flex flex-col overflow-hidden bg-white ">
      <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-10 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <div className="">
          <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
            <p className="text-[1.125rem] font-medium md:text-sm">
              INTERNATIONAL{" "}
              <span className=" text-blue-800 "> CONFERENCE ON</span>
              <span className="ml-2 cursor-pointer font-bold">&rarr;</span>
            </p>
          </div>
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Advanced Computing & Emerging Technologies{" "}
            <span className=" text-blue-800 ">(ACET)</span>
          </h1>
          <div className="flex mt-8  text-lg text-gray-700 items-center gap-2 ">
            <img src="calendar.svg" className=" h-[36px] w-[36px]" />
            <p>August 23-24, 2024</p>
          </div>
        </div>
        <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="relative mx-5 lg:w-96">
            <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-200 :border-blue-900 lg:size-72" />
            <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 :border-blue-950 lg:size-72" />
            <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 :border-blue-900 lg:size-72" />
            <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-blue-100 :border-blue-950 lg:size-72" />
            <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 :bg-gray-800" />
            <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner :bg-blue-900 :bg-opacity-75" />
            <img
              src="naya.png"
              className="relative mx-auto rounded-lg shadow-lg h-[400px] bg-white"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    
      <div id="date" className="mt-3 ">
        <div className="container mx-auto">
          <h1 className="mb-3 text-blue-800 text-4xl ">
           Date and Venue of the Conference<span className=" text-[#000]"> &rarr;</span>
          </h1>
          <p className="text-lg text-gray-700 ">
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

      <div id="theme" className="mt-5">
        <div className="container mx-auto mb-5">
          <h1 className="mb-3 text-blue-800 text-4xl "> Conference Theme <span className=" text-[#000]"> &rarr;</span></h1>
          <p className="text-lg text-gray-700 mb-4 ">
            The international conference on Advanced Computing and Emerging
            Technologies (ACET-2024) will offer themes in the engineering
            aspects of renewable energy and computing. The main aim of this
            conference will be to provide an international premier forum for
            the presentation of new advances and research results in the field
            of Green Energy, Computing and security, sustainable development,
            Artificial intelligence and Embedded Systems. 
          </p>
          <div className="text-2xl text-[#000] mb-4 "> The focus area and tracks of the conference would be:</div>
          <ul className=" text-lg text-gray-700  pl-6">
            <li className=" flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 1:&nbsp;</span> Advances in Machine
              Learning and Deep Learning
            </li>
            <li className=" flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 2:&nbsp;</span> Advances in Data
              Science
            </li>
            <li className=" flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 3:&nbsp;</span> Applications of
              Artificial Intelligence in Interdisciplinary areas
            </li>
            <li className=" flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 4:&nbsp;</span> High Performance
              Computing
            </li>
            <li className="  flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 5:&nbsp;</span> Advances in
              Communication and Networks
            </li>
            <li className="  flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 6:&nbsp;</span> Advanced Algorithms
            </li>
            <li className="  flex items-center mt-2">
              <span className="font-[500] text-2xl text-[#000]">Track 7:&nbsp;</span> Teaching & Learning
              Systems
            </li>
          </ul>
        </div>
      </div>
    </div> 
    
  
    <Footer/>


 


    
  </>
  )
}

export default page
