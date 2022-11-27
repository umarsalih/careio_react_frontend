import React from 'react'
import StripeDummy from '../checkout/StripeDummy';
import checkoutCard from '../checkout/CheckoutCard';
import { Fragment } from 'react';
// https://blog.logrocket.com/integrating-stripe-react-stripe-js/
// @AMAN.  <br/>
 //1. PLACE THE BOOKINGCARD COMPONENT HERE. <br/>
 //2. Run Sass, sal will teach you <br/> 

export default function Checkout() {
  return (
    <div id="CareIOCheckout">
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            
            <Fragment>
              <div className='checkoutLeft'>
             <div className='heading'><p>Confirm and Checkout</p></div> 
            
            <div class="booking-card">
            <div class="card">
            <div class="card-body">
    
            <p class="bookingDetailcheckout">You are booking <strong> John <br/>Sharma </strong> for<strong> 8 hours </strong>for the <br/>total price of<strong> $260 </strong></p>
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
            <StripeDummy/>
          </div>

        </div>
      </div>
        
    </div>
  )
}

