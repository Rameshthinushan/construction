import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import Select from 'react-select'

const CreatePurchaseOrderModal = ({show, handleClose}) => {
  const [formData, setFormData] = useState([{}]);
  const [itemsCount, setItemsCount] = useState(1)
  const [shippingDetailsShow, setShippingDetailsShow] = useState(false)
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
              <div className="row align-items-center mb-2">
                <div className="col-lg-2">Purchase Order Date <span className="text-danger">*</span></div>
                <div className="col-lg-2">
                  <input type="date" name="" id="" className='form-control form-control-sm p-2'/>
                </div>
              </div>

              <div className="row align-items-center mb-2">
                <div className="col-lg-2">Purchase Site  <span className="text-danger">*</span></div>
                <div className="col-lg-2 small">
                  <Select 
                    options={options} 
                    placeholder="Choose"
                  />
                </div>
              </div>

              <div className="row mt-4 mb-2">
                <div className="col">
                  <div className="po-container pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100">
                    <div className="mb-2">
                      <span className="fs-5 fw-medium">Order By</span>
                      <span className="ms-2 small">(Your Details)</span>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Your Company Name'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Your Business Name'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Contact Number'/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Company Email'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Your Company Address'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Your Company Address Line 2'/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='City'/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='State'/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Postal Code / Zip Code'/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="po-container pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100">
                    <div className="mb-2">
                      <span className="fs-5 fw-medium">Order To</span>
                      <span className="ms-2 small">(Vendor Details)</span>
                    </div>
                    <div className="row mb-2">
                      <div className="col small">
                        <Select 
                          options={options} 
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Vendor Business Name'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Vendor Contact Number'/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Vendor Email'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Vendor Address'/>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Vondor Address Line 2'/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='City'/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='State'/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm p-2" placeholder='Postal Code / Zip Code'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <input 
                        className="form-check" 
                        type="checkbox" 
                        onChange={() => setShippingDetailsShow(!shippingDetailsShow)}
                        value="" 
                        id="defaultCheck1" 
                      />
                    </div>
                    <div className="small">Add Shipping Details</div>
                  </div>
                </div>
              </div>

              {
                (shippingDetailsShow) ? (
                  <div className="row mt-2 mb-4">
                    <div className="col-6">
                      <div className="po-container pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100">
                        <div className="mb-2">
                          <span className="fs-5 fw-medium">Shipped From</span>
                          <span className="ms-2 small">(Your Shipping Address Details)</span>
                        </div>
                        <div className="row mb-2">
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='Your Shipping ( Store / Site ) Name'/>
                          </div>
                        </div>
                        {/* <div className="row mb-2">
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='Your Business Name'/>
                          </div>
                        </div> */}
                        <div className="row mb-2">
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='( Store / Site ) Contact Number'/>
                          </div>
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='( Store / Site ) Email'/>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='Your ( Store / Site ) Address'/>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='Your ( Store / Site ) Address Line 2'/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='City'/>
                          </div>
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='State'/>
                          </div>
                          <div className="col">
                            <input type="text" className="form-control form-control-sm p-2" placeholder='Postal Code / Zip Code'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : ''
              }


              <div className="row">
                <div className="col">
                  <ul className="list-unstyled">
                    <li className="table-header p-2">
                      <div className="row">
                        <div className="col-lg-6">item</div>
                        <div className="col-lg-3">mesuremnt</div>
                        <div className="col-lg-3">Unit</div>
                      </div>
                    </li>
                    {
                      Array.from({ length: itemsCount }).map((_, index) => (
                        <li 
                          className="p-3 small po-container border-bottom"
                          key={index}
                        >
                          <div className="row align-items-center">
                            <div className="col-lg-6 small">
                              <Select 
                                options={options} 
                                placeholder="Choose"
                              />
                            </div>
                            <div className="col-lg-3">
                              <Select 
                                options={options} 
                                placeholder="Choose"
                              />
                            </div>
                            <div className="col-lg-2">
                              <input type="text" className="form-control form-control-sm p-2" />
                            </div>
                            {
                              (itemsCount > 1)? (
                                <div className="col-1">
                                  <button 
                                    className="btn btn-sm btn-danger"
                                    onClick={() => setItemsCount(itemsCount - 1)}
                                  ><i className="bi bi-x-lg"></i></button>
                                </div>
                              ) : ''
                            }
                            
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <button 
                    className="btn btn-sm add-new-line-btn me-4"
                    onClick={() => setItemsCount(itemsCount + 1)}
                  >
                    <i class="bi bi-plus-square me-2 color-purple"></i>
                    <span className="nav-font-color">Add new line</span>
                  </button>

                  <button className="btn btn-sm add-new-line-btn">
                    <i class="bi bi-file-text-fill me-2 color-purple"></i>
                    <span className="nav-font-color">Add Notes</span>
                  </button>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col"></div>
                <div className="col text-end">
                  <div className="fs-3 fw-medium">
                    Total number of products : {itemsCount}
                  </div>
                </div>
              </div>

              <div className="row mt-2 mb-4">
                <div className="col text-center">
                  <button className="btn btn-sm btn-warning w-25">Place Your Purchase</button>
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