import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/login-store';
import axios from 'axios'

export default function LoginModal() {
    const dispatch = useDispatch()
    const [loginMeta, setLoginMeta] = useState({
        username: 'user',
        password: 'password'
    });

    const initLogin = async () =>{
        const res = await axios.post('/login/client', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                data:{
                username: loginMeta.username,
                password: loginMeta.password
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log({res})

        // return dispatch(setLogin(true))
    }

    const handleChange = async(evt) =>{
        const val = evt.target.value
        const propKey = evt.target.dataset.name
        console.log({propKey, val})
        setLoginMeta({
            ...loginMeta,
            [propKey]: val
        })
        
    }
    
    // const initLogin = async() => {
    //     const res = await axios.get('/mock-data/partners-all.json', {
    //         headers : { 
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //                }
    //     })
    // }

  return (
    <Fragment>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="btn-close btn-close-white align-self-end d-inline p-2" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                    <div className="modal-body p-5">
                    <h3>
                        Log In To Book A Partner
                    </h3>
                    {loginMeta.username} {loginMeta.password}
                    <form action="/">
                        <div className="form-group">
                            <label htmlFor="care-user-un">Username</label>
                            <input type="text" 
                                data-name='username'
                                onInput={handleChange}
                                className="form-control"  id="inputUsername" aria-describedby="emailHelp" placeholder="user"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="care_user-pw">Password</label>
                            <input type="password" 
                                data-name='password'
                                onInput={handleChange}
                                className="form-control" 
                                id="inputPassword" 
                                placeholder="password"/>
                        </div>
                        <button 
                            id="submitLogin" 
                            x-type="submit" 
                            data-bs-dismiss="modal"
                            className="login btn btn-primary my-2"
                            onClick={initLogin}
                        >
                                Log In
                        </button>
                        </form>
                        <hr/>
                        <h3>
                            No account yet?
                        </h3>
                        <Link to='/signup'>
                            Sign up with us
                        </Link>
                    </div>
                </div> {/* /.modal-content */}
            </div>
        </div>
    </Fragment>
  )
}
