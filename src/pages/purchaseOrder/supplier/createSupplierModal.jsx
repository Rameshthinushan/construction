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
      <Modal.Header 
        closeButton 
        className="border-0" 
      />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form action="" onSubmit={createNewUser}>
              <div className="row mb-2">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Supplier Name"
                        name="first_name"
                        onChange={() => handelOnChange}
                        value={formData.first_name}
                      />
                    </div>
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Supplier Nick Name"
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
                        placeholder="Contact Number"
                        name="phone"
                        onChange={() => handelOnChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className="col">
                      <div className="small"></div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Email Addres"
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
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="Postal Code / Zip Code"
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
                  <div className="mb-2 border-bottom pb-2">Active Status</div>
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
                  <div className="mb-2 border-bottom pb-2">Display Status</div>
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
              <div className="row mb-4">
                <div className="col small">
                  <div className="mb-2 border-bottom pb-2">Orders Send Media</div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Email
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Message
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      By Hand
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      name="role" 
                      id="active" 
                      onChange={() => handelOnChange}
                      value="active"
                    />
                    <label className="form-check-label" for="active">
                      Over The Phone
                    </label>
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

export default CreateSupplierModal