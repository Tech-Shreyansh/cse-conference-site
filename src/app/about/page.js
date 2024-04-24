"use client";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Theme from "../../components/theme.jsx"
import { Carousel } from "react-responsive-carousel";
import "./about.css";
import Footer from "@/src/components/footer";
import Header from "@/src/components/Header/Header.js";

const Page = () => {
  return (
    <>
    <Header active='about'/>
      <Carousel
        itemsToShow={1}
        autoPlay={true}
        centerMode={false}
        emulateTouch={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
      >
        <img src="hero.png" className="carousel-img " alt="about-img" />
        <img src="image2.png" className="carousel-img" alt="about-img" />

        <img src="image11.png" className="carousel-img" alt="about-img" />
        <img src="image1.jpg" className="carousel-img" alt="about-img" />

        <img src="image9.png" className="carousel-img" alt="about-img" />
        <img src="image6.jpg" className="carousel-img" alt="about-img" />

        <img src="image7.png" className="carousel-img" alt="about-img" />
        <img src="image8.png" className="carousel-img" alt="about-img" />
      </Carousel>
      <div id="theme" className="target">
        <div className="container mb-5" >
        <h1 className="font-extrabold  text-4xl mb-3">AKGEC</h1>
          <p>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Uttar Pradesh State Technical University, Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India and is approved by the All India Council for Technical Education (AICTE). The college was established in 1998 and offers B.Tech. courses in nine disciplines of Engineering namely Computer Science and Engineering, Information Technology, Computer Science, Computer Science & Information Technology, Computer Science and Engineering (Artificial Intelligence & Machine Learning), Computer Science and Engineering (Data Science), Computer Science and Engineering (Hindi), Artificial Intelligence & Machine Learning, Electronics and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Civil Engineering. B.Tech. programs in Computer Science and Engineering, Information Technology, Electronics and Communication Engineering, Electrical and Electronics Engineering and Mechanical Engineering are accredited by NBA. At the postgraduate level, the College offers M.Tech. in Electronics & Communication Engineering, Computer Science & Engineering, Electrical and Electronics Engineering and Mechanical Engineering and the Master of Computer Applications course.
            <br></br>
            The college strives for excellence and has been consistently maintaining excellent academic results and placements. The college has the distinction of being the first and only college in UP to receive the Academic Excellence Award for the Best Engineering College in UPTU (now AKTU) from H.E. the Governor of UP for two successive years. It is a matter of pride for the College to maintain a superlative overall academic performance over the years with a large number of students appearing in the University Merit List every year. The College has the honor of being awarded the Chancellor’s Award for highest marks in all B.Tech. courses for five consecutive years in 2015-16, 2016-17, 2017-18, 2018-19 and 2019-20 since its inception in 2016.</p>
        </div>

        <div className="container mb-5" >
        <h1 className="font-extrabold  text-4xl mb-3">About Conference</h1>
          <p>Human tendency has always remained dynamic and has led to various revolutions for mankind. Nineteenth century was the era of machine revolution, twentieth century was the era of electronic revolution but the 21st century is time of Computing and Information Technology (CIT) revolution. The peculiar thing with CIT revolution is that it is globalized while earlier revolutions belonged only to some countries. CIT is touching each and every walk of life. Now every field of life such as industrial, rural development, medical, economical, even social field are looking forward for help from CIT for their survival and growth. <br></br>
            CIT in itself consists of wide range of possibilities which are increasing exponentially day by day. To cope up with increasing global need for high performance, more efficiency, and optimized output; advance computing technologies are the growing research area in the field of CIT. Although various high performance models such as cluster computing, Grid computing and cloud computing have been proposed but these models are still looking for big hands in research. So, Advance Computing has been one of the most promising research areas throughout the globe for some decades now. With this thought in mind, Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh (India) has planned to bring together the Advance Computing research community through 1st IEEE International Conference on Advanced Computing and Emerging Technologies (ACET-2024), 23-24 August, 2024. <br></br>
            ACET-2024 is being organized with the objective of bringing together researchers, developers, and practitioners from academia and industry working in the area of advance computing and technologies. ACET-2024 aims to provide an international and interdisciplinary forum for the Computer Science and Technology research community to explore the frontier of science and technology in advanced computing, emerging technologies, data science, machine learning, deep learning, and intelligent machines. English is the official language of the conference
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
