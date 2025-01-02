import React, { useState } from "react";
import NavMobile from "./nav_mobile";
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'

const AddSiteInventory = () => {
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
    rawMaterials: [
      {
        material: "",
        measurement: "",
        quantity: "",
      },
    ],
    note: "",
    attachment: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e, index = null, field = null) => {
    const { value } = e.target;
  
    if (index !== null && field) {
      setFormState((prevState) => {
        const updatedMaterials = [...prevState.rawMaterials];
        updatedMaterials[index][field] = value;
        return { ...prevState, rawMaterials: updatedMaterials };
      });
      handleValidation(index, field, value);
    } else {
      const { id } = e.target;
      setFormState((prevState) => ({ ...prevState, [id]: value }));
      handleValidation(null, id, value);
    }
  };

  const handleValidation = (index = null, field = null, value = null) => {
    const newErrors = { ...errors };

    if (!field || field === "site") {
      const siteValue = field === "site" ? value : formState.site;
      if (!siteValue.trim()) {
        newErrors.site = "Please choose a valid site.";
      } else {
        delete newErrors.site;
      }
    }

    const rawMaterialsValid = formState.rawMaterials.every((material, i) => {
      const materialValue = index === i && field === "material" ? value : material.material;
      const measurementValue = index === i && field === "measurement" ? value : material.measurement;
      const quantityValue = index === i && field === "quantity" ? value : material.quantity;
  
      let isValid = true;
  
      if (!materialValue.trim()) {
        newErrors[`rawMaterials[${i}].material`] = "Please choose a valid material.";
        isValid = false;
      } else {
        delete newErrors[`rawMaterials[${i}].material`];
      }
  
      if (!measurementValue.trim()) {
        newErrors[`rawMaterials[${i}].measurement`] = "Please choose a valid measurement.";
        isValid = false;
      } else {
        delete newErrors[`rawMaterials[${i}].measurement`];
      }
  
      if (!quantityValue || quantityValue <= 0) {
        newErrors[`rawMaterials[${i}].quantity`] = "Please enter a valid quantity.";
        isValid = false;
      } else {
        delete newErrors[`rawMaterials[${i}].quantity`];
      }
  
      return isValid;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      console.log(formState);
      alert("Form submitted successfully!");
    }
  };

  const addRawMaterialContainer = () => {
    setFormState((prevState) => ({
      ...prevState,
      rawMaterials: [
        ...prevState.rawMaterials,
        { material: "", measurement: "", quantity: "" },
      ],
    }));
  };

  const removeRawMaterialContainer = (index) => {
    if (formState.rawMaterials.length > 1) {
      setFormState((prevState) => ({
        ...prevState,
        rawMaterials: prevState.rawMaterials.filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <div className="">
      <div className="row">
        <div className="col d-lg-none">
          <NavMobile 
            to='/'
          />
        </div>
      </div>

      <div className="row">
        <div className="col text-end mt-3 mb-3">
          <button 
            class="btn btn-sm site-btn me-2"
            onClick={handleShow}
          >
            <i className="bi bi-plus-circle-fill me-2"></i> 
            Add Site Inventory
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
                <div className="col-9">Inventory Details</div>
                <div className="col-3 text-center">Action</div>
              </div>
            </li>
            {Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index} 
                className="border-bottom pb-1 pt-1 small"
              >
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <i className="bi bi-chevron-right"></i>
                      </div>
                      <div>
                        <div className="fw-medium">Project - {index}</div>
                      </div>
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
        fullscreen={true}
        centered
      > 
        <Modal.Body>
          <div className="row mb-2 align-items-center">
            <div className="col-10 fw-medium fs-5">Add Site Inventory</div>
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
                <div className="row">
                  <div className="col mb-3">
                    {/* <div className="label-text">Site</div> */}
                    <Select 
                      options={options} 
                      placeholder="Select Your Working Project"
                    />
                    {/* <select
                      className={`form-control ${errors.site ? "is-invalid" : ""}`}
                      id="site"
                      value={formState.site}
                      onChange={handleChange}
                    >
                      <option value="">Choose Site...</option>
                      <option value="1">Site A</option>
                      <option value="2">Site B</option>
                    </select>
                    {errors.site && <div className="invalid-feedback">{errors.site}</div>} */}
                  </div>
                </div>

                <div className="border rounded-2 p-2 pt-3 pb-3 mb-3">
                  {formState.rawMaterials.map((rawMaterial, index) => (
                    <div className=" p-1 mb-2" key={index}>
                      <div className={`row ${formState.rawMaterials.length === 1 ? "d-none" : ""} mb-2`}>
                        <div className="col mt-1 text-end">
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => removeRawMaterialContainer(index)}
                          >
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col mb-3">
                          {/* <div className="label-text">Raw Material</div> */}
                          <Select 
                            options={options} 
                            placeholder="Raw Material"
                          />
                          {/* <select
                            className={`form-control ${
                              errors[`rawMaterials[${index}].material`] ? "is-invalid" : ""
                            }`}
                            id={`material${index}`}
                            value={rawMaterial.material}
                            onChange={(e) => handleChange(e, index, "material")}
                          >
                            <option value="">Choose Material...</option>
                            <option value="1">Sand</option>
                            <option value="2">Cement</option>
                            <option value="3">Salli</option>
                          </select>
                          {errors[`rawMaterials[${index}].material`] && (
                            <div className="invalid-feedback">
                              {errors[`rawMaterials[${index}].material`]}
                            </div>
                          )} */}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          {/* <div className="label-text">Measurement</div> */}
                          {/* <select
                            className={`form-control ${
                              errors[`rawMaterials[${index}].measurement`] ? "is-invalid" : ""
                            }`}
                            id={`measurement${index}`}
                            value={rawMaterial.measurement}
                            onChange={(e) => handleChange(e, index, "measurement")}
                          >
                            <option value="">Choose Measurement...</option>
                            <option value="1">Centimeters</option>
                            <option value="2">Meters</option>
                            <option value="3">Kilometers</option>
                            <option value="4">Cube</option>
                          </select>
                          {errors[`rawMaterials[${index}].measurement`] && (
                            <div className="invalid-feedback">
                              {errors[`rawMaterials[${index}].measurement`]}
                            </div>
                          )} */}
                          <Select 
                            options={options} 
                            placeholder="Measurement"
                          />
                        </div>
                      {/* </div>

                      <div className="row"> */}
                        <div className="col">
                          {/* <div className="label-text">Quantity</div> */}
                          <input
                            type="number"
                            className={`form-control ${
                              errors[`rawMaterials[${index}].quantity`] ? "is-invalid" : ""
                            }`}
                            id={`quantity${index}`}
                            placeholder="Quantity"
                            step="0.01"
                            min="0"
                            value={rawMaterial.quantity}
                            onChange={(e) => handleChange(e, index, "quantity")}
                          />
                          {/* {errors[`rawMaterials[${index}].quantity`] && (
                            <div className="invalid-feedback">
                              {errors[`rawMaterials[${index}].quantity`]}
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="row">
                    <div className="col text-end">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={addRawMaterialContainer}
                      >
                        <i className="bi bi-plus"></i> Add Material
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    {/* <label htmlFor="note" className="form-label">
                      Note
                    </label> */}
                    <textarea
                      className="form-control"
                      id="note"
                      rows="3"
                      placeholder="Enter Your Note..."
                      value={formState.note}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label for="attachment" className="form-label border w-100 rounded-1 text-center pt-3 pb-3">
                      <i className="bi bi-camera fs-1"></i>
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="attachment"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary w-100" type="submit">
                      Add Expense
                    </button>
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

export default AddSiteInventory;
