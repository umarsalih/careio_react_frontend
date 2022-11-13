import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, setLogin , currentUser} from '../../store/login-store';
import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const isLogged = useSelector(isLoggedIn)
    const user = useSelector(currentUser)
    const dispatch = useDispatch()
    const path = useLocation().pathname
    

  return (
    <div id="CareNav" className="navbar careio-nav">
            <Link to="/" className='logo-holder'>
                <img src={require('./../../images/brand/care-logo-white.png')}/>
            </Link>
            <nav>
                <ul>
                    {(path!=='/')?
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    : ''
                    }
                    
                        { !isLogged ?  (
                            <Fragment>
                            <li>
                                <Link to="/signup" className="text-white mx-3">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <span type="button" 
                                    className="text-white mx-3" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#loginModal">
                                    Log In
                                </span>
                            </li>    
                            </Fragment>
                        ) : (
                            <Fragment>
                                
                                <li>
                                    <span className='text-light'>
                                    Welcome, {user.username}
                                    </span>
                                </li>
                                <li>
                                    <span type="button" 
                                        className="text-white mx-3" 
                                        data-bs-toggle="modal" 
                                        onClick={() => dispatch(setLogin(false))}
                                    >
                                        Log Out
                                    </span>
                                </li>
                            </Fragment>
                        )}
                </ul>
            </nav>
    </div>
  )
}

export default Nav