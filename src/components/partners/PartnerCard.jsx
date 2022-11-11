import React, { useState, useEffect, Fragment} from 'react';

const PartnerCard = (props) => {
    const {name, services, price} = props
  return (
    <Fragment>
        <div className="partner-1 col-md-6 d-flex">
            <div className="content-left">
                {/* <img src="images\demo-prof.jpg" alt="Service Provider Img"/> */}
            </div>
            <div className="content-right">
                <h2 className="partner-name">{name}</h2>
                <ul className="partner-services">
                    <li>Cleaning</li>
                    <li>Lawn Maintenance</li>
                </ul>
                <p>$<strong>24</strong></p>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    data-toggle="modal" data-target="#modalBooking"
                >
                    Book
                </button>
            </div>
        </div>
    </Fragment>
    
  )
}
export default PartnerCard;




