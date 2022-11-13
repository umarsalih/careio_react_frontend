import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, toggleLogin, setLogin , currentUser} from '../../store/login-store';
import { Link } from 'react-router-dom'

function Nav() {
    const isLogged = useSelector(isLoggedIn);
    const user = useSelector(currentUser);
    const dispatch = useDispatch()

  return (
    <div id="CareNav" class="navbar careio-nav">
            <Link to="/" className='logo-holder'>
                <img src={require('./../../images/brand/care-logo-white.png')}/>
            </Link>
            <nav>
                <ul>
                    <li>
                        { !isLogged ?  (
                            <div>
                                <Link to="/signup" className="text-white mx-3">
                                    Sign Up
                                </Link>
                                &nbsp;
                                <span type="button" 
                                    className="text-white mx-3" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#loginModal">
                                    Log In
                                </span>
                            </div>
                        ) : (
                            <div>
                                <span>
                                    You are logged in as {}
                                </span>
                                <span type="button" 
                                    className="text-white mx-3" 
                                    data-bs-toggle="modal" 
                                    onClick={() => dispatch(setLogin(false))}
                                >
                                    Log Out
                                </span>
                            </div>
                        )}
                    </li>
                    
                </ul>
            </nav>
    </div>
  )
}

export default Nav