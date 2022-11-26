import React from 'react'
import { booking, bookingPartner, bookingMeta, updateBookingMeta }  from '../../store/booking-store';
import { useSelector, useDispatch } from 'react-redux';

export default function BookingSummary() {
  const meta =  useSelector(bookingMeta)
  const partner =  useSelector(bookingPartner)
  return (
    <div>
      <h4>You are booking {partner.firstName} for {meta.jobLength} hours for the total price of ${meta.totalPrice} on<br/>{meta.date}</h4>
    </div>
  )
}
