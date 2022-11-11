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
        <div class="careio__superwrapper">
            { /* navigationBar div */ }
            {/* <div id="CareNav" class="navbar">
                <div class="logo">
                    <p class="logo"> C &nbsp;&nbsp; A &nbsp;&nbsp;R &nbsp;&nbsp;E &nbsp;&nbsp;.&nbsp;i&nbsp;o </p>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="">Sign Up/Login</a>

                        </li>

                        <li>
                            <a href="" class="premiumLink">Go Premium!</a>

                        </li>

                    </ul>
                </nav>
            </div> */}
            { /* end of navbar*/ }
            { /*header div */ }
            <div class="header">
                <div class="header-img">
                    Logo here
                </div>

                <div class="bg-text">
                    <h1>We care. Metro Vancouver’s <br/>Home Service Finder</h1>
                    <a href="#"><button type="button" class="btn btn-primary">&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</button></a>
                    <a href="#"><button type="button" class="btn btn-outline-primary">Go Premium</button></a>
                </div>

            </div>
            { /* end of header*/ }

            <div class="careio__body">
                { /*-----tabs menu start*/ }
                <div class="btn-box">
                    <button id="btn1" onclick="openHM()"><i class="fa-brands fa-html5"></i>Home Maintenance</button>
                    <button id="btn2"  onclick="openGrooming()"><i class="fa-regular fa-user"></i>Personal Grooming</button>
                    <button id="btn3" onclick="openCareAid()"><i class="fa-solid fa-hand-holding-hand"></i>Care Aid &nbsp;&nbsp;&nbsp;</button>
                </div>
                <div class="careio-partner-catalogue">
                    <div class="content container" id="content1">
                        <div class="row">
                            <div class="partner-1 col-md-6 d-flex">
                                <div class="content-left">
                                    {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                                </div>
                                <div class="content-right">
                                    <h2 class="partner-name">James Bond</h2>
                                    <ul class="partner-services">
                                        <li>Cleaning</li>
                                        <li>Lawn Maintenance</li>
                                    </ul>
                                    <p>$<strong>24</strong></p>
                                    <button 
                                        type="button" 
                                        class="btn btn-primary"
                                        data-toggle="modal" data-target="#modalBooking"
                                    >
                                        Book
                                    </button>
                                </div>
            
                            </div>
                            <div class="partner-1 col-md-6 d-flex">
                                <div class="content-left">
                                    {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                                </div>
                                <div class="content-right">
                                    <h2 class="partner-name">James Bond</h2>
                                    <ul class="partner-services">
                                        <li>Cleaning</li>
                                        <li>Lawn Maintenance</li>
                                    </ul>
                                    <p>$<strong>24</strong></p>
                                    <button 
                                        type="button" 
                                        class="btn btn-primary"
                                        data-toggle="modal" data-target="#modalBooking"
                                    >
                                        Book
                                    </button>
                                </div>
            
                            </div>

                        </div>
                        
                        
        
                        
                        
                    </div>
                    { /* second tab*/ }
                    <div id="content2" class="content">
                        <div class="content-left">
                            {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                        </div>
                        <div class="content-right">
                            <h2>Name</h2>
                            <p>Personal Grooming</p>
                            <button 
                                type="button" 
                                class="btn btn-primary"
                                data-toggle="modal" data-target="#modalBooking"
                            >
                                Book
                            </button>
                            
                        </div>
                    </div>
                    { /*-----third tab*/ }
                    <div  id="content3" class="content">
                        <div class="content-left">
                            {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
                        </div>
                        <div class="content-right">
                            <h3>Name</h3>
                            <p>Care Aid</p>
                            <button 
                                type="button" 
                                class="btn btn-primary"
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
                <div id="CareIOModalLogin" class="careio__modal-holder">
                    { /* Sign up modal dynamically loaded here*/ }
                </div> 
                <div id="CareIOModalBooking" class="careio__modal-holder">
                    { /* Booking modal dynamically loaded here*/ }
                </div> 


                { /* <div class="modal-backdrop fade show"></div> */ }

            </div>
        </div>    
    </Fragment>
  )
}

export default Home;
