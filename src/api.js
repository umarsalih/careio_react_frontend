// Booking
import axios from 'axios';


// 

export const sendRequest = async (options = {
    method: 'POST', 
    body: {},
    url: "http://localhost:8080"
}, cb) => {
    console.log({options})
    const {method, body, url} = options
    try{
        const options = {
            url,
            method,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            json: true 
        }

        if (body && body !== {} ) options[body] = body
        const res = await axios(options);
        if(cb) cb()
        return res.data
    } catch(e){
        console.error(`[careio::error] ${e.message}`)
        return {}
    }

}

export const createBooking = async (bookingObj, cb) => {
    if(!bookingObj) bookingObj ={
        
        // "bookingID": 2,
        "userId": 3,
        "serviceProviderId": 4,
        "bookingDate": "2021-01-01T00:00:00",
        "startTime": "2021-01-01T00:00:00",
        "endTime": "2021-01-01T00:00:00",
        "totalPrice": 200,
        "bookingKey": "1",
        "isFinished": 1
    }

    try{
        const options = {
            url: 'http://localhost:8080/booking',
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            data: bookingObj,
            json: true 
            };
        const res = await axios(options);
        if(cb) cb()
        return res.data
    } catch(e){
        console.error(`[careio::error] ${e.message}`)
        return {}
    }

}

export const getBookings = async(cb) => {
    console.log('[getBookings]')
    try{
        const options = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            json: true,
            url: 'http://localhost:8080/booking',
            };
        const res = await axios(options);
        console.log({res})
        if(cb) cb()
    } catch(e) {
        console.error(`[careio::error] ${e}`)
    }
}





// :: LEGACY ::
// this was at booking modal
export const initCreateBooking = async (user, partner, bookingDetails) =>{
    const data = {
        user_id: user.userId,
        partner_id: partner.partnerId,
        time_start: bookingDetails.timeStart,
        time_end: bookingDetails.timeEnd,
        date: bookingDetails.date,
        services: bookingDetails.services,
        total_price: bookingDetails.total_price
    }
    const res = await axios.post('/booking', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            data
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}