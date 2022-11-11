import React from 'react'
import "./../../styles/style.css";
import "./../../styles/layout-signup.css";
import SignupInfo from './Signup-info';
import SignupForm from './Signup-form';

function Signup() {
    return (
        <div>
            <body id="CareIOSignup">
                <div className='careio_superwrapper'>

                    <section id="container-01" className="section-full">
                        <div className='row'>
                            <SignupInfo/>
                            <SignupForm/>
                        </div>
                    </section>
                </div>
            </body>
        </div>
    )
}

export default Signup