import React from 'react'
import SideList from "./SideList"
import Call from "./call"
import "bootstrap/dist/css/bootstrap.min.css"; 
import Footer from './footer';
const Theme = () => {
  return (
    <>
         <div id="theme" className="target flex">
         
         <SideList/>
            <div className=" ml-[18rem]" >
            <Call/>
              <h1 id='1' className="mb-3 text-blue-600">Track Details :-</h1>
    
              <h5 className="font-[500]  text-2xl text-[#000] text-center underline">Track 1: Advances in Machine Learning and Deep Learning</h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                  
                    General Machine Learning, Active Machine Learning
                  </li>
                  <li>
                    Fuzzy Learning
                  </li>
                  <li>
                    Kernel Based Learning
                  </li>
                  <li>
                    Genetic Learning
                  </li>
                  <li>
                    Bayesian Estimation Approaches
                  </li>
                  <li>
                    Recurrent Neural Networks
                  </li>
                  <li>
                    Machine Learning over the Cloud
                  </li>
                  <li>
                    Learning Paradigms
                  </li>
                  <li>
                    Clustering, Classification and Regression Methods
                  </li>
                  <li>
                    Supervised, Semi-Supervised and Unsupervised Learning
                  </li>
                  <li>
                    Dimensionality reduction
                  </li>
                  <li>
                    Reinforcement Learning
                  </li>
                  <li>
                    Optimization Methods
                  </li>
                  <li>
                    Video and Audio Generation and Analytics with Deep Learning
                  </li>
                  <li>
                    Recurrent Neural Networks and its Applications
                  </li>
                  <li>
                    Recommender Systems
                  </li>
                  <li>
                    Bioinformatics and Biomedical Informatics
                  </li>
                  <li>
                    Healthcare and Clinical Decision Support
                  </li>
                  <li>
                    Information Retrieval
                  </li>
                  <li>
                    Natural Language Processing
                  </li>
                  <li>
                    Statistical Learning Theory
                  </li>
                </ul>
              </div>
    
              <h5 id='2' className="font-[500]  text-2xl text-[#000] text-center underline">Track 2: Advances in Data Science</h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                    Mathematical, Probabilistic and Statistical Models and Theories
                  </li>
                  <li>
                    Data Mining , Exploratory Data Analysis and Predictive Modelling
                  </li>
                  <li>
                    Machine Learning Theories, Models and Systems
                  </li>
                  <li>
                    Knowledge Discovery Theories, Models and Systems
                  </li>
                  <li>
                    Manifold and Metric Learning
                  </li>
                  <li>
                    Deep Learning and Deep Analytics
                  </li>
                  <li>
                    Scalable Analysis and Learning
                  </li>
                  <li>
                    Data Pre-Processing, Sampling and Reduction
                  </li>
                  <li>
                    Time Series Analysis, Spectral Analysis and Bivariate Processes
                  </li>
                  <li>
                    Feature Selection, Transformation and Construction
                  </li>
                  <li>
                    Large Scale Optimization
                  </li>
                  <li>
                    High Performance Computing for Data Analytics
                  </li>
                  <li>
                    Architecture, Management and Process for Data Science
                  </li>
                  <li>
                    Data Analytics, and Knowledge Discovery
                  </li>
                  <li>
                    Data Visualization and Dashboards
                  </li>
                  <li>
                    Data Integrity, Matching and Sharing
                  </li>
                  <li>
                    Privacy and Protection Standards and Policies
                  </li>
                  <li>
                    Privacy Preserving Big Data Access/Analytics
                  </li>
                  <li>
                    Social Impact and Social Good
                  </li>
                </ul>
              </div>
    
              <h5 id='3' className="font-[500]  text-2xl text-[#000] text-center underline">Track 3: Applications of Artificial Intelligence in Interdisciplinary areas</h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                    Applications of AI in Manufacturing Industry
                  </li>
                  <li>
                    Applications of AI in preventive maintenance
                  </li>
                  <li>
                    Applications of AI in Insurance and Banking
                  </li>
                  <li>
                    Applications of AI  in Fluid dynamics
                  </li>
                  <li>
                    Applications of AI in  CFD/ CAD/CAM/CAE/FEA/FEM
                  </li>
                  <li>
                    Applications of AI in Language Translation and Transliteration
                  </li>
                  <li>
                    Evolution and Innovation of Transformers for AI Models
                  </li>
                  <li>
                    Applications of AI in Cybersecurity
                  </li>
                  <li>
                    Applications of AI in Robotics and Automation
    
                  </li>
                  <li>
                    Applications of AI in Blockchain
    
                  </li>
                  <li>
                    Applications of AI in Cloud Computing and Cloud Infrastrcuture
    
                  </li>
                  <li>
                    Applications of AI in Precision Agriculture
    
                  </li>
                  <li>
                    Applications of AI in Generation of Music and Art
    
                  </li>
                  <li>
                    Applications of AI in Fashion Design
    
                  </li>
                  <li>
                    Applications of AI in mobility and Autonomous vehicles
    
                  </li>
                  <li>
                    Applications of AI in Healthcare, Medical Industry
    
                  </li>
                  <li>
                    Applications of AI in Smart Cities and Smart Homes
    
                  </li>
                  <li>
                    Applications of AI in Pharmaceutical and Drug Development
    
                  </li>
                  <li>
                    Applications of AI in Bioinformatics, Genomic and DNA Sequencing/profiling
    
                  </li>
                  <li>
                    Applications of AI in High Performance Computing
    
                  </li>
                  <li>
                    Applications of AI in Telecommunications, Signal processing and Wireless Networks
    
                  </li>
                  <li>
                    Applications of AI in Space Research, Planet Exploration, Satellite Research
    
                  </li>
                  <li>
                    Applications of AI in Ocean Research
    
                  </li>
                  <li>
                    Applications of AI in Renewable energy resources, Clean and Green Energy
    
                  </li>
                  <li>
                    Big Data and Deep learning Applications
    
                  </li>
                  <li>
                    Computational intelligence and Optimization
    
                  </li>
                </ul>
              </div>
    
              <h5 id='4' className="font-[500]  text-2xl text-[#000] text-center underline">Track 4: High Performance Computing</h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                    Autonomic Computing
                  </li>
                  <li>
                    Biotechnology
                  </li>
                  <li>
                    Cluster, Cloud and Grid Computing
                  </li>
                  <li>
                    Compiler Technologies for High-Performance Computing
                  </li>
                  <li>
                    Distributed Computing
                  </li>
                  <li>
                    Interconnection Network and Architecture
    
                  </li>
                  <li>
                    Load Balancing, Scheduling and Resource Management
    
                  </li>
                  <li>
                    Nanotechnology
    
                  </li>
                  <li>
                    Operating System for High Performance Computing
    
                  </li>
                  <li>
                    Parallel and Distributed Algorithms/Systems
    
                  </li>
                  <li>
                    Quantum Computing
    
                  </li>
                </ul>
              </div>
    
              <h5 id='5' className="font-[500]  text-2xl text-[#000] text-center underline">Track 5: Advances in Communication and Networks</h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                    Ad-hoc Networks
    
                  </li>
                  <li>
                    Computer Networks
    
                  </li>
                  <li>
                    Cryptography
    
                  </li>
                  <li>
                    Cyber Crime
    
                  </li>
                  <li>
                    Cyber Law & Security
    
                  </li>
                  <li>
                    Ethical Hacking
    
                  </li>
                  <li>
                    Fraud Control
    
                  </li>
                  <li>
                    High Performance Networks
    
                  </li>
                  <li>
                    High Speed Networks
    
                  </li>
                  <li>
                    Information and System Security
    
                  </li>
                  <li>
                    Intellectual Property Right
    
                  </li>
                  <li>
                    Mobile Computing
    
                  </li>
                  <li>
                    Multimedia Signal Processing
    
                  </li>
                  <li>
                    Network Security and Privacy
    
                  </li>
                  <li>
                    Reliable Computing
    
                  </li>
                  <li>
                    RFID Applications
    
                  </li>
                  <li>
                    Software Engineering for Emerging Networks and Systems
    
                  </li>
                  <li>
                    Software Engineering for Mobile Systems
    
                  </li>
                  <li>
                    Trusted Computing
    
                  </li>
                  <li>
                    Wireless Communication
    
                  </li>
                  <li>
                    Wireless Sensor Networks
    
                  </li>
                </ul>
              </div>
    
              <h5 id='6' className="font-[500]  text-2xl text-[#000] text-center underline">Track 6: Advanced Algorithms
              </h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                    Approximation Algorithms
    
                  </li>
                  <li>
                    Bioinformatics Algorithms
    
                  </li>
                  <li>
                    Computational Biology
    
                  </li>
                  <li>
                    Computational Geometry
    
                  </li>
                  <li>
                    Data Compression Algorithm
    
                  </li>
                  <li>
                    Parallel and Distributed Algorithms
    
                  </li>
                  <li>
                    Exponential Algorithm
    
                  </li>
                  <li>
                    External-Memory Algorithms
    
                  </li>
                  <li>
                    Game Theory
    
                  </li>
                  <li>
                    Graph Algorithms
    
                  </li>
                  <li>Network Algorithms
    
                  </li>
                  <li>
                    On-line Algorithms
    
                  </li>
                  <li>
                    Optimization Algorithms
    
                  </li>
                  <li>
                    Parallel Algorithms
    
                  </li>
                  <li>Parameterized Algorithms
    
                  </li>
                  <li>
                    Pattern Matching Algorithm
    
                  </li>
                  <li>
                    Randomized Algorithms
    
                  </li>
                  <li>
                    Streaming Algorithms
    
                  </li>
                  <li>
                    String Algorithms
    
                  </li>
                </ul>
              </div>
    
    
              <h5 id='7'
              className="extra-bold-text mt-4">Track 7: Teaching & Learning Systems
              </h5>
              <div className="text-lg text-gray-700 ">
                <ul>
                  <li>
                    Academic Staff/Faculty Development
    
                  </li>
                  <li>
                    Accreditation and Quality Assurance
    
                  </li>
                  <li>
                    Active Learning
    
                  </li>
                  <li>
                    Assessment and Evaluation
    
                  </li>
                  <li>
                    Computer-Based Learning and Courseware Technologies
    
                  </li>
                  <li>
                    E-assessment
    
                  </li>
                  <li>
                    E-learning in the Workplace
    
                  </li>
                  <li>
                    Ethical and Social Justice Issues
    
                  </li>
                  <li>
                    Generic Skills (e.g., Communications, Teamwork)
    
                  </li>
                  <li>
                    Industry Linkages and Partnerships
    
                  </li>
                  <li>Infrastructure and Technology for Engineering Education
    
                  </li>
                  <li>
                    Interdisciplinary Teaching Approaches
    
                  </li>
                  <li>
                    Introductory Engineering and Computing Courses
    
                  </li>
                  <li>
                    Learning Management Systems
    
                  </li>
                  <li>
                    Learning Models
    
                  </li>
                  <li>
                    Mobile Learning
    
                  </li>
                  <li>
                    Service Learning
    
                  </li>
                  <li>
                    Technology Enhanced Learning for students with special needs
    
                  </li>
                </ul>
              </div>
            </div>
          </div>
     
    </>
   
  )
}

export default Theme
