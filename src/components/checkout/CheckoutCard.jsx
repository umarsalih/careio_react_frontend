import React, {Fragment,} from 'react';

const checkoutCard = () => {
    return (  

        <Fragment>
        <div class="booking-card col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="status">Status: <span> Pending</span></h5>
              <p class="bookingDetail">You are booking <strong> John <br/>Sharma </strong> for<strong> 8 hours </strong>for the <br/>total price of<strong> $260 </strong></p>
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
        </Fragment>

    );
}
 
export default checkoutCard ;