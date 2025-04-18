import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const CreateUserModal = ({ show, handleClose }) => {
  const role = useSelector((state) => state.configration.value.role);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    nic: '',
    phone: '',
    gender: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    province: '',
    zip: '',
    role: '',
    username: '',
    password: '',
    confirm_password: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const createNewUser = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (selectedFile) {
      data.append("image", selectedFile);
    }

    // You can now POST `data` to your backend
    console.log("FormData prepared:");
    for (let pair of data.entries()) { 
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={createNewUser}>
              <div className="row mb-3">
                <div className="col-lg-2 mb-lg-0 mb-3">
                  <div className="align-items-center site-dash-border d-flex h-100 justify-content-around rounded-2 flex-column">
                    <label htmlFor="user-image" className="text-center">
                      {imagePreview ? (
                        <>
                          <button className="btn btn-sm btn-danger site-user-close" type="button" onClick={() => setImagePreview(null)}>
                            <i className="bi bi-x"></i>
                          </button>
                          <img src={imagePreview} alt="Preview" className="site-user-image"/>
                        </>
                      ) : (
                        <i className="bi bi-image-alt fs-1"></i>
                      )}
                    </label>
                    <input type="file" id="user-image" className="d-none" onChange={handleFile} />
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="row mb-2">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm p-2"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleOnChange}
                        value={formData.first_name}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm p-2"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleOnChange}
                        value={formData.last_name}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm p-2"
                        placeholder="NIC Number"
                        name="nic"
                        onChange={handleOnChange}
                        value={formData.nic}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm p-2"
                        placeholder="Mobile Number"
                        name="phone"
                        onChange={handleOnChange}
                        value={formData.phone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col small">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleOnChange}
                        />
                        <label className="form-check-label" htmlFor="male">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleOnChange}
                        />
                        <label className="form-check-label" htmlFor="female">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Address Line 1"
                    name="address_line_1"
                    onChange={handleOnChange}
                    value={formData.address_line_1}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Address Line 2"
                    name="address_line_2"
                    onChange={handleOnChange}
                    value={formData.address_line_2}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="City"
                    name="city"
                    onChange={handleOnChange}
                    value={formData.city}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Province"
                    name="province"
                    onChange={handleOnChange}
                    value={formData.province}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Postal code / Zip Code"
                    name="zip"
                    onChange={handleOnChange}
                    value={formData.zip}
                  />
                </div>
              </div>

              {/* Roles */}
              <div className="row mb-lg-2 mb-3">
                <div className="col small">
                  {role.map((r, i) => (
                    <div className="form-check form-check-inline" key={i}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id={`role-${r.id}`}
                        onChange={handleOnChange}
                        value={r.id}
                        checked={formData.role === r.id}
                      />
                      <label className="form-check-label fw-medium" htmlFor={`role-${r.id}`}>
                        {r.text}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Username and Password */}
              <div className="row mb-3">
                <div className="col-lg-4 mb-lg-0 mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="User Name"
                    name="username"
                    onChange={handleOnChange}
                    value={formData.username}
                  />
                </div>
                <div className="col-lg-4 col-6">
                  <input
                    type="password"
                    className="form-control form-control-sm p-2"
                    placeholder="Password"
                    name="password"
                    onChange={handleOnChange}
                    value={formData.password}
                  />
                </div>
                <div className="col-lg-4 col-6">
                  <input
                    type="password"
                    className="form-control form-control-sm p-2"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    onChange={handleOnChange}
                    value={formData.confirm_password}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-sm btn-warning w-25" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUserModal;


// export default CreateUserModal