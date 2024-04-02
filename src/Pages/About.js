import React from 'react';
import NavBar from '../comp/Navbar';
import AboutImg from '../comp/AboutImg';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div style={{ marginTop: '60px' }}> {/* Adjust the margin top to fit your Navbar height */}
        <AboutImg />
      </div>
    </div>
  );
};

export default About;
