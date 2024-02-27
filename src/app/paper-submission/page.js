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
            <Header active='paper-submission' />
            <div className="relative flex flex-col overflow-hidden bg-white ">
                {/* <div className=" lg:pt-[100px] mb-[50px]  mx-auto flex flex-col space-y-4 px-4 text-center lg:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 ">
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
                </div> */}
                <Image src={'/banner.png'} width={1600} height={512}  className='md:w-11/12 md:m-2 md:rounded-3xl mx-auto'/>
                <div className='grid md:grid-cols-10 md:gap-8 px-4 md:px-8 md:mt-8 mb-8'>
                    <div className='md:col-span-6'>
                        <div className="lg:mt-3 px-[12px] mt-[50px] ">
                            <h1 className="mb-3 text-blue-800 md:text-4xl text-2xl underline underline-offset-4">
                                Paper Submission
                            </h1>
                            <p className="text-sm md:text-base text-gray-700 ">
                                The 1st International Conference on Advanced Computing & Emerging Technologies (ACET) will be organized by Department of Computer Science & Engineering
                                Ajay Kumar Garg Engineering College, Ghaziabad, India from 23-24th August, 2024. The aim of the ACET-2024 is to serve researchers, developers, educators working in the area of Disruptive Technology and their applications to present as well as to exchange the research ideas. ACET-2024 invites authors to submit their original and unpublished work that demonstrates current research in all areas of Advanced Computing & Emerging Technologies and their applications through Microsoft's Conference Management Toolkit and submission link <span className='font-semibold'>will be updated soon.</span><br />
                                Publication - All the accepted and presented papers of ACET-2024 will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope
                                If you encounter problems in submitting, contact at <a href='mailto:acet@akgec.ac.in' className='underline underline-1'>acet@akgec.ac.in</a>.
                                Acceptance of papers will be communicated to authors by email. Publication - All the accepted and presented papers of ACET-2024 will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope. ** Indexing: Scopus
                            </p>
                        </div>
                        <div className="lg:mt-3 px-[12px] mt-[50px] space-y-4">
                            <h1 className="mb-3 text-blue-800 md:text-4xl text-2xl underline underline-offset-4">
                                Author’s Guidelines
                            </h1>
                            <p className='font-extrabold'>Guidelines</p>
                            <ul className="text-sm md:text-base text-gray-700 list-disc ml-4 space-y-1 text-justify">
                                <li>At least one author of an accepted paper must register and present his / her paper in conference.</li>
                            </ul>
                            <p className='font-extrabold'>Manuscript Preparation</p>
                            <ul className="text-sm md:text-base text-gray-700 list-disc ml-4 space-y-1 text-justify">
                                <li>The manuscript should be prepared in IEEE format using MS WORD and/or LaTeX template</li>
                                <li>The figures / graphs / plots in the manuscript MUST be of good resolution (600 dpi or more), tables MUST NOT be in pictorial format. Text in figures should not be too small, and preferably of equal size as text of the article.</li>
                                <li>Figures, text, or the tables MUST be visible within the boundary of the text area of the page and MUST NOT go beyond it.</li>
                                <li>Do NOT use any Social / Academic titles (e.g. Mr.,Ms.,Dr.,Prof. etc) preceding the author names. Do NOT mention the position of a person (e.g., research scholar, student, assistant professor, professor, IEEE member, IEEE student member etc.) in the affiliation.</li>
                                <li>Mention full address, affiliation, and email of ALL authors, specify a corresponding author with the corresponding e-mail ID. [Once an article is accepted, the publisher will send the proofreading of article to this e-mail].</li>
                                <li>Articles must be written in spell-checked and grammatically correct English.</li>
                                <li>All references, figures, and tables should be numbered in sequence starting from 1 and MUST be duly cited / referred within the text.</li>
                            </ul>
                            <p className='font-extrabold'>Policy on Plagiarism</p>
                            <ul className="text-sm md:text-base text-gray-700 list-disc ml-4 space-y-1 text-justify">
                                <li>Authors are requested to kindly refrain from plagiarism in any form.</li>
                                <li>Authors should submit their original and unpublished research work not under consideration for publication elsewhere.</li>
                                <li>Papers found to be plagiarized during any stage of review shall be rejected.</li>
                                <li>As per the copyright transfer agreement, Authors are deemed to be individually and collectively responsible for the content of manuscripts published by them.</li>
                                <li>Hence, it is the responsibility of each author to strive for the highest ethical standards with respect to plagiarism.</li>
                            </ul>
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
