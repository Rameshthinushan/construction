import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateRoleModal = ({show, handleClose}) => {
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
      size="md"
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
                {/* <div className="col-lg-2 mb-lg-0 mb-3">
                  <div className="align-items-center site-dash-border d-flex h-100 justify-content-around rounded-2">
                    <label for="user-image">
                      <i class="bi bi-image-alt fs-1"></i>
                    </label>
                    <input type="file" id="user-image" className="d-none"/>
                  </div>
                </div> */}
                <div className="col">
                  <div className="row mb-2">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="New Role"
                        name="first_name"
                        onChange={() => handelOnChange}
                        value={formData.first_name}
                      />
                    </div>
                    {/* <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Last Name"
                        name="last_name"
                        onChange={() => handelOnChange}
                        value={formData.last_name}
                      />
                    </div> */}
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <textarea 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Comments"
                        name="email"
                        onChange={() => handelOnChange}
                        value={formData.nic}
                      />
                    </div>
                    {/* <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Mobile Number"
                        name="phone"
                        onChange={() => handelOnChange}
                        value={formData.phone}
                      />
                    </div> */}
                  </div>
                  <div className="row">
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
                      <label className="form-check-label" for="male">Active</label>
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
                      <label className="form-check-label" for="female">Non Active</label>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row mb-2">
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
              </div> */}
              {/* <div className="row mb-2">
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
              </div> */}
              {/* <div className="row mb-3">
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
              </div> */}
              {/* <div className="row mb-lg-2 mb-3">
                <div className="col small">
                  {
                    role.map((r, i) => (
                      <div 
                        className="form-check form-check-inline" 
                        key={i}
                      >
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="role" 
                          id="role" 
                          onChange={() => handelOnChange}
                          value={r.id}
                        />
                        <label 
                          className="form-check-label" 
                          for="inlineRadio2"
                        >
                          {r.text}
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div> */}
              {/* <div className="row mb-3">
                <div className="col-lg-4 mb-lg-0 mb-2">
                  <div className="small"></div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" p
                    placeholder="User Name"
                    name='username'
                    onChange={() => handelOnChange}
                    value={formData.username}
                  />
                </div>
                <div className="col-lg-4 col-6">
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Password"
                    name="password"
                    onChange={() => handelOnChange}
                    value={formData.password}
                  />
                </div>
                <div className="col-lg-4 col-6">
                  <div className="small"></div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Confirm Password"
                    name="confirm_password"
                    onChange={() => handelOnChange}
                    value={formData.confirm_password}
                  />
                </div>
              </div> */}
              <div className="row mb-3">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className='border-bottom mb-2 pb-2'> Set user Permisions </div>
                    </div>
                  </div>
                  <div className="row small">
                    {
                      Array.from({length: 12}).map((_, i) => (
                        <div 
                          className="col-lg-4 col-md-6 col-6 mb-2" 
                          key={i}
                        >
                          <div className="form-check">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              value="" 
                              id="defaultCheck1" 
                            />
                            <label 
                              className="form-check-label" 
                              for="defaultCheck1"
                            >
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

export default CreateRoleModal