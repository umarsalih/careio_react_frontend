import React from 'react'
import "./../../styles/style.css";
import "./../../styles/layout-signup.css";

function SignupForm() {
    return (
            <div
                class="signupForm col-12 col-sm-12  col-md-8 col-lg-6 order-sm-1 order-md-2">
                <form action=''>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true">Signup as a Client</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false">Signup as a Service Partner</button>
                        </li>
                    </ul>
                    <div className='tab-content' id='myTabContent'>
                        <div
                            className="tab-pane fade show active"
                            id='home'
                            role="tabpanel"
                            aria-labelledby='home-tab'>
                            <div className='formElementContainer'>
                                <input type="text" placeholder="First name"/>

                                <input type="text" placeholder="Last name"/>

                                <input type="text" placeholder="Email"/>

                                <input type="text" placeholder="Mobile Number"/>

                                <input id="inputAddress" type="text" placeholder="Street Address"/>

                                <input type="text" placeholder="City"/>

                                <input type="text" placeholder="Province"/>

                                <button id="signupFreeBtn" type="">Sign up FREE</button>
                                <button id="signupPremiumBtn" type="">Sign up Premium</button>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab">

                            <div className="formElementsContainer">
                                <input type="text" placeholder="First name"/>

                                <input type="text" placeholder="Last name"/>

                                <input type="text" placeholder="Email"/>

                                <input type="text" placeholder="Mobile Number"/>

                                <input id="inputAddress" type="text" placeholder="Street Address"/>

                                <input type="text" placeholder="City"/>

                                <input type="text" placeholder="Province"/>

                                <button id="signupFreeBtn" type="">Sign up FREE</button>
                                <button id="signupPremiumBtn" type="">Sign up Premium</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default SignupForm