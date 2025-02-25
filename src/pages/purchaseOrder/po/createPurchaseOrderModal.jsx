import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import Select from 'react-select'

const CreatePurchaseOrderModal = ({show, handleClose}) => {
  const [formData, setFormData] = useState([{}]);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
  }

  const createNewUser = (e) => {
    e.preventDefault();
  }


  
  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      fullscreen={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Purchase Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form action="" onSubmit={createNewUser}>
              <div className="row align-items-center mb-2">
                <div className="col-lg-2">Purchase Order No <span className="text-danger">*</span></div>
                <div className="col-lg-2">
                  <input type="text" name="" id="" className='form-control form-control-sm p-2'/>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-2">Purchase Order Date <span className="text-danger">*</span></div>
                <div className="col-lg-2">
                  <input type="date" name="" id="" className='form-control form-control-sm p-2'/>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <div className="po-container pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100">
                    <div>
                      <span className="fs-3 fw-medium">Order By</span>
                      <span className="ms-2 small">(Your Details)</span>
                    </div>
                    <div className="row">
                      <div className="col">
                      <Select 
                        options={options} 
                        placeholder="Employee Working Projects"
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="po-container pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100">
                    <div>
                      <span className="fs-3 fw-medium">Order To</span>
                      <span className="ms-2 small">(Vendor Details)</span>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CreatePurchaseOrderModal