import React, { useState } from "react";
import NavMobile from "./nav_mobile";
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'

const AddShift = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [formState, setFormState] = useState({
    site: "",
    staffName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));

    handleValidation(id, value);
  };

  const handleValidation = (field = null, value = null) => {
    const newErrors = { ...errors }; // Start with the existing errors

    if (!field || field === "site") {
      const siteValue = field === "site" ? value : formState.site;
      if (!siteValue.trim()) {
        newErrors.site = "Please choose a valid site.";
      } else {
        delete newErrors.site;
      }
    }
    if (!field || field === "staffName") {
      const staffNameValue = field === "staffName" ? value : formState.staffName;
      if (!staffNameValue.trim()) {
        newErrors.staffName = "Please choose a valid staff name.";
      } else {
        delete newErrors.staffName;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      console.log(formState)
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-lg-none">
          <NavMobile />
        </div>
      </div>
      <div className="row">
        <div className="col text-end mt-3 mb-3">
          <button 
            class="btn btn-sm site-btn me-2"
            onClick={handleShow}
          >
            <i className="bi bi-plus-circle-fill me-2"></i> Add Shift
          </button>
          <button class="btn btn-sm btn-warning me-2">
            <i className="bi bi-pause-fill me-2"></i>
            Bulk Stop
          </button>
          <button class="btn btn-sm btn-danger">
            <i className="bi bi-stop-circle me-2"></i>
            Bulk End
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul className="list-unstyled">
            <li className="border-bottom fw-medium pb-1 pt-1 small">
              <div className="row">
                <div className="col-9">Staff Details</div>
                <div className="col-3 text-center">Action</div>
              </div>
            </li>
            {Array.from({ length: 12 }).map((_, index) => (
              <li
                key={index} 
                className="border-bottom pb-1 pt-1 small"
              >
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                      <div>
                        <div className="fw-medium">Ramesh Thinushan</div>
                        <div className="small">
                          <span className="text-secondary">NIC :</span> 000000000V
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col text-end">
                        <button className="btn btn-sm btn-warning me-2">
                          <i className="bi bi-pause-fill"></i>
                        </button>
                        <button className="btn btn-sm btn-danger">
                          <i className="bi bi-stop-circle"></i>
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
          <div className="row mb-2 align-items-center">
            <div className="col fw-medium fs-5">Add Shift</div>
            <div className="col text-end">
              <button 
                className="unset"
                onClick={handleClose}
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col">
                    <div className="label-text">Site</div>
                    {/* <select
                      className={`form-select ${errors.site ? "is-invalid" : ""}`}
                      id="site"
                      value={formState.site}
                      onChange={handleChange}
                    >
                      <option value="">Choose Site...</option>
                      <option value="1">Site A</option>
                      <option value="2">Site B</option>
                    </select>
                    {errors.site && (
                      <div className="invalid-feedback">{errors.site}</div>
                    )} */}
                    <Select 
                      options={options} 
                      placeholder="Employee Working Projects"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="label-text">Staff Name</div>
                    {/* <select
                      className={`form-select ${errors.staffName ? "is-invalid" : ""}`}
                      id="staffName"
                      value={formState.staffName}
                      onChange={handleChange}
                    >
                      <option value="">Choose Staff...</option>
                      <option value="1">Puvii</option>
                      <option value="2">Thinu</option>
                    </select>
                    {errors.staffName && (
                      <div className="invalid-feedback">{errors.staffName}</div>
                    )} */}
                    <Select 
                      options={options} 
                      placeholder="Employee Names"
                      isMulti
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col text-end">
                    <button className="btn btn-primary w-100" type="submit">Add Task</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </div>
  );
};

export default AddShift;