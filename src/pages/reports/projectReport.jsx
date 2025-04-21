import { useState, useEffect } from "react"
// import CreateUserModal from "./createUserModal";
// import Request from "../../../api";

const ProjectReport = () => {
  const [loding, setLoding] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  // useEffect(() => {
  //   Request({
  //     url: '/get-users'
  //   }).then ((res) => {
  //     if (res.message === 'Success') {
  //       setUser(res.users)
  //       setLoding(false)
  //     }
  //   }).catch(() => {

  //   })
  // }, [])
  
  return (
    <div className="row">
      <div className="col">
        {/* <div className="row">
          <div className="col">
            <button 
              className="btn btn-warning"
              onClick={() => setModalShow(true)}
            >
              <i className="bi bi-plus-circle-fill me-2"></i>Create New user
            </button>
          </div>
        </div> */}

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
                        id
                        {/* <input type="checkbox" name="" id="" className="form-check-input"/> */}
                      </div>
                      <div className="col-lg-2">User Name</div>
                      <div className="col-lg-3">User Details</div>
                      <div className="col-lg-2">User Role</div>
                      <div className="col-lg-2">Active Status</div>
                      <div className="col-lg-2">Action</div>
                    </div>
                  </li>
                  {
                    (loding)? <Spinner/> : <UserTable user={user}/>
                    }
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <CreateUserModal 
          show={modalShow}
          handleClose={handleClose}
        /> */}
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

const UserTable = ({user}) => {
  return (
    <>
      {
        Array.from({ length: 12 }).map((_, index) => (
          <li 
            className="border-bottom pt-2 pb-2 ps-3 bg-white"
            key={index}
          >
            <div className="row">
              <div className="col-lg-1">
                {index}
              </div>
              <div className="col-lg-2">sdgd</div>
              <div className="col-lg-3">
                <div>#osdbu</div>
                <div className="small nav-font-color">ikgbsd</div>
                <div className="small nav-font-color">fjod</div>
              </div>
              <div className="col-lg-2">fhuidsb</div>
              <div className="col-lg-2">
                <i className="bi bi-circle-fill text-success"></i>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-sm btn-primary me-2">
                  <i className="bi bi-eye-fill"></i>
                </button>
                <button className="btn btn-sm btn-warning me-2">
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
export default ProjectReport

