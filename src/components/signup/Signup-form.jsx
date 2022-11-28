import React, { useState } from 'react'
// import "./../../styles/style.css";
// import "./../../styles/layout-signup.css";

function SignupForm(props) {

    return (
        <div
            class="signupForm col-12 col-sm-12 col-md-8 col-lg-6 order-sm-1 order-md-2">
            <form className='signup-form' action=''>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button onClick={() => props.setClientView(true)}
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
                            onClick={() => props.setClientView(false)}
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
                        aria-labelledby='home-tab'
                    >
                        
                        <div className='formElementsContainer row text-left'>
                            <div className='col-md-6'>
                                <label>Email</label>
                                <input type="text" className='form-control col-md-6' placeholder="Email"/>
                            </div> 
                            <div className='col-md-6'>
                                <label>Password</label>
                                <input type="password" className='form-control col-md-6' placeholder="Email"/>
                            </div>    

                            <hr className='my-3'/>

                            <div className='col-md-6'>
                                <label>First Name</label>
                                <input type="text" className='form-control ' placeholder="First name"/>
                            </div>
                            
                            
                            <div className='col-md-6'>
                                <label>Last Name</label>
                                <input type="text" className='form-control' placeholder="Last name"/>
                            </div>

                            <div className='col-md-6'>
                                <label>Mobile</label>
                                <input 
                                type="text" className='form-control ' placeholder="Mobile Number"
                                />
                            </div>
                            <div className='col-md-6'>&nbsp;</div>

                            <hr className='my-3'/>

                            <div className='col-12'>
                                <label>Street Address</label>
                                <input 
                                    id="inputAddress" 
                                    type="text" 
                                    className='form-control' 
                                    placeholder="Street Address"
                                />
                            </div>

                            <div className='col-md-6'>
                                <label>City</label>
                                <input 
                                    type="text" 
                                    className='form-control' placeholder="City"
                                />
                            </div>

                            <div className='col-md-6'>
                                <label htmlFor="">Province</label>
                                <input type="text" className='form-control' placeholder="Province"/>
                            </div>

                            
                            
                            
                            
                            

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

                            <input type="text" placeholder='Hourly rate'/>

                            <label for="cars">Start hours:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">7am</option>
                                <option value="saab">8am</option>
                                <option value="volvo">9am</option>
                                <option value="saab">10am</option>
                                <option value="volvo">11am</option>
                                <option value="saab">12am</option>
                            </select>

                            <label for="cars">End hours:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">7am</option>
                                <option value="saab">8am</option>
                                <option value="volvo">9am</option>
                                <option value="saab">10am</option>
                                <option value="volvo">11am</option>
                                <option value="saab">12am</option>
                            </select>

                            <div className='formElementsContainer-servicesList'>
                                <input
                                    type="checkbox"
                                    id='serviceCarpentry'
                                    name='serviceCarpentry'
                                    value='Carpentry'/>
                                <label for="serviceCarpentry">Carpentry</label>

                                <input
                                    type="checkbox"
                                    id='serviceLawn'
                                    name='serviceLawn'
                                    value='Lawn Service'/>
                                <label for="serviceLawn">Lawn Maintenace</label>

                                <input
                                    type="checkbox"
                                    id='servicePacking'
                                    name='servicePacking'
                                    value='Packing'/>
                                <label for="servicePacking">Packing</label>
                                <input
                                    type="checkbox"
                                    id='serviceHaircut'
                                    name='serviceHaircut'
                                    value='Haircut'/>
                                <label for="serviceHaircut">Haircut</label>
                                <input
                                    type="checkbox"
                                    id='serviceManicure'
                                    name='serviceManicure'
                                    value='Manicure'/>
                                <label for="serviceManicure">Manicure</label>
                                <input
                                    type="checkbox"
                                    id='serviceMassage'
                                    name='serviceMassage'
                                    value='Massage'/>
                                <label for="serviceMassage">Massage</label>
                                <input
                                    type="checkbox"
                                    id='serviceBabysitting'
                                    name='serviceBabysitting'
                                    value='Babysitting'/>
                                <label for="serviceBabysitting">Babysitting</label>
                                <input
                                    type="checkbox"
                                    id='serviceAgedCare'
                                    name='serviceAgedCare'
                                    value='AgedCare'/>
                                <label for="serviceAgedCare">Aged care</label>
                            </div>

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