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

  const [validate, setValidate] = useState(false);

  const options = unitsData.map((unit) => ({
    value: String(unit.id),
    label: unit.name
  }));

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUnitChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      unit: selectedOption ? selectedOption.value : ''
    }));
  };

  const createNewTool = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValidate(true);

    // Example: basic front-end validation
    if (formData.tool_name && formData.unit) {
      Request({
        url: '/create-tool',
        body: formData,
      }).then ((res) => {
        if (res.message) {
          const rate =  res.tool_rate.rate
          const obj = {
            "tool_code": res.tool_rate.tool_code,
            "tool_name":  res.tool_rate.tool_name,
            "rates": {
              [rate]: res.tool_rate.unit
            },
            "id": res.tool_rate.id
          }
          console.log(obj)
          dispatch(setNewTool(obj));
          handleClose();
        }
      }).catch(() => {
        
      })
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form
              onSubmit={createNewTool}
              className={`needs-validation ${validate ? 'was-validated' : ''}`}
              noValidate
            >
              <div className="row mb-3">
                <div className="col-3 fw-medium">Bsr code:</div>
                <div className="col text-secondary">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Bsr Code"
                    name="tool_code"
                    value={formData.tool_code}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter a bsr code.</div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Tool Name"
                    name="tool_name"
                    value={formData.tool_name}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter a tool name.</div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <Select
                    options={options}
                    placeholder="Select Unit"
                    onChange={handleUnitChange}
                    className={validate && !formData.unit ? 'is-invalid' : ''}
                  />
                  {validate && !formData.unit && (
                    <div className="invalid-feedback d-block">Please select a unit.</div>
                  )}
                </div>

                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Tool Rate"
                    name="rate"
                    value={formData.rate}
                    onChange={handleOnChange}
                    required
                  />
                   <div className="invalid-feedback">Please enter Tool type.</div>
                </div>
              </div>

              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-sm btn-warning w-25" type="submit">
                    Submit
                  </button>
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
