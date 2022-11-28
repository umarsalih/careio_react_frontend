import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { setLogin, setUser, currentUser } from '../../store/login-store';

import BookingSummary from '../booking/BookingSummary';


export default function CheckoutModal() {    
  return (
    <Fragment>
        <div className="modal fade" id="checkoutModal" tabIndex="-1" aria-labelledby="" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {/* <button type="button" className="btn-close btn-close-white align-self-end d-inline p-2" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    <div className="modal-body p-5">
                        <h3>
                            Order Confirmed
                        </h3>
                        <div className='my-5'>
                            <BookingSummary/>
                        </div>     
                        <Link to='/my-bookings' className='my-3'>
                            <button className='btn btn-primary' data-bs-dismiss="modal">
                                    Check out my bookings
                            </button>
                        </Link>
                        <br/>
                        <Link to='/'  className='my-3'>
                            <button className='btn bg-transparent' data-bs-dismiss="modal">
                                    Return home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
