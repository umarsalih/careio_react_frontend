// import "./../../styles/mybookings.css";
import { isPending } from '@reduxjs/toolkit';
import React, {Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePartner } from '../../store/booking-store';
import { isLoggedIn } from '../../store/login-store';


const BookingCard = ({
        partnerId = 41,
        firstName = "John",
        lastName = "Sharma",
        isFinished = 0,
        bookingDate=null,
        startTime = null,
        endTime = null,
        totalPrice = 208,
        jobLength = 4
    }) => {

    const isLogged = useSelector(isLoggedIn)
    const resolveStatus = stat =>{
      switch (stat){
        default: 
          return "Pending"
        case 0:
          return "Cancelled"
        case 1:
          return "Pending"  
        case 2:
          return "Complete"    
      }
    }
    const strDate = new Date(bookingDate).toDateString()


  return (
    <Fragment>
    <div className="booking-card col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="status">Status: <span> {resolveStatus(isFinished)}</span></h5>
          <p className="bookingDetail">You are booking <strong> {firstName} {lastName} </strong> 
          for<strong> {jobLength} hours </strong>for the total price of<strong> ${totalPrice}</strong></p>
          <div className='otherBookingDetails'>
              <div className='cellLeft'>PRICE PER HOUR <br/> ${totalPrice}</div>
              <div className='cellRight'>APPOINTMENT DATE <br/> {strDate} </div>
              
          </div>

          <div className='otherBookingDetails'>
          <div className='cellLeft'>SERVICE TYPE <br/> Carpentry</div>
          <div className='cellRight'>APPOINTMENT HOUR <br/> {startTime} - {endTime}</div>
          
          </div>

          {/* <div className='bookingCarButtons'> 
          <button type="button" className="btn mod-button">Edit</button>
          <button type="button" className="btn mod-button">Cancel</button>
          </div> */}
        </div>
      </div>
    </div>
    </Fragment>
    
  )
}
export default BookingCard;




