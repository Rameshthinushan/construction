import { Modal } from "react-bootstrap";

export const DeleteModal = ({show, handleClose, modalData, action}) => {
  console.log(modalData);
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static"
      keyboard={false}
      centered
      className="rounded-0"
    >
      <Modal.Body>
        <div className="row">
          <div className="col">
            <div className="row mb-2">
              <div className="col">
                <h4>{modalData.title}</h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="fs-5 fw-medium mb-2">{modalData.body}</div>
                {modalData.description && <div className="nav-font-color">{modalData.description}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col text-end">
                <button 
                  className="btn btn-sm btn-danger me-2 w-25"
                  onClick={action(modalData.id)}
                  type="button"
                >Delete</button>
                <button 
                  className="btn btn-sm btn-secondary w-25"
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