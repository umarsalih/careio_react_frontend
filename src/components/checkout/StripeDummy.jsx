import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bookingPartner, bookingMeta, updateBookingMeta } 
from '../../store/booking-store';
import { currentUser } from '../../store/login-store';
import { createBooking } from '../../api/booking-api'

// https://blog.logrocket.com/integrating-stripe-react-stripe-js/

export default function StripeDummy({
  bookingFunc = ()=>{}, triggerEmail = ()=>{}
}) {
  const dispatch = useDispatch()
  const meta = useSelector(bookingMeta)
  const partner = useSelector(bookingPartner)
  const user = useSelector(currentUser)

  return (
    <div id='StripeDummy'>
        {meta.date}
        <form onSubmit={triggerEmail}>
          <input type="hidden" name="token" />
          <div className="group">
            <label>
              <span>Card</span>
              <div id="card-element" className="field"></div>
            </label>
          </div>
          <div className="group">
            <label>
              <span>First name</span>
              <input id="first-name" name="first-name" className="field" placeholder="Manoj" />
            </label>
            <label>
              <span>Last name</span>
              <input id="last-name" name="last-name" className="field" placeholder="Halugona" />
            </label>
          </div>
          <div className="group">
            <label>
              <span>Address</span>
              <input id="address-line1" name="address_line1" className="field" placeholder="77 Winchester Lane" />
            </label>
            <label>
              <span>Address (cont.)</span>
              <input id="address-line2" name="address_line2" className="field" placeholder="" />
            </label>
            <label>
              <span>City</span>
              <input id="address-city" name="address_city" className="field" placeholder="Coachella" />
            </label>
            <label>
              <span>State</span>
              <input id="address-state" name="address_state" className="field" placeholder="SA" />
            </label>
            <label>
              <span>ZIP</span>
              <input id="address-zip" name="address_zip" className="field" placeholder="92236" />
            </label>
            <label>
              <span>Country</span>
              <select name="address_country" id="address-country" className="field">
                <option value="IN">India</option>
                <option value="SG" >Singapore</option>
              </select>
            </label>
          </div>
          <button 
            type="submit" 
            data-bs-toggle="modal" 
            data-bs-target="#checkoutModal"
            // onClick={bookingFunc}
          >
                Pay ${meta.totalPrice}
          </button>
          <div className="outcome">
            <div className="error"></div>
            <div className="success">
              Success! Your Stripe token is <span className="token"></span>
            </div>
          </div>
        </form>
    </div>
  )
}