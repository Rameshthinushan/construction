import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRole } from "../../../features/configration";
import Request from "../../../api";

const CreateRoleModal = ({ show, handleClose, permission, roleId }) => {
  const roleDetails = useSelector((state) => state.configration.value.role);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ 
    role_name: "",
    comments: "",
    active: 0,
    permission: [],
  });
  
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (!roleId) {
      setFormData({
        role_name: "",
        comments: "",
        active: 0,
        permission: [],
      });
      return;
    }
  
    const updateRole = roleDetails.find(({ id }) => id === roleId);
    if (!updateRole) return;
  
    setFormData({
      role_id: updateRole.id,
      role_name: updateRole.text,
      comments: updateRole.comments,
      active: updateRole.isdeleted,
      permission: updateRole.permissions?.map(({ permission_id }) => permission_id) || [],
    });
  }, [roleId, show]);
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    const permissionId = parseInt(value); 
    setFormData((prevState) => ({
      ...prevState,
      permission: checked
        ? [...prevState.permission, permissionId] 
        : prevState.permission.filter((p) => p !== permissionId), 
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.role_name.trim()) newErrors.role_name = "* Role name is required.";
    if (formData.permission.length === 0) newErrors.permission = "* Please select at least one permission.";
    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 3000)
    return Object.keys(newErrors).length === 0;
  };


  const createNewUser = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const submitURL = (roleId !== "")? '/update-role' : '';
    Request({
      url: submitURL,
      body: formData
    }).then((res) => {
      if (res) {
        dispatch(updateRole(res));
        handleClose();
      }
    }).catch((e) => {
      setApiError("An error occurred while processing your request. Please try again.")
    })
  };

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={createNewUser}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="New Role"
                    name="role_name"
                    onChange={handleOnChange}
                    value={formData.role_name}
                  />
                  {errors.role_name && <div className="site-error">{errors.role_name}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <textarea
                    className="form-control form-control-sm p-2"
                    placeholder="Comments"
                    name="comments"
                    onChange={handleOnChange}
                    value={formData.comments}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col small">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="active"
                      id="active"
                      onChange={handleOnChange}
                      value="0"
                      checked={formData.active === 0}
                    />
                    <label className="form-check-label" htmlFor="active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="active"
                      id="nonactive"
                      onChange={handleOnChange}
                      value="1"
                      checked={formData.active != 0}
                    />
                    <label className="form-check-label" htmlFor="nonactive">
                      Non Active
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <div className="border-bottom mb-2 pb-1 small border-light text-secondary">
                    User Permissions : {errors.permission && <span className="site-error ms-3">{errors.permission}</span>}
                  </div>
                  <div className="row small">
                    {permission.map((p, i) => (
                      <div className="col-lg-4 col-md-6 col-6 mb-2" key={i}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={p.id}
                            id={`permission-${p.id}`}
                            onChange={handlePermissionChange}
                            checked={(roleId && formData.permission.includes(p.id)) || false}
                          />
                          <label className="form-check-label" htmlFor={`permission-${p.id}`}>
                            {p.text}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {apiError && <div className="site-error text-center mb-3">{apiError}</div>}
              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-sm btn-warning w-25">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateRoleModal;
