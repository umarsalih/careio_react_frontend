// import "./../../styles/mybookings.css";
import BookingBanner from '../mybookings/BookingBanner'
import React, { useRef, useState, useEffect, Fragment} from 'react';
import BookingCard from '../mybookings/BookingCard';
import { getBookings } from '../../api/booking-api';
import { getJobLength } from '../../utils';

export default function MyBookings() {

    const [bookings, setBookings] = useState([])
    const fetchBookings = async () =>{
        const arr = await getBookings();
        setBookings(arr)

        // filter bookingArr to only if user id is equal to current
        return arr
    }
        
    useEffect(()=>{
        if(bookings.length) return
        fetchBookings()
    },[])
    
  return (
    <Fragment>
     <div id="CareIOMyBookings">
         <div className="careio__superwrapper">
             <div className="hero__holder">
                 <BookingBanner/>
             </div>
             <div className="careio__body py-5">
                <div id='bookingCardWrapper' className='container'>
                    <div className="row">
                        { !bookings.length && "You have no bookings  "}
                        {
                            Array.isArray(bookings) && 
                                bookings.map( b => {
                                    const bookingDate = b.bookingDate.substr(0,10);
                                    const startTime = b.startTime.substr(11,5);
                                    const endTime = b.endTime.substr(11,5);
                                    const jobLen = getJobLength(startTime, endTime)
                                    return <BookingCard
                                        key={b.bookingID}
                                        // partnerId = {b.partnerId}
                                        firstName = "John"
                                        lastName = "Sharma"
                                        isFinished = {b.isFinished}
                                        bookingDate = {bookingDate}
                                        startTime = {startTime}
                                        endTime = {endTime}
                                        totalPrice = {b.totalPrice}
                                        jobLength = {jobLen}
                                    />
                                })
                            
                        }
                        
                    </div>
                </div>
             </div>{ /* end of careio__body */ }
         </div>    
     </div>
    </Fragment>
  )
 
}
