import {Modal} from 'react-bootstrap';

const CreateUserModal = ({show, handleClose}) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      size="lg"
    >
      <div className="row">
        <div className="col text-end">
          <button
            onClick={handleClose} 
            className="unset me-3 mt-3"
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form action="">
              <div className="row mb-3">
                <div className="col-lg-2 mb-lg-0 mb-3">
                  <div className="align-items-center site-dash-border d-flex h-100 justify-content-around rounded-2">
                    <label for="user-image">
                      <img src="assets/site-images/image-.png" alt="" height="50" className="m-4"/>
                    </label>
                    <input type="file" id="user-image" className="d-none"/>
                    
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="row mb-2">
                    <div className="col">
                      <div className="small">First Name</div>
                      <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. johnny"/>
                    </div>
                    <div className="col">
                      <div className="small">Last Name</div>
                      <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. Sins"/>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <div className="small">Email Address</div>
                      <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. JSins@domin.com"/>
                    </div>
                    <div className="col">
                      <div className="small">Mobile Number</div>
                      <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. 076 xxx xxxx"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col small">
                      <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" for="inlineRadio2">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="small">Address Line 1</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="Your Street Name Line 1"/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <input type="text" className="form-control form-control-sm p-2" placeholder="Your Street Name Line 2"/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="small">City</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. jaffna"/>
                </div>
                <div className="col">
                  <div className="small">province</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. Northern"/>
                </div>
                <div className="col">
                  <div className="small">Zip Code</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. 40000"/>
                </div>
              </div>

              <div className="row mb-lg-2 mb-3">
                <div className="col small">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">Super Admin</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">Admin</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">Manager</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">Technical Officer</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4 mb-lg-0 mb-2">
                  <div className="small">User Name</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. JSins"/>
                </div>
                <div className="col-lg-4 col-6">
                  <div className="small">Password</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. ........."/>
                </div>
                <div className="col-lg-4 col-6">
                  <div className="small">Confirm Password</div>
                  <input type="text" className="form-control form-control-sm p-2" placeholder="e.g. ........."/>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className='border-bottom border-secondary mb-2 pb-2'> 
                        <div className="form-check">
                          <input className="form-check-input form-check" type="checkbox" value="" id="defaultCheck1" />
                          <label className="form-check-label mt-1 ms-2" for="defaultCheck1">
                            Set user Permisions
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row small">
                    {
                      Array.from({length: 12}).map((_, i) => (
                        <div className="col-lg-3 col-md-4 col-6 mb-2" key={i}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label className="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col">
                  <button className="btn btn-sm btn-site w-100">Submit</button>
                </div>
              </div>
            </form>



          </div>
        </div>

        
      </Modal.Body>
      
    </Modal>
  )
}

export default CreateUserModal