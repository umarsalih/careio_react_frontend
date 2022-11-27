import axios from 'axios';
export const getPartners = async (cb) =>{
    let res
    try{
        res = await axios.get('/mock-data/1 - partners_all.json', {
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
            if(cb) cb()
            return res
        }catch(e){
            console.error(`[careio::error] ${e}`)
        }
    } 
}