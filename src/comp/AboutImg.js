import React from 'react'
import { Link } from "react-router-dom";
import LeanCanvasPDF from '../images/leancanvas.pdf';
import '../CSS/AboutImgStyle.css'


const AboutImg = () => {
  return (
    <div className='aboutImg'>
        <div className='maskImg'>
            <img className="abt-img" src="../images/img3.png" alt="img3"/>
        </div>
        <div className='content'>
            <h1>About Us.</h1>
            <p>Our company is dedicated to revolutionising the interview preparation experience through innovative technology solutions. At the heart of our operation is a groundbreaking product that leverages Large Language Model (LLM) technology to generate dynamic practice interviews tailored to the specific job requirements provided by users. By harnessing the power of artificial intelligence, we aim to equip individuals with the skills and confidence necessary to excel in their career pursuits.</p>
            <div className='button-container"'>
                <Link to ="/BusinessPlan" className="btn"> Learn More</Link>
                <a href={LeanCanvasPDF} target="_blank" rel="noopener noreferrer" className="btn-light"> Lean Canvas</a>
            </div>
        </div>
    </div>
  )
}

export default AboutImg