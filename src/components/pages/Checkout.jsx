import React from 'react'
import StripeDummy from '../checkout/StripeDummy';
import CheckoutModal from '../checkout/CheckoutModal';
import {createBooking, getBookings} from '../../api/booking-api'
import { bookingPartner, bookingMeta, updateBookingMeta } 
from '../../store/booking-store';
import { useSelector, useDispatch } from 'react-redux';
import BookingSummary from '../booking/BookingSummary';
// import checkoutCard from '../checkout/CheckoutCard';
import { Fragment } from 'react';



export default function Checkout() {
  
  const meta =  useSelector(bookingMeta)
  

  const {userId, partnerId, date, timeEnd, timeStart, selectedServices, totalPrice, isFinished, bookingKey, jobLength} = meta
  
  let isoDate = new Date(date)
  isoDate = isoDate.toISOString().substr(0,10)
  const bookingData = {
    userId,
    serviceProviderId: partnerId,
    bookingDate: isoDate+"T00:00:00",
    startTime: isoDate + "T" + timeStart + ":00",
    endTime: isoDate + "T" + timeEnd + ":00",
    totalPrice: totalPrice,
    bookingKey: "1",
    isFinished: 1,
  }
  console.log({bookingData})
    
  const book = async () => {
      const bReq = await createBooking(bookingData)
      console.log({bReq})
  }

  return (
    <div id="CareIOCheckout">
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            
            <Fragment>
              <div className='checkoutLeft'>
             <div className='heading'><p>Confirm and Checkout</p></div> 
            
            <div className="booking-card">
            <div className="card">
            <div className="card-body">
    
            <p className="bookingDetailcheckout">You are booking <strong> John <br/>Sharma </strong> for<strong> 8 hours </strong>for the <br/>total price of<strong> $260 </strong></p>
            <p className='summary'>Appointment Summary</p>
            <div className='otherBookingDetails'>
            <div className='cellLeft'>PRICE PER HOUR <br/> $28</div>
            <div className='cellRight'>APPOINTMENT DATE <br/> Today,Nov 01 2022</div>
           
            </div>
            <div className='otherBookingDetails'>
            <div className='cellLeft'>SERVICE TYPE <br/> Carpentry</div>
            <div  className='cellRight'>APPOINTMENT HOUR <br/> 10 AM-06 PM</div>
       
       </div>
     </div>
   </div>
 </div>
 </div>
 </Fragment>

          </div> 
          <div className='col-md-6'>
            <StripeDummy
              bookingFunc={book}
            />
          </div>

        </div>
      </div>
        
    <CheckoutModal/>    
    </div>
  )
}

