
import { isPending } from '@reduxjs/toolkit';
import React, {Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePartner } from '../../store/booking-store';
import { isLoggedIn } from '../../store/login-store';




const BookingCards = ({
        partnerId = 41,
        firstName = "John",
        lastName = "Sharma",
        status = "Pending",
        duration = 8,
        amount = 208
    }) => {

    const isLogged = useSelector(isLoggedIn)


  return (
    <Fragment>
   <div id='bookingCardWrapper'>
   <div class="row">
   <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="status">Status: <span> {status}</span></h5>
        <p class="bookingDetail">You are booking <strong> {firstName} <br/>{lastName} </strong> for<strong> {duration} hours </strong>for the <br/>total price of<strong> $ {amount}</strong></p>
        <div className='otherBookingDetails'>
            <div className='cellLeft'>PRICE PER HOUR <br/> $28</div>
            <div className='cellRight'>APPOINTMENT DATE <br/> Today,Nov 01 2022</div>
             
        </div>

        <div className='otherBookingDetails'>
        <div className='cellLeft'>SERVICE TYPE <br/> Carpentry</div>
        <div className='cellRight'>APPOINTMENT HOUR <br/> 10 AM-06 PM</div>
        
        </div>

        <div className='bookingCarButtons'> 
        <button type="button" class="btn mod-button">Edit</button>
        <button type="button" class="btn mod-button">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="status">Status: <span> {status}</span></h5>
      <p class="bookingDetail">You are booking <strong> {firstName} <br/>{lastName} </strong> for<strong> {duration} hours </strong>for the <br/>total price of<strong> $ {amount}</strong></p>
      <div className='otherBookingDetails'>
          <div className='cellLeft'>PRICE PER HOUR <br/> $28</div>
          <div className='cellRight'>APPOINTMENT DATE <br/> Today,Nov 01 2022</div>
           
      </div>
      <div className='otherBookingDetails'>
      <div className='cellLeft'>SERVICE TYPE <br/> Carpentry</div>
      <div className='cellRight'>APPOINTMENT HOUR <br/> 10 AM-06 PM</div>
      
      </div>
      <div className='bookingCarButtons'> 
      <button type="button" class="btn mod-button">Edit</button>
      <button type="button" class="btn mod-button">Cancel</button>
      </div>
    </div>
  </div>
</div>


<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="status">Status: <span> {status}</span></h5>
      <p class="bookingDetail">You are booking <strong> {firstName} <br/>{lastName} </strong> for<strong> {duration} hours </strong>for the <br/>total price of<strong> $ {amount}</strong></p>
      <div className='otherBookingDetails'>
          <div className='cellLeft'>PRICE PER HOUR <br/> $28</div>
          <div className='cellRight'>APPOINTMENT DATE <br/> Today,Nov 01 2022</div>
           
      </div>
      <div className='otherBookingDetails'>
      <div className='cellLeft'>SERVICE TYPE <br/> Carpentry</div>
      <div className='cellRight'>APPOINTMENT HOUR <br/> 10 AM-06 PM</div>
      
      </div>
      <div className='bookingCarButtons'> 
      <button type="button" class="btn mod-button">Edit</button>
      <button type="button" class="btn mod-button">Cancel</button>
      </div>
    </div>
  </div>
</div>

<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="status">Status: <span> {status}</span></h5>
      <p class="bookingDetail">You are booking <strong> {firstName} <br/>{lastName} </strong> for<strong> {duration} hours </strong>for the <br/>total price of<strong> $ {amount}</strong></p>
      <div className='otherBookingDetails'>
          <div className='cellLeft'>PRICE PER HOUR <br/> $28</div>
          <div className='cellRight'>APPOINTMENT DATE <br/> Today,Nov 01 2022</div>
           
      </div>
      <div className='otherBookingDetails'>
      <div className='cellLeft'>SERVICE TYPE <br/> Carpentry</div>
      <div className='cellRight'>APPOINTMENT HOUR <br/> 10 AM-06 PM</div>
      
      </div>
      <div className='bookingCarButtons'> 
      <button type="button" class="btn mod-button">Edit</button>
      <button type="button" class="btn mod-button">Cancel</button>
      </div>
    </div>
  </div>
</div>




</div>

</div>
    </Fragment>
    
  )
}
export default BookingCards;




