import React, { useState, useEffect, Fragment} from 'react';
const TabsPartners = (props) => {
  return (
    <Fragment>
        <div className="care-tabs">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>

        </div>
    </Fragment>
    
  )
}
export default TabsPartners;