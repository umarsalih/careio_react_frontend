import React from 'react'
import StripeDummy from '../checkout/StripeDummy';
import CheckoutModal from '../checkout/CheckoutModal';
import {createBooking, getBookings} from '../../api/booking-api'
import { bookingPartner, bookingMeta, updateBookingMeta } 
from '../../store/booking-store';
import { useSelector, useDispatch } from 'react-redux';
import BookingSummary from '../booking/BookingSummary';


export default function Checkout() {
  
  const meta =  useSelector(bookingMeta)

  const {userId, partnerId, date, timeEnd, timeStart, selectedServices, totalPrice, isFinished, bookingKey, jobLength} = meta
  console.log({meta})
  
    
    // bookingDate: "2023-01-01T00:00:00",
    // bookingKey: "1",
    // endTime: "2023-01-01T00:00:00",
    // isFinished: 1,
    // serviceProviderId: 4,
    // startTime: "2023-01-01T00:00:00",
    // totalPrice: 200,
    // userId: 3,

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
            
            @AMAN.  <br/>
            1. PLACE THE BOOKINGCARD COMPONENT HERE. <br/>
            2. Run Sass, sal will teach you <br/>

          <BookingSummary/>
      

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

