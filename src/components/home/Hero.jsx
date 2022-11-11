import React, { useState, useEffect, Fragment} from 'react';
const Hero = () => {
  return (
    <Fragment>
        <div className="r-banner">
            <div className="header-img">
                Logo here
            </div>
            <div className="bg-text">
                <h1>We care. Metro Vancouver’s <br/>Home Service Finder</h1>
                <a href="/" className="btn btn-primary">
                    Sign Up
                </a>
                <a href="/" className="btn btn-outline-primary">
                    Go Premium
                </a>
            </div>
        </div>

    </Fragment>
    
  )
}
export default Hero;