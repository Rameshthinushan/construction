import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const CookingSupplies = () => {
  const [formState, setFormState] = useState({
    site: "",
    cookingSupplies: [
      {
        itemName: "",
        itemUnit: "",
        quantity: "",
        cost: "",
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
        const updatedMaterials = [...prevState.cookingSupplies];
        updatedMaterials[index][field] = value;
        return { ...prevState, cookingSupplies: updatedMaterials };
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

    const cookingSuppliesValid = formState.cookingSupplies.every((itemName, i) => {
      const itemNameValue = index === i && field === "itemName" ? value : itemName.itemName;
      const itemUnitValue = index === i && field === "itemUnit" ? value : itemName.itemUnit;
      const quantityValue = index === i && field === "quantity" ? value : itemName.quantity;
      const costValue = index === i && field === "cost" ? value : itemName.cost;
  
      let isValid = true;
  
      if (!itemNameValue.trim()) {
        newErrors[`cookingSupplies[${i}].itemName`] = "Please choose a valid Item name.";
        isValid = false;
      } else {
        delete newErrors[`cookingSupplies[${i}].itemName`];
      }
  
      if (!quantityValue || quantityValue <= 0) {
        newErrors[`cookingSupplies[${i}].quantity`] = "Please enter a valid quantity.";
        isValid = false;
      } else {
        delete newErrors[`cookingSupplies[${i}].quantity`];
      }
  
      if (!itemUnitValue.trim()) {
        newErrors[`cookingSupplies[${i}].itemUnit`] = "Please choose a valid Item unit.";
        isValid = false;
      } else {
        delete newErrors[`cookingSupplies[${i}].itemUnit`];
      }
  
      if (!costValue || costValue <= 0) {
        newErrors[`cookingSupplies[${i}].cost`] = "Please enter a valid cost.";
        isValid = false;
      } else {
        delete newErrors[`cookingSupplies[${i}].cost`];
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
      cookingSupplies: [
        ...prevState.cookingSupplies,
        { itemName: "", itemUnit: "", quantity: "", cost: "" },
      ],
    }));
  };

  const removeRawMaterialContainer = (index) => {
    if (formState.cookingSupplies.length > 1) {
      setFormState((prevState) => ({
        ...prevState,
        cookingSupplies: prevState.cookingSupplies.filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <div className="">
      <div className="row">
        <div className="col d-lg-none">
          <NavMobile />
        </div>
      </div>

      <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-2 text-center">
            <h5 className="bg-body-secondary mb-0 p-2">Add Cooking Supplies</h5>
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
          {formState.cookingSupplies.map((cookingSupply, index) => (
            <div className="border border-2 p-1 mb-2" key={index}>
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor={`itemName${index}`} className="form-label">
                    Cooking Supply
                  </label>
                  <select
                    className={`form-control ${
                      errors[`cookingSupplies[${index}].itemName`] ? "is-invalid" : ""
                    }`}
                    id={`itemName${index}`}
                    value={cookingSupply.itemName}
                    onChange={(e) => handleChange(e, index, "itemName")}
                  >
                    <option value="">Choose Supply...</option>
                    <option value="1">Sand</option>
                    <option value="2">Cement</option>
                    <option value="3">Salli</option>
                  </select>
                  {errors[`cookingSupplies[${index}].itemName`] && (
                    <div className="invalid-feedback">
                      {errors[`cookingSupplies[${index}].itemName`]}
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
                      errors[`cookingSupplies[${index}].quantity`] ? "is-invalid" : ""
                    }`}
                    id={`quantity${index}`}
                    placeholder="Enter Quantity..."
                    step="1"
                    min="1"
                    value={cookingSupply.quantity}
                    onChange={(e) => handleChange(e, index, "quantity")}
                  />
                  {errors[`cookingSupplies[${index}].quantity`] && (
                    <div className="invalid-feedback">
                      {errors[`cookingSupplies[${index}].quantity`]}
                    </div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col mb-3">
                  <label htmlFor={`itemUnit${index}`} className="form-label">
                    Unit
                  </label>
                  <select
                    className={`form-control ${
                      errors[`cookingSupplies[${index}].itemUnit`] ? "is-invalid" : ""
                    }`}
                    id={`itemUnit${index}`}
                    value={cookingSupply.itemUnit}
                    onChange={(e) => handleChange(e, index, "itemUnit")}
                  >
                    <option value="">Choose Unit...</option>
                    <option value="1">Centimeters</option>
                    <option value="2">Meters</option>
                    <option value="3">Kilometers</option>
                    <option value="4">Cube</option>
                  </select>
                  {errors[`cookingSupplies[${index}].itemUnit`] && (
                    <div className="invalid-feedback">
                      {errors[`cookingSupplies[${index}].itemUnit`]}
                    </div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor={`cost${index}`} className="form-label">
                    Cost
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors[`cookingSupplies[${index}].cost`] ? "is-invalid" : ""
                    }`}
                    id={`cost${index}`}
                    placeholder="Enter Amount..."
                    step="0.01"
                    min="0"
                    value={cookingSupply.cost}
                    onChange={(e) => handleChange(e, index, "cost")}
                  />
                  {errors[`cookingSupplies[${index}].cost`] && (
                    <div className="invalid-feedback">
                      {errors[`cookingSupplies[${index}].cost`]}
                    </div>
                  )}
                </div>
              </div>

              <div className={`row ${formState.cookingSupplies.length === 1 ? "d-none" : ""}`}>
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
                <i className="bi bi-plus"></i> Add Cooking Supply
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
              Add Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CookingSupplies;
