import React from 'react'
import StripeDummy from '../checkout/StripeDummy';
import CheckoutModal from '../checkout/CheckoutModal';
import {createBooking, getBookings} from '../../api/booking-api'
import { bookingPartner, bookingMeta, updateBookingMeta } from '../../store/booking-store';
import { allPartners } from '../../store/partners-store';
import { useSelector, useDispatch } from 'react-redux';
import BookingSummary from '../booking/BookingSummary';
import BookingCard from '../mybookings/BookingCard';
import { Fragment } from 'react';
import emailjs from "emailjs-com";
import { useSearchParams } from 'react-router-dom';

export default function Checkout() {
  
  const meta =  useSelector(bookingMeta)
  const partner = useSelector(bookingPartner)

  const {userId, partnerId, date, timeEnd, timeStart, selectedServices, totalPrice, isFinished, bookingKey, jobLength} = meta
  
  let isoDate = new Date(date)
  isoDate = isoDate.toISOString().substr(0,10)
  const bookingData = {
    userId,
    partnerId: partner.partnerId,
    serviceProviderId: partner.partnerId,
    bookingDate: isoDate+"T00:00:00",
    startTime: isoDate + "T" + timeStart + ":00",
    endTime: isoDate + "T" + timeEnd + ":00",
    totalPrice: totalPrice,
    bookingKey: "1",
    status: 1,
    serviceBookMap: [1,2,3]
  }
  console.log({bookingData})

  function sendEmail(e) {
    console.log("Send email function called")
    e.preventDefault()
    book()
    emailjs.sendForm('service_d03ugcn', 'template_o8f7r9m', e.target, 'j1SHfAPi7_cWPr_hK')
      .then((result) => {
          console.log(result.text);
          console.log("Successful");
      }, (error) => {
          console.log(error.text);
          console.log("Failure");
      });
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
                firstName = {partner.firstName}
                lastName = {partner.lastName}
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

