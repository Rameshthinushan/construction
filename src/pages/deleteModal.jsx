import { Modal } from "react-bootstrap";

export const DeleteModal = ({show, handleClose, modalData, action}) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static"
      keyboard={false}
      centered
      className="rounded-0"
      size="sm"
    >
      <Modal.Body>
        <div className="row">
          <div className="col">
            <div className="row mb-2">
              <div className="col text-end">
                <button 
                  className="btn"
                  onClick={() => handleClose()}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <img
                  src="/assets/site-images/warning.png" 
                  alt="delete" 
                  height={80}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col text-center">
                <div className="fs-5 fw-medium mb-2">{modalData.body}</div>
                {modalData.description && <div className="nav-font-color small">{modalData.description}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button 
                  className="btn btn-sm btn-outline-danger w-100"
                  onClick={action(modalData.id)}
                  type="button"
                >Delete</button>
              </div>
              <div className="col">
                <button 
                  className="btn btn-sm btn-outline-secondary w-100"
                  onClick={() => handleClose()}
                >Calcel</button>
              </div>
            </div>
          </div>
        </div>
        
      </Modal.Body> 
    </Modal>
  )
}