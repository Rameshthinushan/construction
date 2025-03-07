import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

import CreateRoleModal from "./createRoleModal";
import { DeleteModal } from "../../deleteModal";

const RoleList = () => {
  const [loding, setLoding] = useState(true)
  const [modalShow, setModalShow] = useState(false);
  const [roleId, setRoleId] = useState('');
  const [deleteModalStatus, setDelateModalStatus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const configration = useSelector((state) => state.configration.value);
  const role = configration.role;
  
  useEffect(() => {
    if (role) {
      setLoding(false)
    }
  }, [role])

  const handleClose = () => setModalShow(false);

  const setDeleteData = (id) => {
    setRoleId(id);
    setDelateModalStatus(true)
  }

  const setUpadteData = (id) => {
    setRoleId(id)
    setModalShow(true)
  }

  const openNewRoleModal = () => {
    setRoleId("")
    setModalShow(true)
  }
  
  
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <button 
              className="btn btn btn-warning"
              onClick={openNewRoleModal}
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
                <input 
                  type="text" 
                  className="form-control form-control-sm p-3" 
                  placeholder="Search Your User"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <ul className="list-unstyled small">
                  <li className="site-border-bottom pt-3 pb-3 ps-3 table-header">
                    <div className="row">
                      <div className="col-lg-5">Role</div>
                      <div className="col-lg-3">Comments</div>
                      <div className="col-lg-2">Status</div>
                      <div className="col-lg-2">Action</div>
                    </div>
                  </li>
                  {
                    (loding)
                      ? <Spinner/> 
                      : <RoleTable
                          data={role}
                          search={searchText}
                          setRoleId={setUpadteData}
                          setDeleteData={setDeleteData}
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
          roleId={roleId}
        />
        <DeleteModal
          show={deleteModalStatus}
          handleClose={() => setDelateModalStatus(false)}
          deleteId={roleId}
          modalData={{
            id: roleId,
            title: 'Delete',
            body: 'Are you sure you want to delete this role?',
            description: 'If you click the delete button, you can permanently delete your role.'
          }}
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

const RoleTable = ({data, search, setRoleId, setDeleteData}) => {
  console.log(search)
  const [tableData, setTableData] = useState(data)
  useEffect(() => {
    if (search) {
      const filterData = data.filter((d) => d.text.toLowerCase().includes(search.toLowerCase()))
      setTableData(filterData)
    } else {
      setTableData(data)
    }
  }, [search, data])

  return (
    <>
      {
        tableData.map((r, i) => (
          <li 
            className="border-bottom pt-2 pb-2 ps-3 bg-white"
            key={i}
          >
            <div className="row">
              <div className="col-lg-5">{r.text}</div>
              <div className="col-lg-3">{(r.comments)? r.comments : `#NC` }</div>
              <div className="col-lg-2">
                <i className={"bi bi-circle-fill text-success"}></i>
              </div>
              <div className="col-lg-2">
                <button 
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => setRoleId(r.id)}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button 
                  className="btn btn-sm btn-danger"
                  onClick={() => setDeleteData(r.id)}
                >
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

