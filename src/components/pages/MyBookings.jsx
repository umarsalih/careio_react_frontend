// import "./../../styles/mybookings.css";
import BookingBanner from '../mybookings/BookingBanner'
import React, { useRef, useState, useEffect, Fragment} from 'react';
import BookingCard from '../mybookings/BookingCard';
import { getBookings } from '../../api/booking-api';

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
                                    return <BookingCard/>
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
