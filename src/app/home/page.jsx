"use client";
import React from 'react'
import Theme from "../../components/theme.jsx"
import Footer from "../../components/footer.jsx"
import Header from '../../components/Header/Header.js'
import ieeelogo from '../../../public/ieee.png'
import logo from '../../../public/akg.png'
import Image from 'next/image.js';
import SideSection from '../../components/SideSection.jsx';
import Link from 'next/link';
const page = () => {
  return (
    <>
      <Header active='home' />
      <Image src={'/banner.png'} width={1600} height={512}  className='w-full mx-auto'/>
      <div className="relative flex flex-col overflow-hidden bg-white ">
        {/* <div className=" lg:pt-[100px] mb-[50px]  mx-auto flex flex-col space-y-4 px-4 text-center lg:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 ">
          <div className=" mb-[100px]">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="heading1 text-[1.125rem] font-medium self-center">
                INTERNATIONAL{" "}
                <span className=" font-extrabold "> CONFERENCE ON</span>
                <span className="ml-2 cursor-pointer font-bold">&rarr;</span>
              </p>
            </div>
            <h1 className="heading2 text-center  mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Advanced Computing & <span className=''>Emerging Technologies{" "}</span>
              <span className="block font-extrabold mt-1 ">(A.C.E.T)</span>
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
        </div> */}
        <div className='px-9 md:px-10 text-center text-[#00c0ff] md:mb-3 mb-2 md:mt-7 mt-[20px]'>
        <Link href="/schedule.pdf" className='font-bold' locale={false}><marquee><h1 className='md:text-2xl text-lg underline'>Click here to download Presentation Schedule</h1></marquee></Link>
        </div>
        <div className='blink px-9 md:px-10 text-center text-[#481515] md:mb-5 mb-3 md:mt-3 mt-[12px]'>
        <Link href="/list of speakers.pdf" className='underline font-bold' locale={false}><h1 className='md:text-2xl text-lg'>Guest Speakers</h1></Link>
        </div>
        <div className='grid md:grid-cols-10 md:gap-8 px-4 md:px-8 mb-8 '>
          <div className='md:col-span-6'>
            <div id="date" className="lg:mt-3 px-[12px] mt-[20px] ">
              <div className="">
                <h1 className="font-extrabold md:text-2xl text-lg">
                  Date and Venue of the Conference
                </h1>
                <hr className='border-2 border-blue-800 mb-2' />
                <p className=" text-sm md:text-base text-gray-700 ">
                  The conference organized by Department of Computer Science &
                  Engineering, will be held offline at AKGEC, Ghaziabad, Uttar
                  Pradesh, India on 23-24 August, 2024 in collaboration with IEEE
                  Uttar Pradesh Section. The conference will include regular
                  sessions with poster/oral presentations, global and technical
                  sessions, panel discussions and poster presentations organized in
                  AKGEC.
                </p>
              </div>
            </div>
            <div id="theme" className="mt-5 px-[12px]">
              <div className=" mb-5">
                <h1 className="font-extrabold md:text-2xl text-lg"> Conference Theme </h1>
                <hr className='border-2 border-blue-800 mb-2' />
                <p className="text-sm md:text-base text-gray-700 mb-4 ">
                  The international conference on Advanced Computing and Emerging
                  Technologies (ACET-2024) will offer themes in the engineering
                  aspects of renewable energy and computing. The main aim of this
                  conference will be to provide an international premier forum for
                  the presentation of new advances and research results in the field
                  of Green Energy, Computing and security, sustainable development,
                  Artificial intelligence and Embedded Systems.
                </p>
                <div className="md:text-xl text-[#000] mb-4 "> The focus area and tracks of the conference would be:</div>
                <ul className=" text-sm sm:text-base text-gray-700  sm:pl-6">
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 1:&nbsp;</span> Advances in Machine
                    Learning and Deep Learning
                  </li>
                  <li className=" flex   gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 2:&nbsp;</span> Advances in Data
                    Science
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 3:&nbsp;</span> Applications of
                    Artificial Intelligence in Interdisciplinary areas
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 4:&nbsp;</span> High Performance
                    Computing
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 5:&nbsp;</span> Advances in
                    Communication and Networks
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 6:&nbsp;</span> Advanced Algorithms
                  </li>
                  <li className="flex gap-2 items-center mt-2">
                    <span className="font-[500] text-lg sm:text-xl text-[#000] whitespace-nowrap">Track 7:&nbsp;</span> Teaching & Learning
                    Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-4 md:w-3/4'>
            <SideSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
