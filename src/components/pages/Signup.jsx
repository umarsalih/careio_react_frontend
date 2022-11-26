import React from 'react'
// import "./../../styles/style.css";
// import "./../../styles/layout-signup.css";
import SignupForm from '../signup/Signup-form';
import SignupInfo from '../signup/Signup-info';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../store/login-store';
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Signup() {
    const isLogged = useSelector(isLoggedIn);
    const [isClientView, setClientView] = useState(true);

    return (
        <div id="CareIOSignup">
            <div className='careio_superwrapper'>
                <section id="container-01" className="container-fluid" x-class="section-full">
                    <div className='row'>
                        <SignupInfo
                            isClientView={isClientView}
                        />
                        <SignupForm
                            isClientView={isClientView}
                            setClientView={setClientView}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup