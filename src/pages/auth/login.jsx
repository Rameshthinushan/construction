import React from 'react'

function Login() {
  return (
    <div className="container-fluid login-container">
      <div className="row vh-100 vh-100 align-items-center">
        <div className="col-lg-3 col-md-6 col-11 mx-auto">
          <div className="row">
            <div className="col">
              <div className="site-bg-compo p-4 rounded-1 border border-1 border-secondary">
                <div className="dec-font-color fs-1 fw-medium">Login</div>
                <div className="dec-font small">Enter Your Login Details ✌️</div>
                <div className="mt-3">
                  <div className="small">User Name</div>
                  <input type="text" className='form-control form-control-sm p-3' placeholder='e.g. Johnny Sins'/>
                </div>
                <div className="mt-3">
                  <div className="small">Password</div>
                  <input type="text" className='form-control form-control-sm p-3' placeholder='e.g. ..........'/>
                </div>
                <div className="text-end mt-3 mb-3 small">Forget Your Password</div>
                <div>
                  <button className="btn btn-sm btn-site w-100 p-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Login