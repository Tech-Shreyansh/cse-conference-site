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
                <h1 className="text-blue-800 text-4xl mb-4">Registration Fees</h1>
                <Table className="borderbtm">
                <tbody>
    <tr>
        <th className="border border-black">S/N</th>
        <th className="border border-black">Category</th>
        <th className="border border-black">Amount</th>
    </tr>
    <tr>
        <td className="border border-black">1</td>
        <td className="border border-black">Non-IEEE Professional</td>
        <td className="border border-black">INR 5000</td>
    </tr>
    <tr>
        <td className="border border-black">2</td>
        <td className="border border-black">IEEE Professional Members</td>
        <td className="border border-black">INR 4000</td>
    </tr>
    <tr>
        <td className="border border-black">3</td>
        <td className="border border-black">Non-IEEE Students</td>
        <td className="border border-black">INR 4000</td>
    </tr>
    <tr>
        <td className="border border-black">4</td>
        <td className="border border-black">IEEE Student Members</td>
        <td className="border border-black">INR 3000</td>
    </tr>
    <tr>
        <td className="border border-black">5</td>
        <td className="border border-black">Industry Participants</td>
        <td className="border border-black">INR 6000</td>
    </tr>
    <tr>
        <td className="border border-black">6</td>
        <td className="border border-black">Non-IEEE Foreign Participants</td>
        <td className="border border-black">$ 200</td>
    </tr>
    <tr>
        <td className="border border-black">7</td>
        <td className="border border-black">IEEE Foreign Participants</td>
        <td className="border border-black">$ 150</td>
    </tr>
</tbody>

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