import React from 'react'

const Profile = () => {
  return (
    <div className="row">
      <div className="col">

        <div className="row mb-3">
          <div className="bg-white col m-2 m-lg-0 p-3 rounded-3 shadow">
            <div className="row">
              <div className="col-lg-8">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-12 text-center mb-lg-0 mb-2">
                    <img 
                      src="/assets/site-images/liveuser.jpg" 
                      alt="" height={100} 
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-lg-8 col-12">
                    <div className="fs-5 fw-medium text-center text-lg-start">Ramesh Thinushan</div>
                    <div className="nav-font-color small text-center text-lg-start">Employee</div>
                    <div className="d-lg-block d-none nav-font-color small">32 Patrick's Rd, Jaffna, Sl</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-end">
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-pencil me-2"></i>Edit
                </button>
              </div>
            </div>
            
          </div>
        </div>

        <div className="row mb-3">
          <div className="col p-3 rounded-3 bg-white shadow m-2 m-lg-0">
            <div className="row">
              <div className="col-lg-10">
                <div className="fw-medium fs-5 mb-3">Presonal Information</div>
                <div className="d-flex mb-2">
                  <div className="w-50">
                    <div className="fw-medium small">First Name</div>
                    <div className="small nav-font-color">Ramesh</div>
                  </div>
                  <div>
                    <div className="fw-medium small">Last Name</div>
                    <div className="small nav-font-color">Thinushan</div>
                  </div>
                </div>

                <div className="d-flex mb-2">
                  <div className="w-50">
                    <div className="fw-medium small">NIC Number</div>
                    <div className="small nav-font-color">000000000v</div>
                  </div>
                  <div>
                    <div className="fw-medium small">Contact Number</div>
                    <div className="small nav-font-color">(076) 111 1111</div>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="w-50">
                    <div className="fw-medium small">Bio</div>
                    <div className="small nav-font-color">Employee</div>
                  </div>
                  {/* <div>
                    <div className="fw-medium">Contact Number</div>
                    <div className="small nav-font-color">(076) 111 1111</div>
                  </div> */}
                </div>

              </div>
              <div className="col-lg-2 text-end">
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-pencil me-2"></i>Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col p-3 rounded-3 bg-white shadow m-2 m-lg-0">
            <div className="row">
              <div className="col-lg-10">
                <div className="fw-medium fs-5 mb-3">Address</div>
                <div className="d-flex mb-2">
                  <div className="w-50">
                    <div className="fw-medium small">Street</div>
                    <div className="small nav-font-color">32 Patrick's Rd</div>
                  </div>
                  <div>
                    <div className="fw-medium small">City</div>
                    <div className="small nav-font-color">Jaffna</div>
                  </div>
                </div>

                <div className="d-flex mb-2">
                  <div className="w-50">
                    <div className="fw-medium small">State / Province</div>
                    <div className="small nav-font-color">Northan</div>
                  </div>
                  <div>
                    <div className="fw-medium small">Zip / Postal code</div>
                    <div className="small nav-font-color">40000</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 text-end">
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-pencil me-2"></i>Edit
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile