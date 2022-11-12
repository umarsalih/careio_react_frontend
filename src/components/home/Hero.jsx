import React, { useState, useEffect, Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, toggleLogin, setLogin } from '../../store/login-store';
import { Link } from 'react-router-dom'

const Hero = () => {
    const isLogged = useSelector(isLoggedIn);
    const dispatch = useDispatch()
  return (
    <Fragment>
        <div className="care-hero">
            <div className="care-hero__inner">
                <div className="container">
                    <div className='row p-5'>
                        <div className="header-img">
                            <div className='logo__holder'>
                            <img className='logo' src={require(`./../../images/brand/care-logo-white.png`)} alt="care.io"/>
                            </div>
                            
                        </div>
                        <div className="bg-text">
                            <h1>We care. Metro Vancouver’s <br/>Home Service Finder</h1>
                            
                            {
                                !isLogged ?  (
                                    <div>
                                        <Link to="/signup" className="btn btn-primary">
                                            Sign Up
                                        </Link>
                                        &nbsp;
                                        <button type="button" 
                                            className="btn btn-primary" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#loginModal">
                                            Log In
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <button type="button" 
                                            className="btn btn-primary" 
                                            data-bs-toggle="modal" 
                                            onClick={() => dispatch(setLogin(false))}
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>
    
  )
}
export default Hero;