"use client";
import React from 'react'
import Footer from "../../components/footer.jsx"
import Header from '../../components/Header/Header.js'
import Image from 'next/image.js';
import SideSection from '../../components/SideSection.jsx';

const page = () => {
    return (
        <>
            <Header active='paper-submission' />
            <div className="relative flex flex-col overflow-hidden bg-white ">
                <div className='grid md:grid-cols-10 md:gap-8 px-4 md:px-8 md:mt-8 mb-8'>
                    <div className='md:col-span-6'>
                        <div className="lg:mt-3 px-[12px] mt-[50px] ">
                            <h1 className="font-extrabold  md:text-2xl text-lg">
                                Paper Submission
                            </h1>
                            <hr className='border-2 border-blue-800 mb-2' />
                            <p className="text-sm md:text-base text-gray-700 ">
                                The 1st International Conference on Advanced Computing & Emerging Technologies (ACET-2024) will be organized by Department of Computer Science & Engineering
                                Ajay Kumar Garg Engineering College, Ghaziabad, India from 23-24 August, 2024. The aim of the ACET-2024 is to serve researchers, developers, educators working in the area of Disruptive Technology and their applications to present as well as to exchange the research ideas. ACET-2024 invites authors to submit their original and unpublished work that demonstrates current research in all areas of Advanced Computing & Emerging Technologies and their applications through Microsoft's Conference Management Toolkit and submission link <a target='_blank' className='font-semibold text-blue-500' href='https://cmt3.research.microsoft.com/ACET2024/Submission/Index'> (Click here) </a><br /><br />
                                Publication - All the accepted and presented papers of ACET-2024 will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope
                                If you encounter problems in submitting, contact at <a href='mailto:acet@akgec.ac.in' className='underline underline-1'>acet@akgec.ac.in</a>.
                                Acceptance of papers will be communicated to authors by email. <br /><br /><strong>Publication - All the accepted and presented papers of ACET-2024 will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope.</strong>
                            </p>
                        </div>
                        <div className="lg:mt-3 px-[12px] mt-[50px] space-y-4">
                            <div>
                                <h1 className="font-extrabold  md:text-2xl text-lg">
                                    Author’s Guidelines
                                </h1>
                                <hr className='border-2 border-blue-800 mb-2' />
                            </div>
                            <p className='font-extrabold'>Guidelines</p>
                            <ul className="text-sm md:text-base text-gray-700 list-disc ml-4 space-y-1 text-justify">
                                <li>At least one author of an accepted paper must register and present his / her paper in conference.</li>
                            </ul>
                            <p className='font-extrabold'>Manuscript Preparation</p>
                            <ul className="text-sm md:text-base text-gray-700 list-disc ml-4 space-y-1 text-justify">
                                <li>The manuscript should be prepared in <a className='font-semibold text-blue-500' target='_blank' href='https://www.ieee.org/conferences/publishing/templates.html'>IEEE format</a> using MS WORD and/or LaTeX template</li>
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
                        <SideSection />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
