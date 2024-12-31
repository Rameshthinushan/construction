import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const AddSiteInventory = () => {
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
    <div className="container-fluid">
      <div className="row">
        <div className="col d-lg-none">
          <NavMobile />
        </div>
      </div>

      <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-2 text-center">
            <h5 className="bg-body-secondary mb-0 p-2">Add Site Inventory</h5>
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="site" className="form-label">
              Site
            </label>
            <select
              className={`form-control ${errors.site ? "is-invalid" : ""}`}
              id="site"
              value={formState.site}
              onChange={handleChange}
            >
              <option value="">Choose Site...</option>
              <option value="1">Site A</option>
              <option value="2">Site B</option>
            </select>
            {errors.site && <div className="invalid-feedback">{errors.site}</div>}
          </div>
        </div>

        <div className="border border-2 p-2 mb-3">
          {formState.rawMaterials.map((rawMaterial, index) => (
            <div className="border border-2 p-1 mb-2" key={index}>
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor={`material${index}`} className="form-label">
                    Raw Material
                  </label>
                  <select
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
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col mb-3">
                  <label htmlFor={`measurement${index}`} className="form-label">
                    Measurement
                  </label>
                  <select
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
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor={`quantity${index}`} className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors[`rawMaterials[${index}].quantity`] ? "is-invalid" : ""
                    }`}
                    id={`quantity${index}`}
                    placeholder="Enter Amount..."
                    step="0.01"
                    min="0"
                    value={rawMaterial.quantity}
                    onChange={(e) => handleChange(e, index, "quantity")}
                  />
                  {errors[`rawMaterials[${index}].quantity`] && (
                    <div className="invalid-feedback">
                      {errors[`rawMaterials[${index}].quantity`]}
                    </div>
                  )}
                </div>
              </div>

              <div className={`row ${formState.rawMaterials.length === 1 ? "d-none" : ""}`}>
                <div className="col mt-1 text-end">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm rounded-0"
                    onClick={() => removeRawMaterialContainer(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="col text-center">
              <button
                type="button"
                className="btn btn-primary btn-sm rounded-0"
                onClick={addRawMaterialContainer}
              >
                <i className="bi bi-plus"></i> Add Material
              </button>
            </div>
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
          <div className="col mb-3">
            <label htmlFor="attachment" className="form-label">
              Attach File
            </label>
            <input
              type="file"
              className="form-control"
              id="attachment"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-end">
            <button className="btn btn-secondary rounded-0" type="submit">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSiteInventory;
