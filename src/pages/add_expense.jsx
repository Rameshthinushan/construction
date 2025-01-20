import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const AddExpense = () => {
  const [formState, setFormState] = useState({
    site: "",
    typeOfExpense: "",
    amount: "",
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
    if (!field || field === "typeOfExpense") {
      const typeOfExpenseValue = field === "typeOfExpense" ? value : formState.typeOfExpense;
      if (!typeOfExpenseValue.trim()) {
        newErrors.typeOfExpense = "Please choose a valid type of expense.";
      } else {
        delete newErrors.typeOfExpense;
      }
    }
    if (!field || field === "amount") {
      const amountValue = field === "amount" ? value : formState.amount;
      if (!amountValue.trim() || amountValue == 0) {
        newErrors.amount = "Please provide a valid amount.";
      } else {
        delete newErrors.amount;
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
          <NavMobile to='/' />
        </div>
      </div>
      <form className="g-3 needs-validation mt-3 d-lg-none" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-2 text-center">
            <h5 className="bg-body-secondary mb-0 p-2">Add Expense</h5>
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
            {errors.site && (
              <div className="invalid-feedback">{errors.site}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="typeOfExpense" className="form-label">
              Type
            </label>
            <select
              className={`form-control ${errors.typeOfExpense ? "is-invalid" : ""}`}
              id="typeOfExpense"
              value={formState.typeOfExpense}
              onChange={handleChange}
            >
              <option value="">Choose Expense...</option>
              <option value="1">Expense 1</option>
              <option value="2">Expense 2</option>
              <option value="3">Expense 3</option>
            </select>
            {errors.typeOfExpense && (
              <div className="invalid-feedback">{errors.typeOfExpense}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className={`form-control ${errors.amount ? "is-invalid" : ""}`}
              id="amount"
              placeholder="Enter Amount..."
              step="0.01"
              min="0"
              value={formState.amount}
              onChange={handleChange}
            />
            {errors.amount && (
              <div className="invalid-feedback">{errors.amount}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="joinedDate" className="form-label">
              Attach File
            </label>
            <input
              type="file"
              className="form-control"
              id="joinedDate"
              value={formState.file}
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

export default AddExpense;