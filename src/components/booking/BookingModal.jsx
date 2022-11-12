import React, { Fragment, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useSelector } from 'react-redux';
import { bookingPartner, bookingMeta } from '../../store/booking-store';


export default function BookingModal() {

    const [startDate, setStartDate] = useState(new Date());
    const partner = useSelector(bookingPartner)
    useEffect(()=>{
        console.log({partner})
    },[])

  return (
    <Fragment>
        <div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModal" aria-hidden="true">

            <div className="modal-dialog p-5">
                <div className="modal-content">
                    
                    <button type="button" className="btn-close align-self-end d-inline p-2" data-bs-dismiss="modal" aria-label="Close"></button>

                    <div className="modal-body p-5">
                        <div className="row m-0">
                        <div id="bookingForm" className="x-col-md-8 p-2">
                            <h3>
                            Book
                            <span id="partnerName">
                                {partner.firstName}
                            </span>
                            </h3>

                            <form>
                            <div className="my-4">
                                <h4>Price Per Hour</h4>
                                $<strong id="partnerRate">26</strong>/hr
                            </div>
                            
                            <div className="my-4">
                                <h4>Service Type</h4>
                                <div id="partnerServices" className="form-group">
                                    {
                                        partner.services.map( (serv, i) =>(
                                            <div className="form-check d-inline-block mx-3">
                                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                                <label className="form-check-label">{serv}</label>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="form-check d-inline-block mx-3">
                                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                        <label className="form-check-label">Service 1</label>
                                    </div>
                                    <div className="form-check d-inline-block mx-3">
                                        <input className="form-check-input" type="checkbox" id="check2" name="option2" value="something" defaultChecked/>
                                        <label className="form-check-label">Service 2</label>
                                    </div>
                                    <div className="form-check d-inline-block mx-3">
                                        <input className="form-check-input" type="checkbox" id="check3" name="option3" value="something"/>
                                        <label className="form-check-label">Service 3</label> 
                                    </div> */}
                            </div> 
                            </div>
                            <div className="my-4">
                            <h4>Appointment Date</h4>
                            <div className="input-group date">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                {/* <input type="text"  id="bookingDatepicker" className="form-control"/>
                                <div className="input-group-addon">
                                    <span className="glyphicon glyphicon-th"></span>
                                </div>
                                <div id="careio-datepicker"></div> */}
                            </div>  
                            </div>
                            <div className="my-4">
                            <h4>Appointment Time</h4>
                            <div className="form-group d-flex">
                                <div className="booking-input--start-time mr-4 ">
                                    <label htmlFor="inputStartIme">Start time</label>
                                    <select className="form-control" id="inputStartTime">
                                    <option>7 am</option>
                                    <option>8 am</option>
                                    <option>9 am</option>
                                    <option>10 am</option>
                                    <option>11 am</option>
                                    </select>
                                </div>
                                <div>&nbsp;</div>
                                <div className="booking-input--end-time">
                                    <label htmlFor="inputStartIme">End time</label>
                                    <select className="form-control" id="inputEndTime">
                                    <option>4 pm</option>
                                    <option>5 pm</option>
                                    <option>6 pm</option>
                                    <option>7 pm</option>
                                    <option>8 pm</option>
                                    <option>9 pm</option>
                                    <option>10 pm</option>
                                    <option>11 pm</option>
                                    </select>
                                </div>
                                
                            </div>
                            </div>
                            
                            <button id="SubmitBooking" type="submit" className="login btn btn-primary">Book</button>
                            </form>


                        </div>

                        {/* <div id="bookingSummary" className="booking-summary col-md-4 bg--dark p-5">
                            &nbsp;

                        </div> */}

                        </div>
                    </div>
                </div> {/* /.modal-content */}
            </div>
            </div>

    </Fragment>
  )
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
const setupHoursDropdown = () => {
    const dropdownStartHrs = document.getElementById('inputStartTime')
    const dropdownEndHrs = document.getElementById('inputEndTime')
    if(!dropdownStartHrs | !dropdownEndHrs) return

    let htmlOptionsStart = ""
    let htmlOptionsEnd = ""

    operatingHours.map((timeObj, i) => {
        const strOpt = `<option value="${timeObj.val}" class="time-opts time-${i+6}" data-index="${i}">
            ${timeObj.label}
        </option>`

        if(i< (operatingHours.length-2)){
            htmlOptionsStart += strOpt
        }
        if(i>1){
            htmlOptionsEnd += strOpt
        }
        
    });
    dropdownStartHrs.innerHTML = htmlOptionsStart
    dropdownEndHrs.innerHTML = htmlOptionsEnd

    dropdownStartHrs.addEventListener('input', evt =>{
        const valIndex = evt.target.selectedOptions[0].dataset.index

        const endHrs = dropdownEndHrs.children
        endHrs[valIndex].selected = true;
        for (let i = 0; i < endHrs.length; i++) {
            if(i < valIndex){
                endHrs[i].disabled = true
            }else{
                endHrs[i].disabled = false
            }
        }
    })
}