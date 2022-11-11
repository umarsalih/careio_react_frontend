import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../home/Hero'
import TabsPartners from './../home/TabsPartners'
import BookingModal from './../booking/BookingModal'
import LoginModal from './../login/LoginModal'

const Home = () => {
    
    return (
        <Fragment>
            <div id="CareIOHome">
                <div className="careio__superwrapper">
                    <div className="hero__holder">
                        <Hero/>
                    </div>
                    <div className="careio__body">
                        <TabsPartners/>
                    </div>
                    { /* end of careio__body */ }

                    <div id="CareIOMOdals">
                        <LoginModal/>
                        <BookingModal/>
                    </div>
                </div>    
            </div>
            
        </Fragment>
    )
}

export default Home;
