import React, {useEffect} from 'react'
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
import { resolveServiceToId } from '../../utils';

export default function Checkout() {
  
  const meta =  useSelector(bookingMeta)
  const partner = useSelector(bookingPartner)

  const {userId, partnerId, date, timeEnd, timeStart, selectedServices, totalPrice, status, bookingKey, jobLength} = meta
  
  let isoDate = new Date(date)
  isoDate = isoDate.toISOString().substr(0,10)
  let services = []
  selectedServices.map((serviceStr, i) => {
    services.push( resolveServiceToId(serviceStr) )
  })
  
  
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
    e.preventDefault();
    book()

    var templateParams = {
      fname: partner.firstName,
      date: meta.date,
      booking_id: `00${partnerId}crio00${userId}`,
      send_to_email: partner.email,
      booking_start: timeStart,
      booking_end: timeEnd,
      total_amt: totalPrice,
      message: "Thank you for trusting Care.IO"
    };

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
                partnerId = {partner.partnerId}
                firstName = {partner.firstName}
                lastName = {partner.lastName}
                isFinished = {meta.isFinished}
                bookingDate = {meta.date}
                startTime = {meta.timeStart}
                endTime = {meta.timeEnd}
                totalPrice = {meta.totalPrice}
                jobLength = {meta.jobLength}
                partnerEmail = {partner.email}
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

