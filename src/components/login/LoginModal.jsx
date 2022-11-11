import React, { Fragment } from 'react'

export default function LoginModal() {
  return (
    <Fragment>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="btn-close align-self-end d-inline p-2" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                    <div className="modal-body p-5`">
                    <form>
                        <div className="form-group">
                            <label htmlFor="care-user-un">Username</label>
                            <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="user"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="care_user-pw">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="password"/>
                        </div>
                        <button id="submitLogin" type="submit" className="login btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div> {/* /.modal-content */}
            </div>
        </div>
    </Fragment>
  )
}
