import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../home/Hero'
import TabsPartners from './../home/TabsPartners'
import BookingModal from './../booking/BookingModal'
import LoginModal from './../login/LoginModal'
import axios from 'axios';

const Home = () => {
    let fetched = false
    const testFetch = async() => {
        const data = {
            key: 'val'
        }
        try{
           
                // fetch(`http://localhost:8080/booking`, {
                //     method: 'GET',
                //     credentials:'include',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Access-Control-Allow-Origin': '*',
                //         'Authorization' : "Basic cm9vdDpyb290",
                //         'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                //         'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
                //     },
                //     json: true 
                // }).then(res=>{
                //     console.log(res)
                //     return res.json()
                // }).then( data => {
                //     console.log('getBookings', {data})
                // })
                
        // // data: qs.stringify(data),
            const options = {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization' : "Basic cm9vdDpyb290",
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
                },
                json: true,
                url: 'http://localhost:8080/booking/',
                };
            const res = await axios(options);

            // const res = await axios.post('http://localhost:8080/booking/', {
            //     method: 'POST',
            //     credentials:'include',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*',
            //         'Authorization' : "Basic cm9vdDpyb290",
            //         'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            //         'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            //     },
            //     json: true 
            // })
            
            fetched = true
            console.log({res})
        } catch(e) {
            console.error(`[careio::error] ${e}`)
        }
    }
    useEffect(()=>{
        if(!fetched) testFetch()
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
