// import "./../../styles/mybookings.css";
import BookingBanner from '../mybookings/BookingBanner'
import React, { useRef, useState, useEffect, Fragment} from 'react';
import BookingCards from '../mybookings/BookingCards';

// @AMAN, create booking frontend here please. thanks.

export default function MyBookings() {
  return (
    <Fragment>
     <div id="CareIOHome">
         <div className="careio__superwrapper">
             <div className="hero__holder">
                 <BookingBanner/>
             </div>
             <div className="careio__body py-5">
                 <BookingCards/>
             </div>{ /* end of careio__body */ }
         </div>    
     </div>
     
 </Fragment>
  )
 
}
