import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const AddDailyLog = () => {
  const [formState, setFormState] = useState({
    site: "",
    staffName: "",
    task: "",
    measurement: "",
    quantity: "",
    note: ""
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
    if (!field || field === "task") {
      const taskValue = field === "task" ? value : formState.task;
      if (!taskValue.trim()) {
        newErrors.task = "Please choose a valid staff name.";
      } else {
        delete newErrors.task;
      }
    }
    if (!field || field === "measurement") {
      const measurementValue = field === "measurement" ? value : formState.measurement;
      if (!measurementValue.trim() || measurementValue == 0) {
        newErrors.measurement = "Please choose a valid measurement.";
      } else {
        delete newErrors.measurement;
      }
    }
    if (!field || field === "quantity") {
      const quantityValue = field === "quantity" ? value : formState.quantity;
      if (!quantityValue.trim() || quantityValue == 0) {
        newErrors.quantity = "Please provide a valid quantity.";
      } else {
        delete newErrors.quantity;
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
    <div className="">
      <div className="row">
        <div className="col d-lg-none">
          <NavMobile to="/"/>
        </div>
      </div>

      <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-2 text-center">
            <h5 className="bg-body-secondary mb-0 p-2">Add Daily Log</h5>
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
          <div className="col mb-3">
            <label htmlFor="task" className="form-label">
              Task
            </label>
            <select
              className={`form-select ${errors.task ? "is-invalid" : ""}`}
              id="task"
              value={formState.task}
              onChange={handleChange}
            >
              <option value="">Choose Task...</option>
              <option value="1">Task 1</option>
              <option value="2">Task 2</option>
              <option value="3">Task 3</option>
              <option value="4">Task 4</option>
            </select>
            {errors.task && (
              <div className="invalid-feedback">{errors.task}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="measurement" className="form-label">
              Measurement
            </label>
            <select
              className={`form-control ${errors.measurement ? "is-invalid" : ""}`}
              id="measurement"
              value={formState.measurement}
              onChange={handleChange}
            >
              <option value="">Choose Measurement...</option>
              <option value="1">Centimeters</option>
              <option value="2">Meters</option>
              <option value="3">Kilometers</option>
              <option value="4">Cube</option>
            </select>
            {errors.measurement && (
              <div className="invalid-feedback">{errors.measurement}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
              id="quantity"
              placeholder="Enter Amount..."
              step="0.01"
              min="0"
              value={formState.quantity}
              onChange={handleChange}
            />
            {errors.quantity && (
              <div className="invalid-feedback">{errors.quantity}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <textarea
              className="form-control"
              id="note"
              rows="3"
              placeholder="Enter Note..."
              value={formState.note}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-end">
            <button className="btn btn-secondary rounded-0" type="submit">
              Add Log
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDailyLog;