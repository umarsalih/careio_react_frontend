// Booking
export const createBooking = () => {
    const bodySample ={
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
        console.log(JSON.stringify(bodySample))

        fetch(`${Config.HOST}/booking`, {
            method: 'POST',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            body: JSON.stringify(bodySample),
            json: true 
        })
    } catch(e){
        consele.error(`[careio::error] ${e.message}`)
    }

}
