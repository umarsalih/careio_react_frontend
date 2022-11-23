import React from 'react'
// import "./../../styles/style.css";
// import "./../../styles/layout-signup.css";
import SignupInfo from './Signup-info';
import SignupForm from './Signup-form';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../store/login-store';
import { Link } from 'react-router-dom'

function Signup() {
    const isLogged = useSelector(isLoggedIn);
    return (
        <div id="CareIOSignup">
            <div className='careio_superwrapper'>
                <section id="container-01" className="section-full">
                    <div className='row'>
                        <SignupInfo/>
                        <SignupForm/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup