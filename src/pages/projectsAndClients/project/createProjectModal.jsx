import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateProjectModal = ({show, handleClose}) => {
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
      <Modal.Header 
        closeButton 
        className="border-0" 
      />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form action="" onSubmit={createNewUser}>
              <div className="row mb-3">
                <div className="col-lg-2 mb-lg-0 mb-3">
                  <div className="align-items-center site-dash-border d-flex h-100 justify-content-around rounded-2">
                    <label for="user-image">
                      <i class="bi bi-image-alt fs-1"></i>
                    </label>
                    <input type="file" id="user-image" className="d-none"/>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="row mb-2">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="First Name"
                        name="first_name"
                        onChange={() => handelOnChange}
                        value={formData.first_name}
                      />
                    </div>
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Last Name"
                        name="last_name"
                        onChange={() => handelOnChange}
                        value={formData.last_name}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Contact Number 1"
                        name="phone"
                        onChange={() => handelOnChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Contact Number 2"
                        name="phone"
                        onChange={() => handelOnChange}
                        value={formData.phone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Email Address"
                        name="phone"
                        onChange={() => handelOnChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className="col small">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="NIC Number"
                        name="email"
                        onChange={() => handelOnChange}
                        value={formData.nic}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Address Line 1"
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
                    placeholder="Address Line 2"
                    name="address_line_2"
                    onChange={() => handelOnChange}
                    value={formData.address_line_2}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="City"
                    name="city"
                    onChange={() => handelOnChange}
                    value={formData.city}
                  />
                </div>
                <div className="col">
                  <div className="small"></div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Province"
                    name="province"
                    onChange={() => handelOnChange}
                    value={formData.province}
                  />
                </div>
                <div className="col">
                  <div className="small"></div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Postal code / Zip Code"
                    name="zip"
                    onChange={() => handelOnChange}
                    value={formData.zip}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col small">
                  <div className="mb-1 nav-font-color small">Email Notification</div>
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
              </div>
             
              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-sm btn-warning w-25">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CreateProjectModal