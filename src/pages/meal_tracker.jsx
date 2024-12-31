import React, { useState } from "react";
import NavMobile from "./nav_mobile";

const MealTracker = () => {
  const [formState, setFormState] = useState({
    site: "",
    getAs: "",
    which_meal: "",
    total_persons: 1,
    loggedin_persons: 10,
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
    if (!field || field === "getAs") {
      const getAsValue = field === "getAs" ? value : formState.getAs;
      if (!getAsValue.trim()) {
        newErrors.getAs = "Please choose a valid option.";
      } else {
        delete newErrors.getAs;
      }
    }
    if (!field || field === "which_meal") {
      const which_mealValue = field === "which_meal" ? value : formState.which_meal;
      if (!which_mealValue.trim() || which_mealValue == 0) {
        newErrors.which_meal = "Please choose a valid option.";
      } else {
        delete newErrors.which_meal;
      }
    }
    if (!field || field === "total_persons") {
      const totalPersonsValue = field === "total_persons" ? value : formState.total_persons;
      if (totalPersonsValue == 0) {
        newErrors.total_persons = "Please provide a valid total_persons.";
      } else {
        delete newErrors.total_persons;
      }
    }
    if (!field || field === "ateWithoutWork") {
      if (formState.total_persons > formState.loggedin_persons) {
        const ateWithoutWorkValue = formState.ateWithoutWork || [];
        if (!ateWithoutWorkValue.length) {
          newErrors.ateWithoutWork = "This field is required when total persons exceed logged-in persons.";
        } else {
          delete newErrors.ateWithoutWork;
        }
      } else {
        delete newErrors.ateWithoutWork; // Not required if condition doesn't match
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
            <h5 className="bg-body-secondary mb-0 p-2">Meal Tracker</h5>
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
            <label htmlFor="getAs" className="form-label">
              Get As
            </label>
            <select
              className={`form-select ${errors.getAs ? "is-invalid" : ""}`}
              id="getAs"
              value={formState.getAs}
              onChange={handleChange}
            >
              <option value="">Choose Option...</option>
              <option value="1">Parcels</option>
              <option value="2">Site Cooking</option>
            </select>
            {errors.getAs && (
              <div className="invalid-feedback">{errors.getAs}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="which_meal" className="form-label">
              Which Meal
            </label>
            <select
              className={`form-control ${errors.which_meal ? "is-invalid" : ""}`}
              id="which_meal"
              value={formState.which_meal}
              onChange={handleChange}
            >
              <option value="">Choose Option...</option>
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Dinner</option>
            </select>
            {errors.which_meal && (
              <div className="invalid-feedback">{errors.which_meal}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="total_persons" className="form-label">
              Total Persons
            </label>
            <input
              type="number"
              className={`form-control ${errors.total_persons ? "is-invalid" : ""}`}
              id="total_persons"
              placeholder="Enter Amount..."
              step="1"
              min="1"
              value={formState.total_persons}
              onChange={handleChange}
            />
            {errors.total_persons && (
              <div className="invalid-feedback">{errors.total_persons}</div>
            )}
          </div>
        </div>

        <div className={`row ${formState.total_persons <= formState.loggedin_persons ? "d-none" : ""}`}>
          <div className="col mb-3">
            <label htmlFor="ateWithoutWork" className="form-label">
              Who Ate without Working
            </label>
            <select
              className={`form-select ${errors.ateWithoutWork ? "is-invalid" : ""}`}
              id="ateWithoutWork"
              value={formState.ateWithoutWork || []}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  ateWithoutWork: Array.from(e.target.selectedOptions, (option) => option.value),
                }))
              }
              multiple
            >
              <option value="1">Puvii</option>
              <option value="2">Thinu</option>
            </select>
            {errors.ateWithoutWork && (
              <div className="invalid-feedback">{errors.ateWithoutWork}</div>
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
              Add Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MealTracker;