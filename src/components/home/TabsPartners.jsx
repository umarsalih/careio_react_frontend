import React, { Fragment} from 'react';
import PartnerCollection from '../partners/PartnersCollection';
const TabsPartners = (props) => {
  return (
    <Fragment>
        <div className="care-partner-tabs container">
            <div className="row care-tabs-nav">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="care-maintenance-tab" data-bs-toggle="pill" data-bs-target="#care-maintenance" type="button" role="tab" aria-controls="care-maintenance" aria-selected="true">
                            <i className="fa-brands fa-html5"></i> &nbsp; Home Maintenance
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="care-grooming-tab" data-bs-toggle="pill" data-bs-target="#care-grooming" type="button" role="tab" aria-controls="care-grooming" aria-selected="false">
                            <i className="fa-regular fa-user"></i> &nbsp; Personal Grooming
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="care-aid" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <i className="fa-solid fa-hand-holding-hand"></i> &nbsp; Care Aid
                        </button>
                    </li>
                </ul>
            </div>    
                
            <div id="row care-tabs-content tab-content">
                <div className="tab-pane fade " id="care-maintenance" role="tabpanel" aria-labelledby="care-maintenance-tab">
                    <PartnerCollection category="home maintenance"/>
                </div>
                <div className="tab-pane fade show active" id="care-grooming" role="tabpanel" aria-labelledby="care-grooming-tab">
                    <PartnerCollection category="grooming"/>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="care-aid">
                    <PartnerCollection category='care aid'/>
                </div>
            </div>
        </div> {/* .care-partner-tabs */}
    </Fragment>
    
  )
}
export default TabsPartners;