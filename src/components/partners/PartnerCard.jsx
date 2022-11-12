import React, {Fragment} from 'react';

const PartnerCard = ({
        partnerId = 1,
        firstName = "John",
        lastName = "Smith",
        services = ["carpentry", "moving"],
        rate = 26,
    }) => {

  return (
    <Fragment>
        <div className="care-partner-card col-md-6">
            <div className="image">
                <img src={require(`./../../images/partners/partner-${partnerId}.jpg`)} alt={firstName}/>
            </div>
            <div className="meta__outter">
                <div className='meta'>
                    <h2 className="partner-name">{firstName} {lastName}</h2>
                    <ul className="partner-services">
                        {
                            services.map( (s, i) => (
                                <li className="badge badge-pill badge-light" key={i}> {s} </li>
                            ))
                        }
                    </ul>
                    <p>$<strong>{rate} </strong></p>
                    
                    <button type="button" 
                        className="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#bookingModal">
                      Book
                    </button>
                </div>
            </div>
        </div>
    </Fragment>
    
  )
}
export default PartnerCard;




