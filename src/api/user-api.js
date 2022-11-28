import { baseApi } from "./index";
import axios from 'axios';
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

export const createUser = async (userObj, cb) => {
    if(!userObj){
        userObj = {
            "email" : "macci@gmail.com",
            "password" : "macci@123",
            "firstName" : "Jennifer",
            "lastName" : "macranas",
            "contact" : "778292183",
            "address" : "macci address",
            "city" : "Surrey",
            "province" : "British Columbia" 
          }
    }
    

    try{
        const options = {
            url: `${baseApi}/customer`,
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            data: userObj,
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
