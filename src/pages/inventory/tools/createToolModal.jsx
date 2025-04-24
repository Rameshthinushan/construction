import { Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import Request from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import {setNewTool, updateTool} from '../../../features/configration'; 

const CreateToolsModal = ({ show, handleClose, unitsData, toolid }) => {
  const dispatch = useDispatch();
  const toolDetails = useSelector((state) => state.configration.value.tool_rates);
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    tool_code: '',
    tool_name: '',
    unit: '',
    rate: ''
  });

  useEffect(() => {
    setValidate(false);
  }, [show])
  
  useEffect(() => {
    if (toolid === "") {
      Request({
        url: '/get-next-code',
        body: {
          type: 'tool'
        }
      }).then((res) => {
        setFormData((prev) => ({
          ...prev,
          tool_code: res.code
        }));
      }).catch(() => {});
    }
  }, [show]);

  useEffect(() => {
    if (!toolid) {
      setFormData({
        id: "",
        tool_code: "",
        tool_name: "",
        unit: '',
        rate: '',
      });
      return;
    }
  
    const updateTool = toolDetails.find(({ id }) => id === toolid);

    if (!updateTool) return;

    const unit = Object.keys(updateTool.rates)[0];
    setFormData({
      id: updateTool.id,
      tool_code: updateTool.tool_code,
      tool_name: updateTool.tool_name,
      unit: unit,
      rate: updateTool.rates[unit]
    });
  }, [toolid, show]);

  

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


  const createAndUpdateTool = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValidate(true);
  
    if (!formData.tool_name || formData.units.length === 0) return;
  
    const isUpdate = !!formData.id;
    const url = isUpdate ? '/update-tool' : '/create-tool';
  
    const payload = { ...formData };
    if (!isUpdate) delete payload.id;
  
    Request({ 
      url, 
      body: payload 
    }).then((res) => {
      if (!res.message) return;

      const tool = res.tool_rate;
      const rates = { [tool.unit]: tool.rate };
      const obj = {
        tool_code: tool.tool_code,
        tool_name: tool.tool_name,
        rates,
        id: tool.id,
      };
      isUpdate ? dispatch(updateTool(obj)) : dispatch(setNewTool(obj));
      handleClose();
    }).catch(() => {});
  };

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form
              onSubmit={createAndUpdateTool}
              className={`needs-validation ${validate ? 'was-validated' : ''}`}
              noValidate
            >
              <div className="row mb-3">
                <div className="col-3 fw-medium">Tool code:</div>
                <div className="col text-secondary">{formData.tool_code}</div>
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
                  value={options.find((opt) => opt.value === formData.unit) || null}
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

export default CreateToolsModal;
