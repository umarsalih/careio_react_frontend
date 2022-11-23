
// import "./../../styles/mybookings.css";
import React, { useState, useEffect, Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, setLogin , toggleLogin , currentUser} from '../../store/login-store';
import { Link } from 'react-router-dom'


const BookingBanner = () => {

    const isLogged = useSelector(isLoggedIn);
    const dispatch = useDispatch();
    const user = useSelector(currentUser);
   return ( 
    <Fragment>
        <div className="bookingBanner">
        <div className="bookingBanner__inner">
        <div className="container">
            <div className='row p-5'>
                <div className="bg-text">
                    {
                        !isLogged ?  (
                            <div>
                                <Link to="/signup" className="btn btn-primary">
                                    Sign Up
                                </Link>
                                &nbsp;
                                <button type="button" 
                                    className="btn btn-primary" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#loginModal">
                                    Log In
                                </button>
                            </div>
                        ) : (
                            <div>
                               <h1>Aloha, {user.username}! <br/>Here are <span>your bookings</span></h1>
                            </div>
                        )}
                </div>
            </div>
        </div>
    </div>
</div>
    </Fragment>
   );
}
 
export default BookingBanner  ;
