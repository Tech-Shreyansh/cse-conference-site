'use client'
import Theme from "../../components/theme.jsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
import React from 'react'
import { Table } from "react-bootstrap";
const page = () => {
    return (
        
        <div>
            <Header active="dates" />
            <div id="call" className="target mb-5 foothandle">
                <div className="container" >
                <h1 className="text-blue-800 text-4xl mb-4">Important Dates</h1>
                <Table className="borderbtm">
      <tbody>
        {/* <tr>
          <td>Paper Submission open </td>
          <td>April 1, 2023</td>
        </tr> */}
        <tr className="noborder">
          <td className="tdborder">Full Paper Submission</td>
          <td className="tdborder"> July 15, 2024 </td>
        </tr>
        <tr className="noborder">
          <td className="tdborder">Acceptance Notification due </td>
          <td className="tdborder"> July 25, 2024 </td>
        </tr>
        {/* <tr>
          <td>Workshop Proposal due </td>
          <td> November 30, 2023 </td>
        </tr>
        <tr>
          <td>Camera Ready Paper due   </td>
          <td>December 31, 2023</td>
        </tr> */}

<tr className="noborder">
          <td className="tdborder">Registration due  </td>
          <td className="tdborder">August 05, 2024</td>
        </tr>

        <tr className="noborder">
          <td className="tdborder">Conference dates </td>
          <td className="tdborder">August 23-24, 2024</td>
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