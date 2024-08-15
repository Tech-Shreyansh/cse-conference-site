'use client'
import Theme from "../../components/theme.jsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
import { useState } from "react"
import { Link } from 'react-scroll'
import Image from "next/image.js"
import { Table } from "react-bootstrap"
import SpeakerCard from "../../components/SpeakerCard"
const page = () => {

    const sections = [
        {
            title: "Chief Guest (Inaugural)",
        },
        {
            title: "Chief Guest (Valedictory)",
        },
        {
            title: "Guest of Honor",
        },
        {
            title: "Keynote Speaker (Online)",
        },
        {
            title: "Invited Speaker",
        },
        {
            title: "Women in Engineering (WIE)",
        },
        {
            title: "Conference Mentor",
        },
        {
            title: "IEEE Young Professional",
        },
        {
            title: "Invited Talk",
        },
        {
            title: "IEEE Special Interest Group on Humanitarian Technology (SIGHT)",
        },
    ];

    const speakers = [
        {
          photo: "img1.png",
          name: "Dr. Balakrishnan Athiyaman",
          title: "Scientist-F & Head",
          institution: "(HPC & IT Division), Ministry of Earth & Science, India",
          role: "Chief Guest (Inaugural)"
        },
        {
          photo: "img2.png",
          name: "Dr. Sri Niwas Singh",
          title: "Advisor, IEEE",
          institution: "Director, (ABV-IIITM), Gwalior, India",
          role: "Chief Guest (Valedictory)"
        },
        {
          photo: "img3.png",
          name: "Dr. Satish Kumar Singh",
          title: "Immediate Past Chair, IEEE UP Section",
          institution: "Associate Professor, IIIT Allahabad",
          role: "Guest of Honor"
        },
        {
          photo: "img4.png",
          name: "Dr. Valentina E. Balas",
          title: "Professor",
          institution: "Aurel Vlaicu University of Arad/Academy of Romanian Scientist, Romania",
          role: "Keynote Speaker (Online)"
        },
        {
          photo: "img5.png",
          name: "Dr. Varun Kakar",
          title: "Joint Secretary, IEEE",
          institution: "Associate Professor, BPTKEC",
          role: "Invited Speaker"
        },
        {
          photo: "img6.png",
          name: "Dr. Smita Sharma",
          title: "Co-opted Members, IEEE UP Section",
          institution: "Associate Professor, AMITY University, Gr Noida",
          role: "Women in Engineering (WIE)"
        },
        {
          photo: "img7.png",
          name: "Dr. Prabhakar Tiwari",
          title: "Conference Mentor",
          institution: "MMMUT Gorakhpur",
          role: "Conference Mentor"
        },
        {
          photo: "img8.png",
          name: "Dr. Pragya Singh",
          title: "IEEE-YP",
          institution: "IIIT Allahabad",
          role: "IEEE Young Professional"
        },
        {
          photo: "",
          name: "Dr. D. P. Vidyarthy",
          title: "Professor",
          institution: "JNU, Delhi",
          role: "Invited Talk"
        },
        {
          photo: "",
          name: "Mr. Sourabh Ghosh",
          title: "SIGHT",
          institution: "MNNIT Prayagraj",
          role: "IEEE Special Interest Group on Humanitarian Technology (SIGHT)"
        }
      ];
      
    
    const [isCommitteeOpen, setIsCommitteeOpen] = useState(true);


    return (
        <>
            <Header active="guest-speakers" />
            <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-[34%] md:sticky top-[1%] left-0 md:h-screen h-fit bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between w-4/5 md:w-full cursor-pointer">
                <h2 className="text-blue-800 font-semibold text-lg md:text-2xl">Guest Speakers</h2>
            </div>
                <nav>
                    <ul className="space-y-2 list-none">
                        {sections.map((section, index) => (
                            <Link className='cursor-pointer' to={index+100} spy={true} smooth={true} offset={0} duration={200}>
                                <li
                                    key={index}
                                    className={`text-sm md:text-base cursor-pointer my-1 px-2 py-2 rounded-md transition duration-300 hover:bg-blue-200 ease-in-out`}
                                    onClick={() => handleSectionSelection(index)}
                                >
                                    {section.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="">
                <div className="w-[100%] top-0">
                    <div className="container" >
                        <h1 className="mb-3 font-extrabold  text-4xl ">
                            <span className=" text-[#000]"></span>
                        </h1>
                        {speakers.map((speaker, index) => (
        <SpeakerCard
          id={index+100}
          key={index}
          photo={speaker.photo}
          name={speaker.name}
          title={speaker.title}
          institution={speaker.institution}
          role={speaker.role}

        />
      ))}
                        </div>
                        </div>
                        </div>
                        </div>
                        
        <Footer />
    </>
    )
}

export default page
