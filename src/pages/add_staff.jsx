import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const AddStaff = () => {
  const [formState, setFormState] = useState({
    staffName: "",
    nic: "",
    address: "",
    joinedDate: "",
    site: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));

    handleValidation(id, value);
  };

  const handleValidation = (field = null, value = null) => {
    const newErrors = { ...errors }; // Start with the existing errors

    if (!field || field === "staffName") {
      const staffNameValue = field === "staffName" ? value : formState.staffName;
      if (!staffNameValue.trim()) {
        newErrors.staffName = "Please provide a valid staff name.";
      } else {
        delete newErrors.staffName;
      }
    }
    if (!field || field === "nic") {
      const nicValue = field === "nic" ? value : formState.nic;
      if (!nicValue.trim()) {
        newErrors.nic = "Please provide a valid NIC.";
      } else {
        delete newErrors.nic;
      }
    }
    if (!field || field === "address") {
      const addressValue = field === "address" ? value : formState.address;
      if (!addressValue.trim()) {
        newErrors.address = "Please provide a valid address.";
      } else {
        delete newErrors.address;
      }
    }
    if (!field || field === "joinedDate") {
      const joinedDateValue = field === "joinedDate" ? value : formState.joinedDate;
      if (!joinedDateValue.trim()) {
        newErrors.joinedDate = "Please select a joined date.";
      } else {
        delete newErrors.joinedDate;
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

      <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-2 text-center">
            <h5 className="bg-body-secondary mb-0 p-2">Add Staff</h5>
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="staffName" className="form-label">
              Staff Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.staffName ? "is-invalid" : ""}`}
              id="staffName"
              placeholder="Enter staff name..."
              value={formState.staffName}
              onChange={handleChange}
            />
            {errors.staffName && (
              <div className="invalid-feedback">{errors.staffName}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="nic" className="form-label">
              NIC
            </label>
            <input
              type="text"
              className={`form-control ${errors.nic ? "is-invalid" : ""}`}
              id="nic"
              placeholder="Enter NIC..."
              value={formState.nic}
              onChange={handleChange}
            />
            {errors.nic && (
              <div className="invalid-feedback">{errors.nic}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              id="address"
              rows="3"
              placeholder="Enter Address..."
              value={formState.address}
              onChange={handleChange}
            ></textarea>
            {errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="joinedDate" className="form-label">
              Joined Date
            </label>
            <input
              type="date"
              className={`form-control ${errors.joinedDate ? "is-invalid" : ""}`}
              id="joinedDate"
              value={formState.joinedDate}
              onChange={handleChange}
            />
            {errors.joinedDate && (
              <div className="invalid-feedback">{errors.joinedDate}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="site" className="form-label">
              Site
            </label>
            <select
              className="form-select"
              id="site"
              value={formState.site}
              onChange={handleChange}
            >
              <option value="">Choose Site...</option>
              <option value="1">Site A</option>
              <option value="2">Site B</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col text-end">
          <button className="btn btn-secondary rounded-0" type="submit">
              Add Staff
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
