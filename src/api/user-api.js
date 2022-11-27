import { baseApi } from "./index";
var basic = require('basic-authorization-header');
window.Buffer = window.Buffer || require("buffer").Buffer; 

export const login = async ({un, pw}) => {
    console.log("[login]")
    const bsc = basic(un, pw)
    console.log({bsc})

    try{
        const res = await fetch(`${baseApi}/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                
                'Content-Type': 'application/json',
                'Authorization' : basic(un,pw),
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            body:{
                user: un,
                password: pw
            }
            
        })
        console.log(res);
    }catch(err){
        console.log(err.message)
    }
}
