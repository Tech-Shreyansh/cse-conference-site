"use client";
import React from 'react'
import Theme from "../../components/theme.jsx"
import Footer from "../../components/footer.jsx"
import Header from '../../components/Header/Header.js'
import Main from '../../components/Committee/Committee.js'
const page = () => {
  return (
    <>
    <Header active='committee'/>
<Main/>
<Footer/>
</>
  )
}
export default page
