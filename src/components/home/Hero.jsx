import React, { useState, useEffect, Fragment} from 'react';
const Hero = () => {
  return (
    <Fragment>
        <div className="care-hero">
            <div className="care-hero__inner">
                <div className="container">
                    <div className='row p-5'>
                        <div className="header-img">
                            Logo here
                        </div>
                        <div className="bg-text">
                            <h1>We care. Metro Vancouver’s <br/>Home Service Finder</h1>
                            <a href="/signup" className="btn btn-primary">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>
    
  )
}
export default Hero;