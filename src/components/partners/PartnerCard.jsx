import React, {Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePartner } from '../../store/booking-store';
import { isLoggedIn } from '../../store/login-store';

const PartnerCard = ({
        partnerId = 41,
        firstName = "John",
        lastName = "Smith",
        services = ["cleaning", "lawn maintenance"],
        rate = 26,
        desc = "Fixer of things"
    }) => {

    const isLogged = useSelector(isLoggedIn)

    const [partnerObj] = useState({
            partnerId,
            firstName,
            lastName,
            services,
            rate,
            desc
    })
    const dispatch = useDispatch()

  return (
    <Fragment>
        <div className="care-partner-card col-md-6 p-0">
            <div className="image">
                <img src={require(`./../../images/partners/partner-${partnerId}.jpg`)} alt={firstName}/>
            </div>
            <div className="meta__outter">
                <div className='meta'>
                    <h4 className="partner-name">{firstName} {lastName}</h4>
                    <h5>{desc}</h5>
                    <ul className="partner-services">
                        {
                            services.map( (s, i) => (
                                <li className="mx-1" key={s}> {s} </li>
                            ))
                        }
                    </ul>
                    <p>$<strong>{rate} </strong></p>

                    {isLogged ?
                        <button type="button" 
                        className="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#bookingModal"
                        onClick={() => dispatch(updatePartner({
                            partnerId,
                            firstName,
                            lastName,
                            services,
                            rate,
                            desc
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
    </Fragment>
    
  )
}
export default PartnerCard;




