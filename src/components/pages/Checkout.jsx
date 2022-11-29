import React from 'react'
import StripeDummy from '../checkout/StripeDummy';
import CheckoutModal from '../checkout/CheckoutModal';
import {createBooking, getBookings} from '../../api/booking-api'
import { bookingPartner, bookingMeta, updateBookingMeta } 
from '../../store/booking-store';
import { useSelector, useDispatch } from 'react-redux';
import BookingSummary from '../booking/BookingSummary';
import BookingCard from '../mybookings/BookingCard';
// import checkoutCard from '../checkout/CheckoutCard';
import { Fragment } from 'react';
import emailjs from "emailjs-com";



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

  var templateParams = {
    fname: "Umar",
    date: meta.date,
    booking_id: "123",
    send_to_email: "macci.hello@gmail.com",
    booking_start: "07:00",
    booking_end: "08:00",
    total_amt: "$100",
    message: "Thank you for your service"
  };

  function sendEmail(e) {
    console.log("Send email function called")
    e.preventDefault();

        // emailjs.sendForm('service_d03ugcn', 'template_o8f7r9m', e.target, 'j1SHfAPi7_cWPr_hK')
        //   .then((result) => {
        //       console.log(result.text);
        //       console.log("Successful");
        //   }, (error) => {
        //       console.log(error.text);
        //       console.log("Failure");
        //   });

    emailjs.send('service_d03ugcn', 'template_o8f7r9m', templateParams, 'j1SHfAPi7_cWPr_hK').
    then((result)=> {
      console.log(result.text);
      console.log("Successful")
    }, (error) => {
      console.log(error.text)
      console.log("Failure")
    })
  }
    
  const book = async () => {
      const bReq = await createBooking(bookingData)
      console.log({bReq})
  }

  return (
    <div id="CareIOCheckout">
      <div className="container">
        
      <div className='heading'><p>Confirm and Checkout</p></div> 
        <div className="row">
        
              
                  
                  <BookingCard
                      partnerId = {meta.userId}
                      firstName = "John"
                      lastName = "Sharma"
                      isFinished = {meta.isFinished}
                      bookingDate={meta.date}
                      startTime = {meta.timeStart}
                      endTime = {meta.timeEnd}
                      totalPrice = {meta.totalPrice}
                      jobLength = {meta.jobLength}
                  />
            
            
       
        
          <div className='col-md-6'>
            <StripeDummy
              bookingFunc={book}
              triggerEmail={sendEmail}
            />
          </div>

        </div>
      </div>
        
    <CheckoutModal/>    
    </div>
  )
}

