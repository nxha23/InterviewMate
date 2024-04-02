import React from 'react';
import Navbar from '../comp/Navbar';
import Business_Layout from '../comp/Buisness_Layout';

const BusinessPlan = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ marginTop: '60px' }}> {/* Adjust the margin top to fit your Navbar height */}
        <Business_Layout />
      </div>
    </div>
  );
};

export default BusinessPlan;
