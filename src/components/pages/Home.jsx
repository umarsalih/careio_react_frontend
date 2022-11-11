import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../home/Hero'
import TabsPartners from './../home/TabsPartners'
import BookingModal from './../booking/BookingModal'

const Home = () => {
    const showBooking = useState(false)
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
                        <div id="CareIOModalLogin" className="careio__modal-holder">
                            { /* Sign up modal dynamically loaded here*/ }
                        </div> 
                        <div id="CareIOModalBooking" className="careio__modal-holder">
                            <BookingModal/>
                        </div> 
                        { /* <div className="modal-backdrop fade show"></div> */ }

                    </div>
                </div>    
            </div>
            
        </Fragment>
    )
}

export default Home;
