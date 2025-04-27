import React, { useState, useEffect } from 'react'
import CreatePlantModal from './createPlantModal';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteModal } from '../../deleteModal';
import { deleteTool } from '../../../features/configration';
import Request from '../../../api';

const Plants = () => {
  const dispatch = useDispatch()
  const [loding, setLoding] = useState(true)
  const [modalShow, setModalShow] = useState(false);
  const [editId, setEditID] = useState("")
  const [deleteModalStatus, setDelateModalStatus] = useState(false);
  const [searchText, setSearchText] = useState('');

  const configration = useSelector((state) => state.configration.value);
  const units = configration.units;
  const tools = configration.tool_rates;

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const showEditModal = (id) => {
    setEditID(id)
    setModalShow(true)
  }

  const showCreateModal = () => {
    setEditID("")
    setModalShow(true)
  }

  useEffect(() => {
    if (tools) {
      setLoding(false)
    }
  }, [tools])

  const setDeleteData = (id) => {
    setEditID(id);
    setDelateModalStatus(true)
  }

  const actionDelete = () => {
    Request({
      url: '/delete-tool',
      body: {
        id: editId
      }
    }).then((res) => {
      dispatch(deleteTool(res.tool_rate.id))
      setDelateModalStatus(false)
    }).catch((err) => {
      console.log(err)
    })
  }

  
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <button 
              className="btn btn-warning"
              onClick={() => showCreateModal()}
            >
              <i className="bi bi-plus-circle-fill me-2"></i>Create New Plant
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
                      {/* <div className="col-lg-1">
                        <input type="checkbox" name="" id="" className="form-check-input"/>
                      </div> */}
                      <div className="col-lg-2">Plant Code</div>
                      <div className="col-lg-3">Tools Name</div>
                      <div className="col-lg-2">Units</div>
                      <div className="col-lg-2">Rates</div>
                      {/* <div className="col-lg-1">Status</div> */}
                      <div className="col-lg-3">Action</div>
                    </div>
                  </li>
                  {
                    (loding)? 
                      <Spinner/> : 
                      <PlantTable
                        search={searchText}
                        tools={tools} 
                        unit={units}
                        showEditModal={showEditModal}
                        setDeleteData={setDeleteData}
                      />
                    }
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CreatePlantModal 
          show={modalShow}
          handleClose={handleClose}
          unitsData={units}
          toolid={editId}
        />
        <DeleteModal
          show={deleteModalStatus}
          handleClose={() => setDelateModalStatus(false)}
          modalData={{
            id: editId,
            title: 'Delete',
            body: 'Are you sure?',
            description: 'If you click the delete button, you can permanently delete your Tool.'
          }}
          action={() => actionDelete}
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

export const PlantTable = ({search, tools, unit, showEditModal, setDeleteData}) => {
  const [tableData, setTableData] = useState(tools)
  useEffect(() => {
    if (search) {
      const filterData = tools.filter((d) => {
        return (
          d.tool_name.toLowerCase().includes(search.toLowerCase()) 
          || d.tool_code.toLowerCase().includes(search.toLowerCase())
        );
      })
      setTableData(filterData)
    } else {
      setTableData(tools)
    }
  }, [search, tools])

  return (
    <>
      {
        tableData.map((tool, i) => (
          <li 
            className="border-bottom pt-2 pb-2 ps-3 bg-white"
            key={i}
          >
            <div className="row align-items-center">
              {/* <div className="col-lg-1">
                <input type="checkbox" name="" id="" className="form-check-input"/>
              </div> */}
              <div className="col-lg-2">{tool.tool_code}</div>
              <div className="col-lg-3">
                <div>{tool.tool_name}</div>
              </div>
              <div className="col-lg-2">{unit.find(u => u.id == Object.keys(tool.rates)[0]).name}</div>
              <div className="col-lg-2">
                { tool?.rates[Object.keys(tool.rates)[0]]}
              </div>
              <div className="col-lg-3">
                <button 
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => showEditModal(tool.id)}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button 
                  className="btn btn-sm btn-outline-danger me-2"
                  onClick={() => setDeleteData(tool.id)}
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

export default Plants