import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const AddShift = () => {
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

      <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-2 text-center">
            <h5 className="bg-body-secondary mb-0 p-2">Add Shift</h5>
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="site" className="form-label">
              Site
            </label>
            <select
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
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="staffName" className="form-label">
              Staff Name
            </label>
            <select
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
            )}
          </div>
        </div>

        <div className="row">
          <div className="col text-end">
            <button className="btn btn-secondary rounded-0" type="submit">
              Add Shift
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddShift;