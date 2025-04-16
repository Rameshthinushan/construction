import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import Select from 'react-select'

const CreateToolsModal = ({show, handleClose, unitsData}) => {
  const [formData, setFormData] = useState([{}]);
  const [itemsCount, setItemsCount] = useState(1)
  const [shippingDetailsShow, setShippingDetailsShow] = useState(false)

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  
  const options = unitsData.map(unit => ({
    value: String(unit.id),
    label: unit.name
  }));

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
  }

  const createNewUser = (e) => {
    e.preventDefault();
  }


  
  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={createNewUser}>

              <div className="row">
                <div className="col">
                  <div className="row mb-3">
                    <div className="col">Tool code</div>
                    <div className="col">T-004</div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Tool Name"
                        name="toolName" 
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <Select 
                        options={options} 
                        placeholder="Units"
                      />
                    </div>
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Tools Rate"
                        name="rate" 
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col text-center">
                      <button class="btn btn-sm btn-warning w-25">Submit</button>
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

export default CreateToolsModal