import React, { Fragment, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { bookingPartner, bookingMeta, updateBookingMeta } 
from '../../store/booking-store';
import { currentUser } from '../../store/login-store';
import { Link, useResolvedPath } from 'react-router-dom';
import BookingSummary from './BookingSummary';

export default function BookingModal() {
    const dispatch = useDispatch()
    const partner = useSelector(bookingPartner)
    const user = useSelector(currentUser)

    const [startDate, setStartDate] = useState(new Date());
    const [bookingDetails, setBookingDetails] = useState({
        ...bookingMeta,
        date: startDate.toDateString(),
        timeStart: '07:00',
        timeEnd: '09:00',
        selectedServices: [],
        totalPrice: 0,
        partnerId: partner.partnerId,
        userId: user.userId,
    });
    

    const [jobLength, setJobLength] = useState(2);

    useEffect(()=>{
        if(!bookingDetails.timeStart || !bookingDetails.timeEnd) return
        let strInt = `${bookingDetails.timeStart}`.replace(':00', '')
        strInt = parseInt(strInt)
        let endInt = `${bookingDetails.timeEnd}`.replace(':00', '')
        endInt = parseInt(endInt)
        if (endInt && strInt) {
            setJobLength(endInt-strInt)
            setBookingDetails({
                ...bookingDetails,
                totalPrice: jobLength*partner.rate,
                jobLength: jobLength
            })
            _updateBookingMeta()
        }
        
    }, [bookingDetails.timeStart, bookingDetails.timeEnd])

    const _updateBookingMeta = async () =>{
        const meta = await bookingDetails
        return dispatch(updateBookingMeta(meta))
    }
    const handleChange = async(evt) =>{
        const propKey = evt.target.dataset.value
        setBookingDetails({
            ...bookingDetails,
            [propKey]: evt.target.value
        })
        _updateBookingMeta()
    }

    const handleChangeServices = async(evt) =>{
        const val = evt.target.value
        let servArrCopy = [...bookingDetails.selectedServices]
        if(evt.target.checked){
            servArrCopy.push(val)
        }else{
            servArrCopy = servArrCopy.filter( s => s!== val)
        }
        console.log({servArrCopy})
        
        setBookingDetails({
            ...bookingDetails,
            selectedServices: servArrCopy
        })
        _updateBookingMeta()
    }



    const finalizeMeta = () => {
        setBookingDetails({
            ...bookingDetails,
            partnerId: partner.partnerId,
            totalPrice: jobLength*partner.rate,
            userId: user.userId,
        })
        _updateBookingMeta()
    }
    
    const handleDateChange = (d) =>{
        setStartDate(d)
        setBookingDetails({
            ...bookingDetails,
            date: d.toDateString()
        })
        _updateBookingMeta()
    }

    const operatingHours = [
        { label: '6 am', val: '06:00'},
        { label: '7 am', val: '07:00'},
        { label: '8 am', val: '08:00'},
        { label: '9 am', val: '09:00'},
        { label: '10 am', val: '10:00'},
        { label: '11 am', val: '11:00'},
        { label: '12 nn', val: '12:00'},
        { label: '1 pm', val: '13:00'},
        { label: '2 pm', val: '14:00'},
        { label: '3 pm', val: '15:00'},
        { label: '4 pm', val: '16:00'},
        { label: '5 pm', val: '17:00'},
        { label: '6 pm', val: '18:00'},
        { label: '7 pm', val: '19:00'},
        { label: '8 pm', val: '20:00'},
        { label: '9 pm', val: '21:00'},
        { label: '10 pm', val: '22:00'},
    ]

  return (
    <Fragment>
        <div className="modal modal-lg fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModal" aria-hidden="true">

            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-0">
                    <button type="button" className="btn-close btn-close-white align-self-end d-inline p-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body p-0">
                        <div className="row m-0">
                        <div id="bookingForm" className="col-md-6">
                            <h3>
                            Booking {partner.firstName} {partner.lastName}
                            </h3>
                            <div className='booking-form text-left'>
                                <div className="my-4">
                                    <h4>Price Per Hour</h4>
                                    $<strong id="partnerRate">{partner.rate}</strong>/hr
                                </div>
                                
                                <div className="my-4">
                                    <h4>Service Type</h4>
                                    <div id="partnerServices" className="form-group">
                                        {
                                            partner.services.map( (serv, i) =>(
                                                <div className="form-check d-inline-block mr-3" key={i}>
                                                    <input 
                                                        key={i}
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        data-value="selectedServices"
                                                        value={serv} 
                                                        onChange={handleChangeServices}

                                                    />
                                                    <label className="form-check-label">{serv}</label>
                                                </div>
                                            ))
                                        }
                                        
                                </div> 
                                </div>
                                <div className="my-4">
                                <h4>Appointment Date</h4>
                                <div className="input-group date">
                                    <DatePicker 
                                        selected={startDate} 
                                        // dateFormat="yyyy-MM-dd"
                                        onChange={(date) => {    
                                            handleDateChange(date)
                                        }}      
                                    />
                                </div>  
                                </div>
                                <div className="my-4">
                                <h4>Appointment Time</h4>
                                <div className="form-group d-flex">
                                    <div className="booking-input--start-time mr-4 ">
                                        <label htmlFor="inputStartIme">Start time</label>
                                        <select className="form-control" 
                                            id="inputStartTime" 
                                            data-value="timeStart"
                                            onChange={handleChange}
                                            defaultValue={bookingDetails.timeStart}
                                        >
                                            {
                                                operatingHours.map((timeObj, i) => {
                                                    if(i < operatingHours.length-2) return (
                                                        <option 
                                                            value={timeObj.val} 
                                                            className={`time-opts time-${i+6}`} data-index={i}
                                                            key={i}
                                                            disabled={timeObj.val >= bookingDetails.timeEnd}
                                                        >
                                                            {timeObj.label}
                                                        </option>
                                                    )
                                                })
                                            }
                                        
                                        </select>
                                    </div>
                                    <div>&nbsp;</div>
                                    <div className="booking-input--end-time">
                                        <label htmlFor="inputStartIme">End time</label>
                                        <select 
                                            className="form-control" 
                                            data-value="timeEnd"
                                            id="inputEndTime" 
                                            onChange={handleChange}
                                            defaultValue={bookingDetails.timeEnd}
                                        >
                                            {
                                                operatingHours.map((timeObj, i) => {
                                                    if(i >= 2) return (
                                                        <option 
                                                            value={timeObj.val} 
                                                            className={`time-opts time-${i+6}`} data-index={i}
                                                            key={i}
                                                            disabled={timeObj.val <= bookingDetails.timeStart}
                                                        >
                                                            {timeObj.label}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="bookingSummary" className="booking-summary col-md-6 bg--dark">
                            <div>
                                <h3>Your booking details</h3>
                                <div className='partner-details my-4'>
                                    <div className='img-holder' 
                                    >
                                        <img src={require(`./../../images/partners/partner-${partner.partnerId}.jpg`)} alt={partner.firstName}/>
                                    </div>
                                    
                                    <div>
                                        <strong>{partner.firstName} {partner.lastName}</strong>
                                        <p>{partner.desc}</p>
                                    </div>
                                </div>
                                <div className='booking-summary-meta'>
                                    <h4>You are booking {partner.firstName} for {jobLength} hours for the total price of ${jobLength*partner.rate} on<br/>{bookingDetails.date}</h4>
                                    {/* <BookingSummary/> */}
                                    
                                    <Link to="/checkout">
                                    <button onClick={finalizeMeta} id="SubmitBooking" className="login btn btn-primary
                                    my-2" data-bs-dismiss="modal" aria-label="Close">Confirm and checkout</button></Link>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div> {/* /.modal-content */}
            </div>
            </div>

    </Fragment>
  )
}