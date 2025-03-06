import { useEffect, useState } from "react"
import CreateRoleModal from "./createRoleModal";
import Request from "../../../api";

import { useSelector } from "react-redux";

const RoleList = () => {
  const [loding, setLoding] = useState(true)
  const [modalShow, setModalShow] = useState(false);
  const [updateRoleId, setUpdateRoleId] = useState('');

  const configration = useSelector((state) => state.configration.value);
  const role = configration.role;
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const setUpadteData = (id) => {
    setUpdateRoleId(id)
    setModalShow(true)
  }



  setTimeout(() => {
    setLoding(false)
  }, 500);
  
  // console.table(roleData);
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <button 
              className="btn btn btn-warning"
              onClick={() => setModalShow(true)}
            >
              <i className="bi bi-plus-circle-fill me-2"></i>Create New Role
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-8"></div>
              <div className="col">
                <input type="text" className="form-control form-control-sm p-3" placeholder="Search Your User"/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <ul className="list-unstyled small">
                  <li className="site-border-bottom pt-3 pb-3 ps-3 table-header">
                    <div className="row">
                      <div className="col-lg-1">
                        <input type="checkbox" name="" id="" className="form-check-input"/>
                      </div>
                      <div className="col-lg-6">Role</div>
                      <div className="col-lg-3">Status</div>
                      <div className="col-lg-2">Action</div>
                    </div>
                  </li>
                  {
                    (loding)
                      ? <Spinner/> 
                      : <RoleTable
                          data={role}
                          setRoleId={setUpadteData}
                        />
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CreateRoleModal 
          show={modalShow}
          handleClose={handleClose}
          permission={configration.permission}
          roleId={updateRoleId}
        />
      </div>
    </div>
  )
}

const Spinner = () => {
  return (
    <li className="site-border-bottom pt-2 pb-2">
      <div className="row">
        <div className="col text-center">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </li>
  )
}

const RoleTable = ({data, setRoleId}) => {
  return (
    <>
      {
        data.map((r, i) => (
          <li 
            className="border-bottom pt-2 pb-2 ps-3 bg-white"
            key={i}
          >
            <div className="row">
              <div className="col-lg-1">
                <input type="checkbox" name="" id="" className="form-check-input"/>
              </div>
              <div className="col-lg-6">{r.text}</div>
              <div className="col-lg-3">
                <i className={"bi bi-circle-fill text-success"}></i>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-sm btn-primary me-2">
                  <i className="bi bi-eye-fill"></i>
                </button>
                <button 
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => setRoleId(r.id)}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button className="btn btn-sm btn-danger">
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
          </li>
        ))
      }
    </>
  )

}
export default RoleList

