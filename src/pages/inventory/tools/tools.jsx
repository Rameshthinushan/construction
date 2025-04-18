import React, { useState, useEffect } from 'react'
import CreateToolsModal from './createToolModal';
import { useSelector } from 'react-redux';

const Tools = () => {
  const [loding, setLoding] = useState(true)
  const [modalShow, setModalShow] = useState(false);

  const configration = useSelector((state) => state.configration.value);
  const units = configration.units;
  const tools = configration.tool_rates;

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const getUnitDetails = (obj) => {
    const [unitId] = Object.keys(obj);
    return {
      unit: units.find(u => u.id == unitId),
      rate: obj[unitId]
    };
  };

  useEffect(() => {
    if (tools) {
      setLoding(false)
    }
  }, [tools])

  
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <button 
              className="btn btn-warning"
              onClick={() => setModalShow(true)}
            >
              <i className="bi bi-plus-circle-fill me-2"></i>Create New Tools
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
                  <li className="site-border-bottom pt-3 pb-3 ps-3 table-header">
                    <div className="row">
                      <div className="col-lg-1">
                        <input type="checkbox" name="" id="" className="form-check-input"/>
                      </div>
                      <div className="col-lg-1">Tool Code</div>
                      <div className="col-lg-3">Tools Name</div>
                      <div className="col-lg-2">Units</div>
                      <div className="col-lg-2">Rates</div>
                      <div className="col-lg-1">Status</div>
                      <div className="col-lg-2">Action</div>
                    </div>
                  </li>
                  {
                    (loding)? 
                      <Spinner/> : 
                      < PurchaseOrderTable 
                        tools={tools} 
                        unit={getUnitDetails}
                      />}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CreateToolsModal 
          show={modalShow}
          handleClose={handleClose}
          unitsData={units}
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

export const PurchaseOrderTable = ({tools, unit}) => {
  return (
    <>
      {
        tools.map((tool, i) => (
          <li 
            className="border-bottom pt-2 pb-2 ps-3 bg-white"
            key={i}
          >
            <div className="row align-items-center">
              <div className="col-lg-1">
                <input type="checkbox" name="" id="" className="form-check-input"/>
              </div>
              <div className="col-lg-1">{tool.tool_code}</div>
              <div className="col-lg-3">
                <div>{tool.tool_name}</div>
              </div>
              <div className="col-lg-2">{
              // unit(tool?.rates).unit.name
              }</div>
              <div className="col-lg-2">
                {
                // unit(tool?.rates).rate
                }
              </div>
              <div className="col-lg-1">
                <i className="bi bi-circle-fill text-success"></i>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-sm btn-outline-secondary me-2">
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button className="btn btn-sm btn-outline-danger me-2">
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

export default Tools