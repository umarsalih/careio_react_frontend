// import "./../../styles/mybookings.css";
import BookingBanner from '../mybookings/BookingBanner'
import React, { useRef, useState, useEffect, Fragment} from 'react';
import BookingCard from '../mybookings/BookingCard';
import { getBookings } from '../../api/booking-api';
import { getJobLength } from '../../utils';
import { allPartners, setAllPartners } from '../../store/partners-store';
import { currentUser } from '../../store/login-store';
import { getPartners } from '../../api/partners-api';
import { useDispatch, useSelector } from 'react-redux';

export default function MyBookings() {
    const dispatch = useDispatch()
    const user = useSelector(currentUser)
    const [bookings, setBookings] = useState([])
    const [partners, setPartners] = useState([])

    const fetchPartners = async () =>{
        let res = await getPartners()
        console.log({res})
        setPartners(res.data)
        return res.data
    }

    const fetchBookings = async () =>{
        const arr = await getBookings();
        setBookings(arr)
        return arr
    }

    const findPartner = (id) => {
        const p = partners.filter(p => (p.partner_id==id))
        return p[0]
    }
        
    useEffect(()=>{
        if(bookings.length) return
        fetchPartners()
    },[])
    useEffect(()=>{
        if(partners.length) return
        fetchBookings()
    },[])
    
  return (
    <Fragment>
     <div id="CareIOMyBookings">
         <div className="careio__superwrapper">
             <div className="hero__holder">
                 <BookingBanner/>
             </div>
             <div className="careio__body py-5">
                <div id='bookingCardWrapper' className='container'>
                    <div className="row">
                        { !bookings.length && "Loading your bookings...  "}
                        {
                            Array.isArray(bookings) && 
                                bookings.reverse().map( b => {
                                    if(b.userId !== user.userId) return
                                    const bookingDate = b.bookingDate.substr(0,10);
                                    const startTime = b.startTime.substr(11,5);
                                    const endTime = b.endTime.substr(11,5);
                                    const jobLen = getJobLength(startTime, endTime)
                                    const partner = findPartner(b.serviceProviderId)
                                    console.log(b.bookingID, {partner})
                                    return <BookingCard
                                        key={b.bookingID}
                                        firstName = { partner ? partner.first_name : " "}
                                        lastName = { partner ? partner.last_name : " "}
                                        isFinished = {b.isFinished}
                                        bookingDate = {bookingDate}
                                        startTime = {startTime}
                                        endTime = {endTime}
                                        totalPrice = {b.totalPrice}
                                        jobLength = {jobLen}
                                        services = {b.serviceBookMap}
                                    />
                                })
                            
                        }
                        
                    </div>
                </div>
             </div>{ /* end of careio__body */ }
         </div>    
     </div>
    </Fragment>
  )
 
}
