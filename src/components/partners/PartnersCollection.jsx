import { Fragment } from 'react'
import PartnerCard from './PartnerCard'

const PartnerCollection = () =>{
    return(
        <Fragment>
            <div className="row">
                <PartnerCard/>
                <PartnerCard/>
                <PartnerCard/>
                <PartnerCard/>
                <PartnerCard/>
            </div>
        </Fragment>

    )
}

export default PartnerCollection