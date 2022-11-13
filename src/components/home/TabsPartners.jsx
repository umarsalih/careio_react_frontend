import React, { Fragment,  useState, useEffect} from 'react';
import PartnerCollection from '../partners/PartnersCollection';
import axios from 'axios'

const TabsPartners = (props) => {
    const [partners, setPartners] = useState([])
    
    const fetchPartners = async () =>{
        let res
        try{
            res = await axios.get('/mock-data/1 -  partners_all.json', {
                headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                       }
            })
            console.log({res})
        }catch(e){
            console.error(`[careio::error] ${e.message}`)
        }
        
        if(res.status === 200 && res.data.length){
            try{
                setPartners(res.data)
            }catch(e){
                console.error(`[careio::error] ${e}`)
            }
        } 
    }

    useEffect(()=>{
        if(partners.length) return
        fetchPartners()
    },[])

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
                    <PartnerCollection partners={partners} category="home maintenance"/>
                </div>
                <div className="tab-pane fade show active" id="care-grooming" role="tabpanel" aria-labelledby="care-grooming-tab">
                    <PartnerCollection partners={partners} category="grooming"/>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="care-aid">
                    <PartnerCollection partners={partners} category='care aid'/>
                </div>
            </div>
        </div> {/* .care-partner-tabs */}
    </Fragment>
    
  )
}
export default TabsPartners;