import { Fragment } from 'react'
import PartnerCard from './PartnerCard'

const PartnerCollection = ({
    category="grooming",
    partners=[]
}) =>{   
   
    return(
        <Fragment>
            <div className="row">
            {
                partners.map( partner => {
                    if(partner.service_categories.includes(category)){
                        return <PartnerCard
                            key={partner.partner_id}
                            partnerId={partner.partner_id}
                            firstName={partner.first_name}
                            lastName={partner.last_name}
                            services={partner.services}
                            hourlyRate={partner.hourly_rate}
                            desc={partner.desc}
                        />
                    }
                })
            }
        
            </div>
        </Fragment>

    )
}

export default PartnerCollection