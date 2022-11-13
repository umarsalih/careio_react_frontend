import React, { useRef, useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../home/Hero'
import TabsPartners from './../home/TabsPartners'
import BookingModal from './../booking/BookingModal'
import LoginModal from './../login/LoginModal'
import axios from 'axios';
import {getBookings} from './../../api'

const Home = () => {
    // let fetched = useRef(false)
    console.log(
        Date.parse('10-11-2022 07:00')
    )


    
    useEffect(()=>{
        // if(fetched) return
        // const newBooking = getBookings( ()=>{
        //     fetched = true
        // })
        // console.log({newBooking})
    },[])
    
    return (
        <Fragment>
            <div id="CareIOHome">
                <div className="careio__superwrapper">
                    <div className="hero__holder">
                        <Hero/>
                    </div>
                    <div className="careio__body py-5">
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
