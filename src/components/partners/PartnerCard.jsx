import React, { useState, useEffect, Fragment} from 'react';

const PartnerCard = ({
        name = "John Smith",
        services = ["Carpentry", "Moving"],
        rate = 26
    }) => {

  return (
    <Fragment>
        <div className="care-partner-card col-md-6">
            <div className="image">
                <img src={require('./../../images/demo-prof.jpg')} alt="Service Provider Img"/>
            </div>
            <div className="meta__outter">
                <div className='meta'>
                    <h2 className="partner-name">{ name }</h2>
                    <ul className="partner-services">
                        <li>Cleaning</li>
                        <li>Lawn Maintenance</li>
                    </ul>
                    <p>$<strong>{rate} </strong></p>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        data-toggle="modal" data-target="#modalBooking"
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    </Fragment>
    
  )
}
export default PartnerCard;




