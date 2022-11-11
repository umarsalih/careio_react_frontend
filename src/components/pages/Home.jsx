import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../home/Hero'
import PartnerCard from './../partners/PartnerCard'
import TabsPartners from './../home/TabsPartners'

const Home = () => {

  return (
    <Fragment>
        <div id="CareHome">
        <div className="careio__superwrapper">
            <div className="hero__holder">
                <Hero/>
            </div>
            <div className="careio__body">
                <TabsPartners/>
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
