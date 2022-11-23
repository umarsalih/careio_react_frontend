// import "./../../styles/mybookings.css";
import BookingBanner from '../mybookings/BookingBanner'
import React, { useRef, useState, useEffect, Fragment} from 'react';
import BookingCard from '../mybookings/BookingCard';

// @AMAN, create booking frontend here please. thanks.

export default function MyBookings() {
  return (
    <Fragment>
     <div id="CareIOMyBookings">
         <div className="careio__superwrapper">
             <div className="hero__holder">
                 <BookingBanner/>
             </div>
             <div className="careio__body py-5">
                <div id='bookingCardWrapper' className='container'>
                    <div class="row">
                        <BookingCard/>
                        <BookingCard/>
                        <BookingCard/>
                        <BookingCard/>
                    </div>
                </div>
             </div>{ /* end of careio__body */ }
         </div>    
     </div>
     
 </Fragment>
  )
 
}
