import axios from 'axios';

export const createBooking = async (bookingObj, cb) => {
    if(!bookingObj) bookingObj ={
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
        return res.data
    } catch(e) {
        console.error(`[careio::error] ${e}`)
    }
}