import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateStatusModal = ({show, handleClose}) => {
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
                <div className="col">
                  <div className="row mb-2">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="New Status"
                        name="first_name"
                        onChange={() => handelOnChange}
                        value={formData.first_name}
                      />
                    </div>
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

export default CreateStatusModal