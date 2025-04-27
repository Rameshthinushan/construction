import React, { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import CreateMesuremnetModal from './createMesurementModal';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteModal } from '../../deleteModal';
import { deleteTool } from '../../../features/configration';
import Request from '../../../api';

const MesurementList = () => {
  const dispatch = useDispatch()
  const [loding, setLoding] = useState(true)
  const [modalShow, setModalShow] = useState(false);
  const [editId, setEditID] = useState("")
  const [deleteModalStatus, setDelateModalStatus] = useState(false);
  const [searchText, setSearchText] = useState('');

  const configration = useSelector((state) => state.configration.value);
  const units = configration.units;

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
    if (units) {
      setLoding(false)
    }
  }, [units])

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
              <i className="bi bi-plus-circle-fill me-2"></i>Create New Tools
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
                      <div className="col-lg-7">Unit Name</div>
                      <div className="col-lg-2">Status</div>
                      <div className="col-lg-3">Action</div>
                    </div>
                  </li>
                  {
                    (loding)? 
                      <Spinner/> : 
                      <ToolTable
                        search={searchText}
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

        <CreateMesuremnetModal 
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

// export const ToolTable = ({search, unit, showEditModal, setDeleteData}) => {
//   const [tableData, setTableData] = useState(unit)
//   const [showCollapse, setShowCollapse] = useState(false);


//   useEffect(() => {
//     if (search) {
//       const filterData = unit.filter((d) => {
//         return (
//           d.tool_name.toLowerCase().includes(search.toLowerCase()) 
//           || d.tool_code.toLowerCase().includes(search.toLowerCase())
//         );
//       })
//       setTableData(filterData)
//     } else {
//       setTableData(unit)
//     }
//   }, [search, unit])

//   const showPeticularCollapse = (i) => {
//     setShowCollapse(!showCollapse)
//     const updatedData = [...tableData];
//     updatedData[i] = {
//       ...updatedData[i],
//       collapse: !showCollapse
//     };
//     setTableData(updatedData);
//   }

 

//   const getUnitName = (id) => {
//     return unit.find((u) => u.id === id).name
//   }

//   const mesurementSymbol = (text) => {
//     const obj = {
//       'divide': '/',
//       'multiply': '*'
//     }
//     return obj[text]
//   }

//   let totalItems = unit.length
//   const itemsPerPage = 20;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = unit.slice(indexOfFirstItem, indexOfLastItem);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);


//   return (
//     <>
//       {
//         currentItems.map((unit, i) => (
//           <li 
//             className="border-bottom pt-2 pb-2 ps-3 bg-white"
//             key={i}
//           >
//             <div className="row align-items-center">
//               <div className="col-lg-7">{unit.name}</div>
//               <div className="col-lg-2">{unit.isdeleted}</div>
//               <div className="col-lg-3">
//                 <button 
//                   className="btn btn-sm btn-outline-secondary me-2"
//                 >
//                   <i className="bi bi-pencil-fill"></i>
//                 </button>
//                 <button 
//                   className="btn btn-sm btn-outline-danger me-2"
//                 >
//                   <i className="bi bi-trash-fill"></i>
//                 </button>
//                 <button 
//                   className="btn btn-sm btn-outline-success" 
//                   onClick={() => showPeticularCollapse(i)} 
//                   aria-controls="example-collapse-text" 
//                   aria-expanded={showCollapse}
//                   disabled={unit.conversions.length === 0}
//                 >
//                   <i class={`bi bi-chevron-compact-${unit.collapse ? `up` : `down`}`}></i>
//                 </button>
//               </div>
//             </div>
//             <Collapse in={unit.collapse? true : false}>
//               <div className="row">
//                 <div className="col mt-2">
//                   <ul className="list-unstyled">
//                     <li className="bg-secondary fw-medium me-3 p-2 text-white">
//                       <div className="row">
//                         <div className="col">From Unit Name</div>
//                         <div className="col">To Unit Name</div>
//                         <div className="col">Conversion Operation</div>
//                         <div className="col">Conversion Factor</div>
//                       </div>
//                     </li>
//                   {unit.conversions.map((conversion, k) => (
//                     <li className="bg-body-tertiary fw-medium me-3 p-2 border-top">
//                       <div className="row">
//                         <div className="col">{getUnitName(conversion.from_unit_id)}</div>
//                         <div className="col">{getUnitName(conversion.to_unit_id)}</div>
//                         <div className="col">
//                           <span className="me-1">{conversion.conversion_operation}</span>
//                           <span>[ {getUnitName(conversion.from_unit_id)} {mesurementSymbol(conversion.conversion_operation)} {getUnitName(conversion.to_unit_id)} ]</span>
//                         </div>
//                         <div className="col">{conversion.conversion_factor}</div>
//                       </div>
//                     </li>
//                   ))}
//                    </ul>
//                 </div>
//               </div>
//             </Collapse>
//           </li>
//         ))
//       }
//       <div className="row">
//         <div className="col">
//         <Pagination
//           currentPage={currentPage} 
//           totalPages={totalPages} 
//           paginate={paginate} 
//           totalItems={totalItems} 
//         />
//         </div>
//       </div>
//     </>
//   )
// }

export const ToolTable = ({ search, unit, showEditModal, setDeleteData }) => {
  const [tableData, setTableData] = useState(unit);
  const [collapseState, setCollapseState] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const filteredData = search
      ? unit.filter((d) =>
          d.tool_name.toLowerCase().includes(search.toLowerCase()) ||
          d.tool_code.toLowerCase().includes(search.toLowerCase())
        )
      : unit;

    setTableData(filteredData);
    setCurrentPage(1); // reset to page 1 on new search
  }, [search, unit]);

  const showPeticularCollapse = (id) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getUnitName = (id) => {
    const unitItem = unit.find((u) => u.id === id);
    return unitItem ? unitItem.name : '';
  };

  const mesurementSymbol = (text) => {
    return {
      divide: '/',
      multiply: '*',
    }[text] || '';
  };

  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {currentItems.map((unit, i) => (
        <li className="border-bottom pt-2 pb-2 ps-3 bg-white" key={i}>
          <div className="row align-items-center">
            <div className="col-lg-7">{unit.name}</div>
            <div className="col-lg-2">{unit.isdeleted}</div>
            <div className="col-lg-3">
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => showEditModal(unit.id)}
              >
                <i className="bi bi-pencil-fill"></i>
              </button>
              <button
                className="btn btn-sm btn-outline-danger me-2"
                onClick={() => setDeleteData(unit.id)}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
              <button
                className="btn btn-sm btn-outline-success"
                onClick={() => showPeticularCollapse(unit.id)}
                aria-controls={`collapse-${unit.id}`}
                aria-expanded={collapseState[unit.id] || false}
                disabled={unit.conversions.length === 0}
              >
                <i className={`bi bi-chevron-compact-${collapseState[unit.id] ? 'up' : 'down'}`}></i>
              </button>
            </div>
          </div>
          <Collapse in={collapseState[unit.id]}>
            <div className="row">
              <div className="col mt-2">
                <ul className="list-unstyled">
                  <li className="bg-secondary fw-medium me-3 p-2 text-white">
                    <div className="row">
                      <div className="col">From Unit Name</div>
                      <div className="col">To Unit Name</div>
                      <div className="col">Conversion Operation</div>
                      <div className="col">Conversion Factor</div>
                    </div>
                  </li>
                  {unit.conversions.map((conversion, k) => (
                    <li key={k} className="bg-body-tertiary fw-medium me-3 p-2 border-top">
                      <div className="row">
                        <div className="col">{getUnitName(conversion.from_unit_id)}</div>
                        <div className="col">{getUnitName(conversion.to_unit_id)}</div>
                        <div className="col">
                          <span className="me-1">{conversion.conversion_operation}</span>
                          <span>
                            [ {getUnitName(conversion.from_unit_id)}{' '}
                            {mesurementSymbol(conversion.conversion_operation)}{' '}
                            {getUnitName(conversion.to_unit_id)} ]
                          </span>
                        </div>
                        <div className="col">{conversion.conversion_factor}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapse>
        </li>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        totalItems={totalItems}
      />
    </>
  );
};


const Pagination = ({ currentPage, totalPages, paginate }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button className="page-link" onClick={() => paginate(currentPage - 1)}>
            &laquo;
          </button>
        </li>
        {getPageNumbers().map((number, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === number ? 'active' : ''} ${number === '...' && 'disabled'}`}
          >
            <button className="page-link" onClick={() => typeof number === 'number' && paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
          <button className="page-link" onClick={() => paginate(currentPage + 1)}>
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};


export default MesurementList