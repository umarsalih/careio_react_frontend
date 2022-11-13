// Booking
import axios from 'axios';

export const createBooking = async (bookingObj, cb) => {
    if(!bookingObj) bookingObj ={
        "userId": 10,
        "serviceProviderId": 21,
        "bookingDate": "01-04-2023",
        "startTime": "10:00",
        "endTime": "12:00",
        "totalPrice": 123,
        "bookingKey": "123",
        "isFinished": 0
    }

    try{
        const options = {
            url: 'http://localhost:8080/booking/',
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            body: bookingObj,
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
            url: 'http://localhost:8080/booking/',
            };
        const res = await axios(options);
        console.log({res})
        if(cb) cb()
    } catch(e) {
        console.error(`[careio::error] ${e}`)
    }
}
