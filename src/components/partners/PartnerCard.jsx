import React, { useState, useEffect, Fragment} from 'react';

const PartnerCard = ({
        name = "John Smith",
        services = ["Carpentry", "Moving"],
        rate = 26
    }) => {

  return (
    <Fragment>
        <div className="d-flex">
            <div className="content-left">
                {/* <img src=".\images\demo-prof.jpg" alt="Service Provider Img"/> */}
            </div>
            <div className="content-right">
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
    </Fragment>
    
  )
}
export default PartnerCard;




