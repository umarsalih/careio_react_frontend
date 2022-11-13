import React from 'react'
import "../../styles/nav.css";

function Nav() {
  return (
    <div id="CareNav" class="navbar">
            <a href="./index.html" class="logo"> 
                <p class="logo"> C &nbsp;&nbsp; A &nbsp;&nbsp;R &nbsp;&nbsp;E &nbsp;&nbsp;.&nbsp;i&nbsp;o </p>
            </a>
          
            <nav>
                <ul>
                    <li>
                        <a href="./signup.html">Sign Up</a>
                        
                    </li>

                    <li>
                        <a href="" class="premiumLink">Go Premium!</a>
                        
                    </li>

                    <li>
                        <button
                            id="LaunchLogin" 
                            type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalLogin"
                        >
                            Log in
                        </button>
                    </li>
                    
                </ul>
            </nav>
    </div>
  )
}

export default Nav