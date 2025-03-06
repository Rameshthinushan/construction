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

  useEffect(() => {
    if (!roleId) return;
  
    const updateRole = roleDetails.find(({ id }) => id === roleId);
    if (!updateRole) return;
  
    setFormData({
      role_id: updateRole.id,
      role_name: updateRole.text,
      comments: updateRole.comments,
      active: updateRole.isdeleted,
      permission: updateRole.permissions?.map(({ permission_id }) => permission_id) || []
    });
  }, [roleId]);
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
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

  const createNewUser = (e) => {
    e.preventDefault();
    const submitURL = (roleId !== "")? '/update-role' : '';
    Request({
      url: submitURL,
      body: formData
    }).then((res) => {
      //if (res) {
        dispatch(updateRole(res))
      //}
    }).catch((e) => {

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
                    required
                  />
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
                  <div className="border-bottom mb-2 pb-1 small border-light text-secondary">User Permissions : </div>
                  <div className="row small">
                    {permission.map((p, i) => (
                      <div className="col-lg-3 col-md-6 col-6 mb-2" key={i}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={p.id}
                            id={`permission-${p.id}`}
                            onChange={handlePermissionChange}
                            checked={formData.permission.includes(p.id)}
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
