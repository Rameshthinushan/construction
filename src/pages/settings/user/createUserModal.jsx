import {Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import Request from '../../../api';
const CreateUserModal = ({show, handleClose}) => {
  const [role, setRole] = useState([]);

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

  useEffect(() => {
    Request({
      url: '/get-role'
    })
      .then((res) => {
        if (res.message === 'success') {
          setRole(res.role)
        }
      })
      .catch((e) => {
        console.log("Error fetching roles:", e);
      });
  }, []);

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
  };

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
                      <div className="small">Last Name</div>
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
                      <div className="small">NIC Number</div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="xxxxxxxxxV"
                        name="email"
                        onChange={() => handelOnChange}
                        value={formData.nic}
                      />
                    </div>
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

              <div className="row mb-lg-2 mb-3">
                <div className="col small">
                  {
                    role.map((r, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="role" 
                          id="role" 
                          onChange={() => handelOnChange}
                          value={r.id}
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          {r.text}
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4 mb-lg-0 mb-2">
                  <div className="small">User Name</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" p
                    laceholder="e.g. JSins"
                    name='username'
                    onChange={() => handelOnChange}
                    value={formData.username}
                  />
                </div>
                <div className="col-lg-4 col-6">
                  <div className="small">Password</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="e.g. ........."
                    name="password"
                    onChange={() => handelOnChange}
                    value={formData.password}
                  />
                </div>
                <div className="col-lg-4 col-6">
                  <div className="small">Confirm Password</div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-2" 
                    placeholder="e.g. ........."
                    name="confirm_password"
                    onChange={() => handelOnChange}
                    value={formData.confirm_password}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className='border-bottom border-secondary mb-2 pb-2'> Set user Permisions </div>
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