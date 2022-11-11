import React, { useState, useEffect, Fragment} from 'react';
import PartnerCollection from '../partners/PartnersCollection';
const TabsPartners = (props) => {
  return (
    <Fragment>
        <div id="care-partner-tabs" class="container">
            <div class="row">
                <div id="care-tabs-nav">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="care-maintenance-tab" data-bs-toggle="pill" data-bs-target="#care-maintenance" type="button" role="tab" aria-controls="care-maintenance" aria-selected="true">
                                <i class="fa-brands fa-html5"></i> Home Maintenance
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="care-grooming-tab" data-bs-toggle="pill" data-bs-target="#care-grooming" type="button" role="tab" aria-controls="care-grooming" aria-selected="false">
                                <i class="fa-regular fa-user"></i>Personal Grooming
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="care-aid" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                            <i class="fa-solid fa-hand-holding-hand"></i>Care Aid
                            </button>
                        </li>
                    </ul>
                </div>
            </div> {/* /.row */}
            <div class="row">
                <div id="care-tabs-content">
                    <div className="tab-pane fade show active" id="care-maintenance" role="tabpanel" aria-labelledby="care-maintenance-tab">
                        <PartnerCollection/>
                    </div>
                    <div className="tab-pane fade" id="care-grooming" role="tabpanel" aria-labelledby="care-grooming-tab">
                        <PartnerCollection/>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="care-aid">
                        <PartnerCollection/>
                    </div>
                </div>
            </div> {/* /.row */}
        </div> {/* .care-partner-tabs */}
    </Fragment>
    
  )
}
export default TabsPartners;