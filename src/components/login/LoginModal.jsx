import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/login-store';
import axios from 'axios'

export default function LoginModal() {
    const dispatch = useDispatch()
    const login = (evt) =>{
        evt.preventDefault()
        return dispatch(setLogin(true))
    }
    
    const sampleFetch = async() => {
        const res = await axios.get('/mock-data/partners-all.json', {
            headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
        })
    }

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
                    <form action="/">
                        <div className="form-group">
                            <label htmlFor="care-user-un">Username</label>
                            <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="user"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="care_user-pw">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="password"/>
                        </div>
                        <button 
                            id="submitLogin" 
                            x-type="submit" 
                            data-bs-dismiss="modal"
                            className="login btn btn-primary my-2"
                            onClick={login}
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
