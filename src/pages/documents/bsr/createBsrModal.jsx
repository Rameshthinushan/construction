import { Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import Request from '../../../api';
import { useDispatch } from 'react-redux';
import {setNewTool} from '../../../features/configration'; 

const CreateBsrModal = ({ show, handleClose, unitsData }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    tool_code: '',
    tool_name: '',
    unit: '',
    rate: ''
  });
  const [refType, setRefType] = useState(null);

  const [validate, setValidate] = useState(false);
  const [materialCount, SetMaterialCount] = useState(1);
  const options = unitsData.map((unit) => ({
    value: String(unit.id),
    label: unit.name
  }));

  const refTypeOptions = [
    { value: 'raw_material', label: 'Raw Material' },
    { value: 'labor', label: 'Labor' },
    { value: 'tool', label: 'Tool' },
    { value: 'plant', label: 'Plant' },
    { value: 'bsr_item', label: 'BSR Item' },
    { value: 'other', label: 'Other' }
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRefTypeChange = (selectedOption) => {
    setRefType(selectedOption?.value);
  };  

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      fullscreen={true}
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form className="">
              <div className="row mb-3 align-items-center">
                <div className="col-lg-1 fw-medium">BSR code:</div>
                <div className="col-lg-3 text-secondary">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="BSR Code"
                    name="tool_code"
                    value={formData.tool_code}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter a bsr code.</div>
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <div className="col-lg-1 fw-medium">BSR Unit:</div>
                <div className="col-lg-3 text-secondary">
                    <Select 
                      options={options} 
                      placeholder="BSR Unit"
                    />
                  <div className="invalid-feedback">Please enter a bsr code.</div>
                </div>
              </div>
              
              <div className="row mb-3 align-items-center">
                <div className="col-lg-1 fw-medium">BM Unit:</div>
                <div className="col-lg-3">
                    <Select 
                      options={options} 
                      placeholder="BM Unit"
                    />
                  <div className="invalid-feedback">Please enter a bsr code.</div>
                </div>
                
                <div className="col-lg-1 fw-medium">BM Unit Text:</div>
                <div className="col-lg-3">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="BM Unit Text"
                    name="bm_Unit_text"
                    required
                  />
                </div>
                
                <div className="col-lg-1 fw-medium">BM Unit No:</div>
                <div className="col-lg-3">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="BM Unit No"
                    name="bm_Unit_text"
                    required
                  />
                </div>
              </div>
              
              <div className="row mb-3 align-items-center">
                <div className="col">
                  <textarea name="" id="" className="form-control" placeholder="BSR Description"></textarea>
                </div>
              </div>
              
              {Array.from({ length: materialCount }).map((_, index) => (
                <div 
                  className="row mb-3 align-items-center"
                  key={index}
                >
                  <div className="col">
                    <div className="po-container pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100">
                      <div className="row align-items-center mb-2">
                        <div className="col-lg-10 text-uppercase text-secondary">bsr item - {index + 1}</div>
                        <div className="col-lg-2 text-end">
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            type="button"
                            onClick={() => SetMaterialCount(materialCount - 1)}
                            disabled={materialCount <= 1}
                          >
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col">
                          <Select 
                            options={refTypeOptions} 
                            placeholder="Ref Type"
                            onChange={handleRefTypeChange}
                          />
                        </div>

                        {refType && refType !== 'other' && (
                        <div className="col">
                          <Select 
                            options={options} 
                            placeholder="Ref Number"
                          />
                        </div>
                        )}

                        {refType && refType == 'other' && (
                        <div className="col">
                          <input
                            type="text"
                            className="form-control form-control-sm p-2"
                            placeholder="Ref Name"
                            required
                          />
                        </div>
                        )}

                        <div className="col">
                          <Select 
                            options={options} 
                            placeholder="Unites"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control form-control-sm p-2"
                            placeholder="Unit Rate"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control form-control-sm p-2"
                            placeholder="Quantity"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="row mb-3">
                <div className="col text-end">
                  <button 
                    onClick={() => SetMaterialCount(materialCount + 1)}
                    type='button'
                    class="btn btn-sm add-new-line-btn"
                  >
                    <i class="bi bi-plus-square me-2 color-purple"></i><span class="nav-font-color">Add new line</span>
                  </button>
                </div>
              </div>
              
              <div className="row">
                <div className="col text-center mt-3">
                  <button className="btn btn-warning w-25">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateBsrModal;
