const login = () => {
    try{
        const res = await fetch(`http://localhost:8080/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            body:{
                user: ,
                password: pwString
            }
            
        })
        console.log(res);
    }catch(err){
        console.log(err.message)
    }
}