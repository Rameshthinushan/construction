import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'

const Staff = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col text-end mt-3 mb-3">
            <button 
              class="btn btn-sm site-btn me-2"
              onClick={handleShow}
            >
              <i className="bi bi-plus-circle-fill me-2"></i> Create New Staff
            </button>
            <button class="btn btn-sm btn-secondary">
              <i className="bi bi-funnel-fill me-2"></i>
              Filter
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li className="border-bottom fw-medium pb-1 pt-1 small">
                <div className="row">
                  <div className="col-9">Staff Details</div>
                  <div className="col-3">Action</div>
                </div>
              </li>
              {Array.from({ length: 12 }).map((_, index) => (
                <li
                  key={index} 
                  className="border-bottom pb-1 pt-1 small"
                >
                  <div className="row align-items-center">
                    <div className="col-8">
                      <div className="fw-medium">Ramesh Thinushan</div>
                      <div className="small">
                        <span className="text-secondary">NIC :</span> 000000000V
                      </div>
                      <div className="small">
                        <span className="text-secondary">Mobile Number :</span> 076xxxxxxx
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="row">
                        <div className="col text-end">
                          <button className="btn btn-sm btn-warning me-2">
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Body>
            <div className="row mb-2">
              <div className="col text-end">
                <button 
                  className="unset"
                  onClick={handleClose}
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="label-text">First Name <span className="text-danger">*</span></div>
                <input 
                  type="text" 
                  className="form-control rounded-1"
                  placeholder="Eg: Ramesh"
                />
              </div>
              <div className="col">
                <div className="label-text">Last Name</div>
                <input 
                  type="text" 
                  className="form-control rounded-1"
                  placeholder="Eg: Thinushan"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="label-text">NIC number <span className="text-danger">*</span></div>
                <input 
                  type="text" 
                  className="form-control rounded-1"
                  placeholder="Eg. xxxxxxxxxv"
                />
              </div>
              <div className="col">
                <div className="label-text">phone Number <span className="text-danger">*</span></div>
                <input 
                  type="text" 
                  className="form-control rounded-1"
                  placeholder="Eg.076xxxxxxx"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="label-text">Address Line 1 <span className="text-danger">*</span></div>
                <input 
                  type="text" 
                  className="form-control rounded-1"
                  placeholder="Enter Employee Address"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <input 
                  type="text" 
                  className="form-control rounded-1"
                  placeholder="Address Line 2"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="label-text">Site/Project <span className="text-danger">*</span></div>
                <Select 
                  options={options} 
                  placeholder="Employee Working Projects"
                  isMulti
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="label-text">Profile</div>
                <div className="border rounded-1 text-center">
                  <label for="profile" className="w-100 pt-3 pb-3">
                    <i className="bi bi-camera"></i>
                  </label>
                </div>
                <input type="file" name="" id="profile" className="d-none"/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <button className="btn btn-sm btn-primary w-100">Add Task</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  ); 
}

export default Staff