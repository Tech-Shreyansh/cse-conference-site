import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-scroll'
const Committee = () => {
    const sections = [
        {
            title: "Patrons and Chairs",
        },
        {
            title: "Conference Secretaries",
        },
        {
            title: "Advisory Committee",

        },
        {
            title: "Organising Committee",
        },
        {
            title: "Technical Program Committee",
        },

    ];
    const subSec = [
        {
            title: "Registration Committee",
        },
        {
            title: "Publication Committee",
        },
        {
            title: "Cultural Committee",

        },
        {
            title: "Transportation, Accommodation & Hospitality Committee",
        },
        {
            title: "Reception, Decoration & Stage Management Committee",
        },
        {
            title: "Technical Sessions Committee",
        },
        {
            title: "Finance & Audit Committee",
        },
        {
            title: "Food Committee",

        },
        {
            title: "Advertising, Publicity & Sponsorship Committee",
        },
        {
            title: "Website Management Committee",
        },

    ];

    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

    const handleSectionSelection = (index) => {
        setSelectedSectionIndex(index);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-[34%] md:sticky top-[1%] left-0 md:h-screen h-fit bg-gray-100 p-6 rounded-lg">
                <h1 className="text-blue-800 text-xl md:text-3xl mb-3">Conference Committee</h1>
                <nav>
                    <ul className="space-y-2 list-none">
                        {sections.map((section, index) => (
                            <Link className='cursor-pointer' to={index} spy={true} smooth={true} offset={0} duration={200}>
                                <li
                                    key={index}
                                    className={`cursor-pointer my-1 px-4 py-2 rounded-md transition duration-300 hover:bg-blue-200 ease-in-out`}
                                    onClick={() => handleSectionSelection(index)}
                                >
                                    {section.title}
                                </li>
                            </Link>
                        ))}
                        <h1 className="text-blue-800 text-xl md:text-3xl mb-2 mt-3">Sub Committees</h1>
                        {subSec.map((section, ind) => (
                            <Link className='cursor-pointer' to={ind + 5} spy={true} smooth={true} offset={0} duration={200}>
                                <li
                                    key={ind + 5}
                                    className={` cursor-pointer my-1 px-4 py-1 rounded-md transition duration-300 hover:bg-blue-200 ease-in-out `}
                                    onClick={() => handleSectionSelection(ind)}
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
                        <h1 className="mb-3 text-blue-800 text-4xl ">
                            <span className=" text-[#000]"></span>
                        </h1>


                        <Table id='0' borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Chief Patron</th>
                                    <th className="noborder">Patron</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. R. K. Agarwal <br /> Director General, Ajay Kumar Garg Engineering College,
                                        Ghaziabad, India</td>
                                    <td className="tdborder"> Dr. Hemant Ahuja<br />Director, Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">General Chair(s)</th>
                                    {/* <th className="noborder">Technical Chair</th> */}
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. Anu Chaudhary<br />Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                    <td className="tdborder">Dr. Rajesh Prasad <br />Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Conference Chair </th>
                                </tr>
                                <tr>
                                    <td className="tdborder"> Dr. Rajesh Prasad<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Treasurer</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. Avdhesh Gupta<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Technical Chair(s)</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. Shashank Sahu<br />Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                    <td className="tdborder">Dr. Akhilesh Verma<br />Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Program Chair(s)</th>
                                </tr>
                                <tr>
                                    <td className="tdborder"> Dr. Sonam Gupta<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                    <td className="tdborder">Dr. Santosh Kumar Upadhyay<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India<br />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Publicity Chair(s)</th>
                                </tr>
                                <tr>
                                    <td className="tdborder"> Dr. Rahul Sharma<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                    <td className="tdborder">Dr. Ayushi Prakash<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India<br />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Workshop Chair(s)</th>
                                </tr>
                                <tr>
                                    <td className="tdborder"> Dr. Anupama Sharma<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                    <td className="tdborder">Dr. Anuradha Taluja<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India<br />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Workshop Co-Chair</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. Jaishree Jain<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                    <td className="tdborder">Dr. Ruchi Gupta<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India<br />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Exhibit Chair</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. Sunil Kumar<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India
                                    </td>
                                    <td className="tdborder">Dr. Rakesh Kumar Yadav<br />
                                        Ajay Kumar Garg Engineering College, Ghaziabad, India<br />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Finance Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Shashank Sahu,<br /> Department of CSE. AKGEC, Ghaziabad</td>

                            </tr>

                        </tbody>
                    </Table> */}

                        {/* <Table >
                        <thead>
                            <th className="noborder" >Publicity Co-Chair  </th>
                        </thead>
                        <tbody className="tableNew">

                            <tr>
                                <td>Mr. Anuj Kumar Dwivedi<br />AKGEC, Ghaziabad, India</td>
                                <td>Mr. Santosh Kumar Upadhyay<br />AKGEC, Ghaziabad, India</td>
                            </tr>

                        </tbody>
                    </Table> */}


                        {/* <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Finance Co-Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. B. N. Pandey, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}

                        {/* <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Sponsorship Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Inderjeet Kaur,<br /> Department of CSE. AKGEC, Ghaziabad</td>

                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Technical Program Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Sonam Gupta,<br /> Department of CSE. AKGEC, Ghaziabad</td>

                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Publication Chair </th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Charu Agarwal,<br />
                                    Department of CSE. AKGEC, Ghaziabad
                                </td>

                            </tr>

                        </tbody>
                    </Table> */}


                        {/* <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Sponsorship Co-Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Pronab Kumar Adhikari, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}

                        {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Workshop Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Pratima Singh, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}

                        {/* <Table >
                        <thead>
                            <th className="noborder">Workshop Co-Chairs</th>
                        </thead>
                        <tbody className="tableNew">


                            <tr>
                                <td>Ms. Jaishree Jain<br />AKGEC, Ghaziabad, India</td>
                                <td>Mr. Pradeep Gupta<br />AKGEC, Ghaziabad, India</td>
                            </tr>


                        </tbody>
                    </Table> */}


                        <Table borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Local Organizing Chair</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Dr. Nishant Kumar Pathak<br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>

                                </tr>

                            </tbody>
                        </Table>
                        {/* <Table >
                        <thead>
                            <th className="noborder">Local Organizing Co-Chairs</th>
                        </thead>
                        <tbody className="tableNew">


                            <tr>
                                <td>Ms. Nishu Bansal<br />AKGEC, Ghaziabad, India</td>
                                <td>Ms. Shiva Tyagi<br />AKGEC, Ghaziabad, India</td>
                            </tr>


                        </tbody>
                    </Table> */}

                        <Table id='1' borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th className="noborder">Conference Secretaries</th>
                                </tr>
                                <tr>
                                    <td className="tdborder">Mr. Pradeep Gupta <br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="tdborder">Mr. Sandeep Yadav <br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="tdborder">Ms. Amrita Bhatnagar<br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="tdborder">Mr. Sachin Jain<br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="tdborder">Ms. Rekha Baghel<br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="tdborder">Mr. Vikas<br /> Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                            </tbody>
                        </Table>


                        {/* <Table>
                        <thead>
                            <th>Editorial Chair </th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Sunita Yadav<br />AKGEC, Ghaziabad, India</td>
                                <td>Dr. Dilip Sharma<br />GLA University, Mathura, India</td>
                                <td>Dr. Rajesh Prasad<br />AKGEC, Ghaziabad, India</td>
                            </tr>
                            <tr>
                                <td>Dr. Sonam Gupta<br />AKGEC, Ghaziabad, India</td>
                                <td>Dr. Charu Agarwal<br />AKGEC, Ghaziabad, India</td>
                                <td></td>
                            </tr>
                        </tbody>

                    </Table> */}

                        {/* <Table>
                        <thead>
                            <th> &nbsp;Track Chair </th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Pratima Singh<br />Department of CSE. AKGEC, Ghaziabad</td>
                                <td>Mr. Akhilesh Verma<br />Department of CSE. AKGEC, Ghaziabad</td>
                                <td>Mr. Anuj Kumar Dwivedi<br />Department of CSE. AKGEC, Ghaziabad</td>
                            </tr>
                        </tbody>
                    </Table> */}



                        {/* honorary */}
                        <Table id='2' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Advisory Committee</th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Prabhakar Tiwari</td>
                                    <td className="afftd">Chair, Conference Committee, IEEE UP Section, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Prof. Asheesh Kumar</td>
                                    <td className="afftd">Mentor, Conference Committee, IEEE UP Section, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Dr. Dilip Sharma</td>
                                    <td className="afftd">GLA University, Mathura, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Dr. Daniel Okunbor</td>
                                    <td className="afftd">Fayetteville Stare University, North Carolina</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Dr. Shyam Nair</td>
                                    <td className="afftd">National Commission on Higher Education Liberia</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Dr. Bhimsingh Bohara</td>
                                    <td className="afftd">BlueCrest Ghana</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Dr. Shyam Nair</td>
                                    <td className="afftd">BlueCrest University Liberia</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">8</td>
                                    <td className="nametd">Dr. Alessio</td>
                                    <td className="afftd">Università del Piemonte Orientale</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">9</td>
                                    <td className="nametd">Dr. Vibhash Yadav</td>
                                    <td className="afftd">Rajkiya Engineering College, Banda, UP, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">10</td>
                                    <td className="nametd">Dr. Amos David</td>
                                    <td className="afftd">Lorraine University, France</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">11</td>
                                    <td className="nametd">Dr. Ashish Khare</td>
                                    <td className="afftd">University of Allahabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">12</td>
                                    <td className="nametd">Dr. Suneeta Agarwal</td>
                                    <td className="afftd">Moti Lal Nehru National Institute of Technology Allahabad, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">13</td>
                                    <td className="nametd">Prof. Phool Singh</td>
                                    <td className="afftd">Central University of Haryana, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">14</td>
                                    <td className="nametd">Dr. Rung-Ching Chen</td>
                                    <td className="afftd">Chaoyang University of Technology, Taiwan</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">15</td>
                                    <td className="nametd">Dr. Chuan-Ming Liu</td>
                                    <td className="afftd">National Taipei University of Technology, Taiwan</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">16</td>
                                    <td className="nametd">Dr. Mridul Kumar Gupta</td>
                                    <td className="afftd">Chaudhary Charan Singh University, Meerut, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">17</td>
                                    <td className="nametd">Dr. Supriya P. Panda</td>
                                    <td className="afftd">Manav Rachna International Institute of Research and Studies, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">18</td>
                                    <td className="nametd">Dr. Parvinder Singh</td>
                                    <td className="afftd">Deenbandhu Chhotu Ram University of Science and Technology Murthal, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">19</td>
                                    <td className="nametd">Dr. Om Prakash Sangwan</td>
                                    <td className="afftd">Guru Jambheshwar University of Science & Technology, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">20</td>
                                    <td className="nametd">Dr. Prabha Sharma</td>
                                    <td className="afftd">The North Cap University, Sector 23, Gurugram, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">21</td>
                                    <td className="nametd">Prof. P. K. Kapur</td>
                                    <td className="afftd">Amity Center for Interdisciplinary Research, Amity University, Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">22</td>
                                    <td className="nametd">Dr. Ali Kashif Bashir</td>
                                    <td className="afftd">Manchester Metropolitan University, UK</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">23</td>
                                    <td className="nametd">Dr. Moroz Miroslaw</td>
                                    <td className="afftd">Wroclaw University of Economics and Business, Poland</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">24</td>
                                    <td className="nametd">Prof. Lehel Csató</td>
                                    <td className="afftd">Babeș-Bolyai University of Cluj-Napoca, Romania</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">25</td>
                                    <td className="nametd">Dr. Anil Bansal</td>
                                    <td className="afftd">Director, Digital Engineering, LTIMindtree, Bengaluru, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">26</td>
                                    <td className="nametd">Dr. Naresh Kumar</td>
                                    <td className="afftd">G L Bajaj Institute of Technology and Management, Greater Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">27</td>
                                    <td className="nametd">Mr. Arun Kumar</td>
                                    <td className="afftd">Senior Manager, Ciena India Pvt Ltd, Plot No. 14, Sec-32, Gurgaon, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">28</td>
                                    <td className="nametd">Ms. Ruchi Kansal</td>
                                    <td className="afftd">Managing Director, Accenture, Tower C, 1st, DLF Phase 2, Sector 25, Gurugram, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">29</td>
                                    <td className="nametd">Prof. Ashish Seth</td>
                                    <td className="afftd">Inha University in Tashkent</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">30</td>
                                    <td className="nametd">Prof. Deepak Garg</td>
                                    <td className="afftd">Bennett University, Greater Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">31</td>
                                    <td className="nametd">Prof. Satendra Sharma</td>
                                    <td className="afftd">Yobe State University Damaturu Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">32</td>
                                    <td className="nametd">Dr. Jyotsna Singh</td>
                                    <td className="afftd">Chairperson, Computer Engineering, STME NMIMS Chandigarh, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">33</td>
                                    <td className="nametd">Prof. Divakar Yadav</td>
                                    <td className="afftd">Indira Gandhi National Open University, New Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">34</td>
                                    <td className="nametd">Mr. Ravi Parkash Jangra</td>
                                    <td className="afftd">Senior Director Product Development, Oracle India Pvt Ltd Bangalore, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">35</td>
                                    <td className="nametd">Prof. Vijay Vir Singh</td>
                                    <td className="afftd">Yusuf Maitama Sule University, Kano, Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">36</td>
                                    <td className="nametd">Dr. Ekpe Okorafor</td>
                                    <td className="afftd">African University of Science and Technology, Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">37</td>
                                    <td className="nametd">Dr. Ravindra Nath</td>
                                    <td className="afftd">CSJM University Kanpur, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">38</td>
                                    <td className="nametd">Prof. Amit Agarwal</td>
                                    <td className="afftd">Manchester Metropolitan University, UK, Dr. APJ Abdul Kalam Institute of Technology, Tanakpur</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">39</td>
                                    <td className="nametd">Dr. Arun Sharma</td>
                                    <td className="afftd">Indira Gandhi Delhi Technical University for Women, Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">40</td>
                                    <td className="nametd">Prof. Sanjay Misra</td>
                                    <td className="afftd">Ostfold University, Norway</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">41</td>
                                    <td className="nametd">Dr. M P Mishra</td>
                                    <td className="afftd">SOCIS IGNOU New Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">42</td>
                                    <td className="nametd">Dr. Rakesh Kumar</td>
                                    <td className="afftd">Madan Mohan Malaviya University of Technology Gorakhpur UP, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">43</td>
                                    <td className="nametd">Dr. Virender Ranga</td>
                                    <td className="afftd">Department of Information Technology, Delhi Technological University, Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">44</td>
                                    <td className="nametd">Dr. Sanjay Kumar Sharma</td>
                                    <td className="afftd">Banasthali Vidyapith, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">45</td>
                                    <td className="nametd">Prof. Vincenzo Piuri</td>
                                    <td className="afftd">University of Milan, Italy</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">46</td>
                                    <td className="nametd">Prof. Zhongfei (Mark) Zhang</td>
                                    <td className="afftd">Binghamton University, USA</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Organising Committee */}
                        <Table id='3' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Organizing Committee</th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Nilesh Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Dr. Rahul Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Dr. B.K. Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Dr. Pallab Biswas</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Prof. I. P. Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Prof. S. L. Kapoor</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Air Cmde. P. Singh</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">8</td>
                                    <td className="nametd">Dr. Shashank Sahu</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">9</td>
                                    <td className="nametd">Dr. Avdhesh Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">10</td>
                                    <td className="nametd">Dr. Ayushi Prakash</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">11</td>
                                    <td className="nametd">Dr. Anupama Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">12</td>
                                    <td className="nametd">Dr. Sunil Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">13</td>
                                    <td className="nametd">Dr. Santosh Kumar Upadhyay</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">14</td>
                                    <td className="nametd">Dr. Sonam Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">15</td>
                                    <td className="nametd">Dr. Jaishree Jain</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">16</td>
                                    <td className="nametd">Dr. Rakesh Kumar Yadav</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">17</td>
                                    <td className="nametd">Dr. Anuradha Taluja</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">18</td>
                                    <td className="nametd">Dr. Nishant Kumar Pathak</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>


                            </tbody>
                        </Table>

                        {/* honorary tech*/}
                        <Table id='4' borderless className="mb-5 borderbtm">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Technical Program Committee</th>
                                </tr>

                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Shashi Bhushan</td>
                                    <td className="afftd">Amity University Punjab, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Dr. Manoj Kumar</td>
                                    <td className="afftd">University of Wollongong in Dubai, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Dr. Sujith Jayaprakash</td>
                                    <td className="afftd">BlueCrest University College, Ghana, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Dr. Suman</td>
                                    <td className="afftd">Bhagwan Parshuram Institute of Technology, Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Dr. Abhilasha Singh</td>
                                    <td className="afftd">SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Dr. Bhawna Suri</td>
                                    <td className="afftd">Bhagwan Parshuram Institute of Technology, Delhi</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Dr. Sherin Zafar</td>
                                    <td className="afftd">Jamia Hamdard, Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">8</td>
                                    <td className="nametd">Prof(Dr). Laxmi Ahuja</td>
                                    <td className="afftd">Amity University, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">9</td>
                                    <td className="nametd">Dr. Praveen Kumar</td>
                                    <td className="afftd">Amity University Tashkent Uzbekistan</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">10</td>
                                    <td className="nametd">Dr. Seema Rawat</td>
                                    <td className="afftd">Amity University Tashkent, Uzbekistan</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">11</td>
                                    <td className="nametd">Dr. Rana Majumdar</td>
                                    <td className="afftd">Sister Nivedita University, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">12</td>
                                    <td className="nametd">Dr. Francisca Nonyelum</td>
                                    <td className="afftd">Ogwueleka University of Abuja, Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">13</td>
                                    <td className="nametd">Dr. Olumide Owolabi</td>
                                    <td className="afftd">University of Abuja, Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">14</td>
                                    <td className="nametd">Dr. Kirti Seth</td>
                                    <td className="afftd">Inha University Tashkent</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">15</td>
                                    <td className="nametd">Dr. Sanjeev Kumar</td>
                                    <td className="afftd">United University, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">16</td>
                                    <td className="nametd">Dr. Suleiman Salihu Jauro</td>
                                    <td className="afftd">Gombe State University Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">17</td>
                                    <td className="nametd">Dr. Valentina Emilia Balas</td>
                                    <td className="afftd">Aurel Vlaicu University of Arad, Romania</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">18</td>
                                    <td className="nametd">Dr. Utkarsh Goel</td>
                                    <td className="afftd">IIIT Allahabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">19</td>
                                    <td className="nametd">Dr. Abhay Kumar Agarwal</td>
                                    <td className="afftd">Kamla Nehru Institute of Technology, Sultanpur</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">20</td>
                                    <td className="nametd">Dr. Hashim Ibrahim Bisallah</td>
                                    <td className="afftd">Kampala International University, Uganda</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">21</td>
                                    <td className="nametd">Dr. Sandeep Singh</td>
                                    <td className="afftd">Dept. of CSE, The North Cap University, Gurugram</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">22</td>
                                    <td className="nametd">Dr. Vikash Yadav</td>
                                    <td className="afftd">Board of Technical Education, Uttar Pradesh, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">23</td>
                                    <td className="nametd">Dr. Alhassan Adamu</td>
                                    <td className="afftd">Kano University of Science and Technology, Wudil</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">24</td>
                                    <td className="nametd">Dr. Gurseen Rakhra</td>
                                    <td className="afftd">Manav Rachna International Institute of Research and Studies, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">25</td>
                                    <td className="nametd">Dr. H. M. Singh</td>
                                    <td className="afftd">SHUATS, Prayagraj, Uttar Pradesh</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">26</td>
                                    <td className="nametd">Dr. Sunil Kumar</td>
                                    <td className="afftd">Manipal University Jaipur</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">27</td>
                                    <td className="nametd">Dr. Benatiallah Ali</td>
                                    <td className="afftd">Laboratory Leesi Adrar University, Algeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">28</td>
                                    <td className="nametd">Dr. Bireshwar Dass Mazumdar</td>
                                    <td className="afftd">United University Prayagraj</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">29</td>
                                    <td className="nametd">Dr. Radha Raman Chandan</td>
                                    <td className="afftd">School of Management Sciences(SMS), Varanasi</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">30</td>
                                    <td className="nametd">Dr. Manmohan Mishra</td>
                                    <td className="afftd">United Institute of Management, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">31</td>
                                    <td className="nametd">Dr. Praveen Kumar Shukla</td>
                                    <td className="afftd">Department of Computer Science & Engineering, Babu Banarasi Das University, Lucknow, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">32</td>
                                    <td className="nametd">Dr. Muhammed Kabir Ahmed</td>
                                    <td className="afftd">Department of Computer Science Gombe State University, Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">33</td>
                                    <td className="nametd">Dr. Yogesh Kumar Gupta</td>
                                    <td className="afftd">Banasthali Vidyapith, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">34</td>
                                    <td className="nametd">Dr. Neeraj Chugh</td>
                                    <td className="afftd">University of Petroleum and Energy Studies, Dehradun, Uttarakhand, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">35</td>
                                    <td className="nametd">Dr. Arun Kumar Yadav</td>
                                    <td className="afftd">NIT Hamirpur, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">36</td>
                                    <td className="nametd">Dr. Chintan Kr Mandal</td>
                                    <td className="afftd">Jadavpur University, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">37</td>
                                    <td className="nametd">Dr. Dac-Nhuong Le</td>
                                    <td className="afftd">Haiphong University, Vietnam</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">38</td>
                                    <td className="nametd">Dr. Piyush Mahendru</td>
                                    <td className="afftd">Manav Rachna University, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">39</td>
                                    <td className="nametd">Dr. Audu Musa Mabu</td>
                                    <td className="afftd">Yobe State University, Damaturu. Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">40</td>
                                    <td className="nametd">Dr. P. Raghu Vamsi</td>
                                    <td className="afftd">Jaypee Institute of Information Technology, Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">41</td>
                                    <td className="nametd">Dr. Mustapha Ismail</td>
                                    <td className="afftd">Gombe State University, Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">42</td>
                                    <td className="nametd">Dr. Obunadike Georgina</td>
                                    <td className="afftd">Nkolika Federal University Dutsinma, Katsina State Nigeria</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">43</td>
                                    <td className="nametd">Dr. Gaurav Khanna</td>
                                    <td className="afftd">Jaypee Institute of Information Technology, Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">44</td>
                                    <td className="nametd">Dr. Rajesh Kumar</td>
                                    <td className="afftd">University of Allahabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">45</td>
                                    <td className="nametd">Dr. Arjun Singh</td>
                                    <td className="afftd">Manipal University Jaipur, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">46</td>
                                    <td className="nametd">Dr. Sunita Tiwari</td>
                                    <td className="afftd">G B Pant DSEU Okhla-1 Campus, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">47</td>
                                    <td className="nametd">Dr. Ashutosh Kumar Tripathi</td>
                                    <td className="afftd">United University, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">48</td>
                                    <td className="nametd">Dr. B D Mazumdar</td>
                                    <td className="afftd">United University, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">49</td>
                                    <td className="nametd">Dr. Prashant Shukla</td>
                                    <td className="afftd">United University, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">50</td>
                                    <td className="nametd">Dr. Manoj Kumar Pal</td>
                                    <td className="afftd">United University, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">51</td>
                                    <td className="nametd">Dr.Shadab Irfan</td>
                                    <td className="afftd">United University, Prayagraj, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">52</td>
                                    <td className="nametd">Dr. Mukund Pratap Singh</td>
                                    <td className="afftd">Bennett University, Greater Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">53</td>
                                    <td className="nametd">Dr. Naveen Kumar</td>
                                    <td className="afftd">Thapar University, Punjab, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">54</td>
                                    <td className="nametd">Dr. Rahul Bhandari</td>
                                    <td className="afftd">Chandigarh University, Punjab, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">55</td>
                                    <td className="nametd">Dr. Shabir Ali</td>
                                    <td className="afftd">Bharati Vidyapeeth Deemed to be University, Department of Engineering and Technology Navi, Mumbai, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">56</td>
                                    <td className="nametd">Dr. Tribhuvan Singh</td>
                                    <td className="afftd">Siksha O Anusandhan (Deemed to be University), Bhubaneswar, Odisha, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">57</td>
                                    <td className="nametd">Dr. Rakesh Ahuja</td>
                                    <td className="afftd">Chitkara University, Punjab, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">58</td>
                                    <td className="nametd">Dr. Rashmi Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">59</td>
                                    <td className="nametd">Dr. Vijendra Pratap Singh</td>
                                    <td className="afftd">Mahatma Gandhi Kashi Vidyapith, Varanasi, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">60</td>
                                    <td className="nametd">Dr. Rajwant Singh Rao</td>
                                    <td className="afftd">Guru Ghasidas Vishwavidyalaya Bilaspur Chhattisgarh, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">61</td>
                                    <td className="nametd">Dr. Rohit Kumar Sachan</td>
                                    <td className="afftd">Bennett University Greater Noida, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">62</td>
                                    <td className="nametd">Dr. Aditya Pratap Singh</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">63</td>
                                    <td className="nametd">Dr. Ruchi Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">64</td>
                                    <td className="nametd">Dr. Ashish Kumar Mishra</td>
                                    <td className="afftd">Rajkiya Engineering College Ambedkar Nagar Uttar Pradesh India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">65</td>
                                    <td className="nametd">Dr. Rashmi Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">66</td>
                                    <td className="nametd">Dr. Shivendu Mishra</td>
                                    <td className="afftd">Rajkiya Engineering College Ambedkar Nagar, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">67</td>
                                    <td className="nametd">Dr. Prince Rajpoot</td>
                                    <td className="afftd">Rajkiya Engineering College Ambedkar Nagar, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">68</td>
                                    <td className="nametd">Dr. Shivani Agarwal</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">69</td>
                                    <td className="nametd">Dr. Nandita Goel</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">70</td>
                                    <td className="nametd">Dr. Saroj Bala</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        <h1 className="text-blue-800 text-2xl mb-4">Sub-Committees</h1>

                        {/* Registration Committee */}
                        <Table id='5' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Registration Committee</th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Ms. Juli Yadav</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Ms. Shiva Tyagi</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Ms. Ritu Sharma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Atul Kumar Singh</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Mr. Samender Singh</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* Publication Committee */}
                        <Table id='6' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Publication Committee</th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Anu Chaudhary</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Dr. Rajesh Prasad</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Dr. Sonam Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Dr. Ayushi Prakash</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* Cultural Committee */}
                        <Table id='7' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Cultural Committee</th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Mr. Ashish Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Ms. Gunjan Saxena</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Ms. Neeti Pahuja</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Ms. Swati Tomar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Ms. Bhumica</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Mr. Mayank Trivedi</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Students Volunteers</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Transportation, Accommodation & Hospitality Committee  */}
                        <Table id='8' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Transportation, Accommodation & Hospitality Committee </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Mr. Vishal Jayaswal</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Mr. Anuj Panwar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Mr. Vishal Choudhary</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Ashish Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Mr. Hemant Pathak</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Students Volunteers</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Reception, Decoration & Stage Management Committee   */}
                        <Table id='9' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Reception, Decoration & Stage Management Committee  </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Ms. Kamna Singh</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Ms. Ankita Rani</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Ms. Swati Tomar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Ms. Hina Singh</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Ms. Harnit Saini</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Mr. Manoj Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Mr. Sharmaji</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">8</td>
                                    <td className="nametd">Mr. Surendra Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">9</td>
                                    <td className="nametd">Ms. Veenu Kathpalia</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                                <tr>
                                    <td className="snowidth text-center">10</td>
                                    <td className="nametd">Students Volunteers</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* Technical Sessions Committee */}
                        <Table id='10' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Technical Sessions Committee  </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Shashank Sahu</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Dr. Avdhesh Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Dr. Ayushi Prakash</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Dr. Sonam Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Dr. Santosh Kumar Upadhyay</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Dr. Akhilesh Verma</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Dr. Anuradha Taluja</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">8</td>
                                    <td className="nametd">Dr. Jaishree Jain</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">9</td>
                                    <td className="nametd">Dr. Rakesh Kr. Yadav</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">10</td>
                                    <td className="nametd">Dr. Nishant Pathak</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">11</td>
                                    <td className="nametd">Students Volunteers</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Finance & Audit Committee */}
                        <Table id='11' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Finance & Audit Committee  </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Avdhesh Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Mr. Manish Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Ms. Joohi Khanna</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Vishal Goel</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Food Committee */}
                        <Table id='12' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Food Committee  </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Mr. B.N Pandey</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Mr. Arvind Gautam</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Mr. Sandeep Yadav</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Anuj Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Mr. Manish Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Mr. Ravi Dutt</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Advertising, Publicity & Sponsorship Committee */}
                        <Table id='13' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Advertising, Publicity & Sponsorship Committee  </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Dr. Ayushi Prakash</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Ms. Rekha Baghel</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Mr. Amit Goel</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Shravan Kumar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Press Publicity & Media Management Committee */}
                        <Table borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2"> Press Publicity & Media Management Committee </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Ms. Neerja Arora</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Ms. Amrita Tiwari</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Mr. Mradul Kr. Jain</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Pushkal Kr. Shukla</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Mr. Ashish Dixit</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Mr. Yogendra Narayan</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Videography & Photography Committee  */}
                        <Table borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2"> Videography & Photography Committee  </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Mr. B.N.Pandey</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Mr. Pronab Kr. Adhikari</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Students Volunteers</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>

                        {/* Website Management Committee */}
                        <Table id='14' borderless className="mb-5 borderbtm" responsive="md">
                            <tbody>
                                <tr>
                                    <th colSpan="2"> Website Management Committee </th>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">1</td>
                                    <td className="nametd">Mr. Pradeep Gupta</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">2</td>
                                    <td className="nametd">Mr. Sandeep Yadav</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">3</td>
                                    <td className="nametd">Ms. Amrita Bhatnagar</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">4</td>
                                    <td className="nametd">Mr. Sachin Jain</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">5</td>
                                    <td className="nametd">Ms. Rekha Baghel</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">6</td>
                                    <td className="nametd">Mr. Vikas</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>
                                <tr>
                                    <td className="snowidth text-center">7</td>
                                    <td className="nametd">Students Volunteers</td>
                                    <td className="afftd">Ajay Kumar Garg Engineering College, Ghaziabad, India</td>
                                </tr>

                            </tbody>
                        </Table>
                        {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th>Organizing Committee</th>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Ritesh Sharma</td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                        {/* <tr>
            <td className="tdborder">Mr. Atul Sood</td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                        {/* <tr>
                                <td className="tdborder">Ms. Nidhi Maurya </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Ms. Nav Jyoti Sharma </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Gaurav Srivastava </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                        {/* <tr>
            <td className="tdborder">Mr. Parveen Kumar Dhull</td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                        {/* <tr>
            <td className="tdborder">Mr. Deepak Narang </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Rahul Dixit </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Ankit Dixit </td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                        {/* <tr>
                                <td className="tdborder">Ms. Nupur Mittal</td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Mahesh Sharma </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                        {/* <tr>
            <td className="tdborder">Ms. Anubha Gupta</td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}
                        {/* 
                            <tr>
                                <td className="tdborder">Mr. Mahendra Dutt Dwivedi </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                        {/* <tr>
            <td className="tdborder">Mr. Neeraj Gupta </td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                        {/* <tr>
                                <td className="tdborder">Mr. Harsh Mohan Sharma </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Shani Kumar  </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                        {/* <tr>
            <td className="tdborder">Mr. Ritesh Yadav </td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                        {/* </tbody>
                    </Table> */}

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Committee;