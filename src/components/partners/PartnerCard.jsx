import React, {Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePartner } from '../../store/booking-store';
import { isLoggedIn } from '../../store/login-store';

const PartnerCard = ({
        partnerId = 2,
        firstName = "John",
        lastName = "Smith",
        services = ["cleaning", "lawn maintenance"],
        rate = 26,
        desc = "Fixer of things",
        email = null
    }) => {

    const isLogged = useSelector(isLoggedIn)
    const dispatch = useDispatch()

  return (
    <Fragment>
        <div className="care-partner-card__outter mx-md-4 col-md-12 mx-lg-0 col-lg-6 p-2 mt-0 mb-1">
        <div className='care-partner-card'>
            {partnerId &&
                (
                    <div className="image">
                        <img src={require(`./../../images/partners/partner-${partnerId}.jpg`)} alt={firstName}/>
                    </div>
                )
            }
            <div className="meta__outter">
                <div className='meta'>
                    <h4 className="partner-name">{firstName} {lastName}</h4>
                    <h5><strong>${rate}</strong><small>/hr</small></h5>
                    <p>{desc} <small>({partnerId})</small></p> 
                    <ul className="partner-services">
                        {
                            services.map( (s, i) => (
                                <li className="mx-1" key={s}> {s} </li>
                            ))
                        }
                    </ul>
                    

                    {isLogged ?
                        <button type="button" 
                        className="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#bookingModal"
                        onClick={() => dispatch(updatePartner({
                            partnerId: partnerId,
                            firstName,
                            lastName,
                            services,
                            rate,
                            desc,
                            email
                        }))}
                        >
                        Book
                        </button>
                        :
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target="#loginModal"
                        >
                            Book
                        </button>
                    }
                    
                    
                </div>
            </div>
        </div>
        </div>
        {/* end */}
        
    </Fragment>
    
  )
}
export default PartnerCard;




