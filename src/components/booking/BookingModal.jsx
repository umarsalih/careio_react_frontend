import React, { Fragment } from 'react'

export default function BookingModal() {
  return (
    <Fragment>
        <div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModal" aria-hidden="true">

            <div className="modal-dialog p-5">
                <div className="modal-content">
                    
                    <button type="button" className="btn-close align-self-end d-inline p-2" data-bs-dismiss="modal" aria-label="Close"></button>

                    <div className="modal-body p-5">
                        <div className="row m-0">
                        <div id="bookingForm" className="x-col-md-8 p-5">
                            <h3>
                            Book
                            <span id="partnerName">
                                John Sharma
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
                                <div className="form-check d-inline-block mx-3">
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
                                </div>
                            </div> 
                            </div>
                            <div className="my-4">
                            <h4>Appointment Date</h4>
                            <div className="input-group date">
                                <input type="text"  id="bookingDatepicker" className="form-control"/>
                                <div className="input-group-addon">
                                    <span className="glyphicon glyphicon-th"></span>
                                </div>
                                <div id="careio-datepicker"></div>
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
