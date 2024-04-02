
import React from 'react'
import "../CSS/ImgStyle.css"

const Img = () => {
  return (
    <div className="hero">
      <div className='mask'>
        <img className='into-img' src='../images/img2.png' alt='sa'></img>
      </div>

        <div className="content">
            <h1> Unlock Your Potential with AI-Powered Interview Preparation.</h1>
            <p className="blurb"> Dive into a personalised interview preparation experience that sets you up for success. Our AI-driven platform crafts custom questions and provides targeted feedback, honing your skills for the real deal.</p>
            <p className="cta">Ready to ace your next interview? Start your journey with us today.</p>
        </div>
    </div>
  )
}

export default Img