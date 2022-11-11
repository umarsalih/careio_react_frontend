import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';
// import Nav from './Nav';
// import Footer from './Footer';

const Home = ({

}
) => {

  return (
    <Fragment>
        <div id="CareHome">
        <div classNameName="careio__superwrapper">
            { /* navigationBar div */ }
            {/* <div id="CareNav" className="navbar">
                <div className="logo">
                    <p className="logo"> C &nbsp;&nbsp; A &nbsp;&nbsp;R &nbsp;&nbsp;E &nbsp;&nbsp;.&nbsp;i&nbsp;o </p>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="">Sign Up/Login</a>

                        </li>

                        <li>
                            <a href="" className="premiumLink">Go Premium!</a>

                        </li>

                    </ul>
                </nav>
            </div> */}
            { /* end of navbar*/ }
            { /*header div */ }
            <div className="header">
                <div className="header-img">
                    Logo here
                </div>

                <div className="bg-text">
                    <h1>We care. Metro Vancouver’s <br/>Home Service Finder</h1>
                    <a href="#"><button type="button" className="btn btn-primary">&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</button></a>
                    <a href="#"><button type="button" className="btn btn-outline-primary">Go Premium</button></a>
                </div>

            </div>
            { /* end of header*/ }

            <div className="careio__body">
                { /*-----tabs menu start*/ }
                <div className="btn-box">
                    <button id="btn1" onclick="openHM()"><i className="fa-brands fa-html5"></i>Home Maintenance</button>
                    <button id="btn2"  onclick="openGrooming()"><i className="fa-regular fa-user"></i>Personal Grooming</button>
                    <button id="btn3" onclick="openCareAid()"><i className="fa-solid fa-hand-holding-hand"></i>Care Aid &nbsp;&nbsp;&nbsp;</button>
                </div>
                <div className="careio-partner-catalogue">
                    <div className="content container" id="content1">
                        <div className="row">
                            <div className="partner-1 col-md-6 d-flex">
                                <div className="content-left">
                                    {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                                </div>
                                <div className="content-right">
                                    <h2 className="partner-name">James Bond</h2>
                                    <ul className="partner-services">
                                        <li>Cleaning</li>
                                        <li>Lawn Maintenance</li>
                                    </ul>
                                    <p>$<strong>24</strong></p>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary"
                                        data-toggle="modal" data-target="#modalBooking"
                                    >
                                        Book
                                    </button>
                                </div>
            
                            </div>
                            <div className="partner-1 col-md-6 d-flex">
                                <div className="content-left">
                                    {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                                </div>
                                <div className="content-right">
                                    <h2 className="partner-name">James Bond</h2>
                                    <ul className="partner-services">
                                        <li>Cleaning</li>
                                        <li>Lawn Maintenance</li>
                                    </ul>
                                    <p>$<strong>24</strong></p>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary"
                                        data-toggle="modal" data-target="#modalBooking"
                                    >
                                        Book
                                    </button>
                                </div>
            
                            </div>

                        </div>
                        
                        
        
                        
                        
                    </div>
                    { /* second tab*/ }
                    <div id="content2" className="content">
                        <div className="content-left">
                            {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                        </div>
                        <div className="content-right">
                            <h2>Name</h2>
                            <p>Personal Grooming</p>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                data-toggle="modal" data-target="#modalBooking"
                            >
                                Book
                            </button>
                            
                        </div>
                    </div>
                    { /*-----third tab*/ }
                    <div  id="content3" className="content">
                        <div className="content-left">
                            {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                        </div>
                        <div className="content-right">
                            <h3>Name</h3>
                            <p>Care Aid</p>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                data-toggle="modal" data-target="#modalBooking"
                            >
                                Book
                            </button>
                        </div>
                    </div>
                </div>{ /*/.careio-partner-catalogue*/ }

                


            </div>
            { /* end of careio__body */ }
            <div id="CareIOMOdals">
                <div id="CareIOModalLogin" className="careio__modal-holder">
                    { /* Sign up modal dynamically loaded here*/ }
                </div> 
                <div id="CareIOModalBooking" className="careio__modal-holder">
                    { /* Booking modal dynamically loaded here*/ }
                </div> 


                { /* <div className="modal-backdrop fade show"></div> */ }

            </div>
        </div>    

        </div>
        
    </Fragment>
  )
}

export default Home;
