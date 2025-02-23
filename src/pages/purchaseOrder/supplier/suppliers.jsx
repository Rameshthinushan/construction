import React from 'react'
import { useState } from 'react';
import CreateSupplierModal from './createSupplierModal';

const Suppliers = () => {
  const [loding, setLoding] = useState(true)
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  setTimeout(() => {
    setLoding(false)
  }, 1000);
  
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <button 
              className="btn btn-sm btn-site"
              onClick={() => setModalShow(true)}
            >
              <i className="bi bi-plus-circle-fill me-2"></i>Create New Supplier
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-8"></div>
              <div className="col">
                <input type="text" className="form-control form-control-sm p-3" placeholder="Search Your Supplier"/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <ul className="list-unstyled small">
                  <li className="site-border-bottom pt-2 pb-2 ps-1">
                    <div className="row">
                      <div className="col-lg-1">
                        <input type="checkbox" name="" id="" className="form-check-input"/>
                      </div>
                      <div className="col-lg-2">Supplier Name</div>
                      <div className="col-lg-5">Supplier Details</div>
                      {/* <div className="col-lg-2">User Role</div> */}
                      <div className="col-lg-2">Active Status</div>
                      <div className="col-lg-2">Action</div>
                    </div>
                  </li>
                  {(loding)? <Spinner/> : <SupplierTable/>}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CreateSupplierModal 
          show={modalShow}
          handleClose={handleClose}
        />
      </div>
    </div>
  )
}


export const Spinner = () => {
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

export const SupplierTable = () => {
  return (
    <>
      {
        Array.from({ length: 12 }).map((_, index) => (
          <li className="site-border-bottom pt-2 pb-2 ps-1">
            <div className="row">
              <div className="col-lg-1">
                <input type="checkbox" name="" id="" className="form-check-input"/>
              </div>
              <div className="col-lg-2">Supplier - {index}</div>
              <div className="col-lg-5">
                <div>#{index}</div>
                <div className="small nav-font-color">thinu@gamil.com</div>
                <div className="small nav-font-color">077xxxxxxx</div>
              </div>
              {/* <div className="col-lg-2">Admin</div> */}
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
                <button className="btn btn-sm btn-danger me-2">
                  <i className="bi bi-trash-fill"></i>
                </button>
                <button className="btn btn-sm btn-success">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </li>
        ))
      }
    </>
  )

}

export default Suppliers