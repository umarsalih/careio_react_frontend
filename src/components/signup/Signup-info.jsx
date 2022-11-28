import React from 'react'
// import "./../../styles/style.css";
// import "./../../styles/layout-signup.css";

function SignupInfo(props) {

    const isClientView = props.isClientView;

    if(isClientView == true) {
        return (
            <div
                className="signupInfo col-12 col-sm-12 col-md-4 col-lg-6 order-sm-2 order-md-1">
                <div className='holder' >
                    <div className="signupInfo-headertext">
                        <h1>Sign up as a client <br/>
                            
                            with Care.io</h1>
                    </div>
                    
    
                    <div className="signupInfo-textbox1">
                        <h5 className='signup-subheading'>What you get as a free-tier client?</h5>
                        <p>Allows to browse and find partners that would provide you the service you require, and the service 
                        is still provided as usual.</p>
    
                        <ul>
                            <li>Allows for a maximum of three bookings per month</li>
                        </ul>
                    </div>
    
                    <div className="signupInfo-textbox2">
                        <h5 className='signup-subheading'>Why go
                                premium?</h5>
                                <p>Going premium with Care.io would guarantee a better client experience. Get the most out of 
                                your time and money by subscribing to our premium model made for you.</p>
    
                        <ul>
                            <li>Unlimited bookings.</li>
                            <li>On demand and instant service</li>
                            <li>Worry free and swift service</li>
                        </ul>
                    </div>
                </div>
            </div>
    
        )
    }
    else {
        return (
            <div
                className="signupInfo col-12 col-sm-12 col-md-4 col-lg-6 order-sm-2 order-md-1">
                <div className='holder' >
                    <div className="signupInfo-headertext">
                        <h1>Sign up as a service partner <br/>
                            
                            with Care.io</h1>
                    </div>
                    
    
                    <div className="signupInfo-textbox1">
                        <h5 className='signup-subheading'>What you get as a free-tier service partner?</h5>
                        <p>Using the free tier would still allow for you to be displayed in the partner page and you can market yourself
                        accordingly.</p>
    
                        <ul>
                            <li>Allows to only list one service per partner.</li>
                        </ul>
                    </div>
    
                    <div className="signupInfo-textbox2">
                        <h5 className='signup-subheading'>Why go
                                premium?</h5>
                        <p>The added benefit of our premium package would bring you more opportunity and would allow you to reach
                        out to a larger client market.</p>
    
                        <ul>
                            <li>Allows listing of multiple services.</li>
                            <li>Your profiles would be given priority and will be listed at the top.</li>
                        </ul>
                    </div>
                </div>
            </div>
    
        )
    }
}

export default SignupInfo