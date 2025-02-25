import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateSupplierModal = ({show, handleClose}) => {
  const role = useSelector((state) => state.configration.value)
  const [formData, setFormData] = useState([{
    first_name: '',
    last_name: '',
    nic: '',
    phone: '',
    gender: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    province: '',
    zip: '',
    role: '',
    username: '',
    confirm_password: ''
  }]);
  

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
  }

  const createNewUser = (e) => {
    e.preventDefault();
  }


  
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
            <form action="" onSubmit={createNewUser}>
              <div className="row mb-3">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col">
                      <div className="small">Supplier Name</div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="e.g. johnny"
                        name="first_name"
                        onChange={() => handelOnChange}
                        value={formData.first_name}
                      />
                    </div>
                    <div className="col">
                      <div className="small">Supplier Nick Name</div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="e.g. Sins"
                        name="last_name"
                        onChange={() => handelOnChange}
                        value={formData.last_name}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <div className="small">Mobile Number</div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="e.g. 076 xxx xxxx"
                        name="phone"
                        onChange={() => handelOnChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className="col">
                      <div className="small">Email Addres</div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="e.g. example@gmail.com"
                        name="email"
                        onChange={() => handelOnChange}
                        value={formData.nic}
                      />
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col small">
                      <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="male" 
                        onChange={() => handelOnChange}
                        value={formData.gender} 
                      />
                      <label className="form-check-label" for="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="female" 
                        onChange={() => handelOnChange}
                        value={formData.gender} 
                      />
                      <label className="form-check-label" for="female">Female</label>
                    </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="small">Address Line 1</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Your Street Name Line 1"
                    name="address_line_1"
                    onChange={() => handelOnChange}
                    value={formData.address_line_1}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Your Street Name Line 2"
                    name="address_line_2"
                    onChange={() => handelOnChange}
                    value={formData.address_line_2}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="small">City</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="e.g. jaffna"
                    name="city"
                    onChange={() => handelOnChange}
                    value={formData.city}
                  />
                </div>
                <div className="col">
                  <div className="small">Province</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="e.g. Northern"
                    name="province"
                    onChange={() => handelOnChange}
                    value={formData.province}
                  />
                </div>
                <div className="col">
                  <div className="small">Zip Code</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="e.g. 40000"
                    name="zip"
                    onChange={() => handelOnChange}
                    value={formData.zip}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <textarea 
                    name="" 
                    id="" 
                    className="form-control form-control-sm"
                    placeholder="Comments.."
                  ></textarea> 
                </div>
              </div>
              <div className="row mb-lg-4 mb-3">
                <div className="col small">
                  <div className="mb-2 border-bottom pb-2 border-secondary">Active Status</div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Active
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Non Active
                    </label>
                  </div>

                </div>
                <div className="col small">
                  <div className="mb-2 border-bottom pb-2 border-secondary">Display Status</div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Display in System
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Hide in System
                    </label>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-sm btn-primary w-100">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CreateSupplierModal