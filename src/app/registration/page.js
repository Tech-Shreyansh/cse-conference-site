'use client'
import Theme from "../../components/theme.jsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
import React from 'react'
import { Table } from "react-bootstrap";
const page = () => {
    return (

        <div>
            <Header active="registration" />
            <div id="call" className="target mb-5 foothandle">
                <div className="container" >
                    <h1 className="font-extrabold  text-4xl mb-4">Registration Fees</h1>
                    <Table cellPadding={10}>
                        <tr className="bg-blue-400">
                            <th className="border border-black text-center">Indian Authors(INR)</th>
                            <th className="border border-black text-center">IEEE Members(INR)</th>
                            <th className="border border-black text-center">Non IEEE Members(INR)</th>
                        </tr>
                        <tr>
                            <td className="border border-black">Corporate Sectors/Others</td>
                            <td className="border border-black text-right">7000</td>
                            <td className="border border-black text-right">8000</td>
                        </tr>
                        <tr>
                            <td className="border border-black">Academics/Research Scholars</td>
                            <td className="border border-black text-right">6000</td>
                            <td className="border border-black text-right">7000</td>
                        </tr>
                        <tr>
                            <td className="border border-black">UG/PG Scholars</td>
                            <td className="border border-black text-right">4000</td>
                            <td className="border border-black text-right">5000</td>
                        </tr>
                        <tr>
                            <td className="border border-black">Co-Author/Attendee</td>
                            <td className="border border-black text-right">500</td>
                            <td className="border border-black text-right">1000</td>
                        </tr>
                        <tr className="bg-blue-400">
                            <th className="border border-black text-center">Foreign Authors(USD)</th>
                            <th className="border border-black text-center">IEEE Members(USD)</th>
                            <th className="border border-black text-center">Non IEEE Members(USD)</th>
                        </tr>
                        <tr>
                            <td className="border border-black">Corporate Sectors/Others</td>
                            <td className="border border-black text-right">250</td>
                            <td className="border border-black text-right">350</td>
                        </tr>
                        <tr>
                            <td className="border border-black">Academics/Research Scholars</td>
                            <td className="border border-black text-right">200</td>
                            <td className="border border-black text-right">300</td>
                        </tr>
                        <tr>
                            <td className="border border-black">UG/PG Scholars</td>
                            <td className="border border-black text-right">100</td>
                            <td className="border border-black text-right">150</td>
                        </tr>
                        <tr>
                            <td className="border border-black">Co-Author/Attendee</td>
                            <td className="border border-black text-right">75</td>
                            <td className="border border-black text-right">100</td>
                        </tr>
                    </Table>

                </div>
            </div>
            <div className="absolute left-0 right-0">
                <Footer />
            </div>
        </div>
    )
}

export default page