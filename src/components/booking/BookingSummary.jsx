import React from 'react'
import { bookingPartner, bookingMeta, updateBookingMeta }  from '../../store/booking-store';
import { useSelector, useDispatch } from 'react-redux';

export default function BookingSummary() {
  const booking =  useSelector(bookingMeta)
  return (
    <div>
      <h4>You are booking {booking.partner.firstName} for {booking.bookingMeta.jobLength} hours for the total price of ${booking.bookingMeta.totalPrice} on<br/>{booking.bookingMeta.date}</h4>
    </div>
  )
}
