import { Fragment, useState, useEffect } from 'react'
import PartnerCard from './PartnerCard'
import axios from 'axios'

const PartnerCollection = ({
    category="grooming"
}) =>{   
    // const [isFetched, setIsFetched] = useState(false) 
    const [partners, setPartners] = useState([])
    
    const fetchPartners = async () =>{
        if(partners.length) return
        const res = await axios.get('/mock-data/partners-all.json', {
            headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
        })
        console.log({res})
        if(res.status === 200 && res.data.length){
            try{
                setPartners(res.data)
            }catch(e){
                console.error(e)
            }
        } 
    }

    useEffect(()=>{
        fetchPartners()
    },[])
    
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
                        />
                    }
                })
            }
        
            </div>
        </Fragment>

    )
}

export default PartnerCollection