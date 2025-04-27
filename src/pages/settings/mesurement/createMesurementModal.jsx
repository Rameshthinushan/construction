import { Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import Request from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTool } from '../../../features/configration';

const CreateMesuremnetModal = ({ show, handleClose, unitsData, toolid }) => {
  const dispatch = useDispatch();
  const toolDetails = useSelector((state) => state.configration.value.tool_rates);

  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    tool_code: '',
    tool_name: '',
    rates: [{ unit: '', rate: '' }]
  });

  useEffect(() => {
    if (toolid === "") {
      Request({
        url: '/get-next-code',
        body: { type: 'tool' }
      }).then((res) => {
        setFormData((prev) => ({ ...prev, tool_code: res.code }));
      }).catch(() => {});
    }
  }, [show]);

  useEffect(() => {
    if (!toolid) {
      setFormData({
        tool_code: '',
        tool_name: '',
        rates: [{ unit: '', rate: '' }]
      });
      return;
    }

    const updateTool = toolDetails.find(({ id }) => id === toolid);
    if (!updateTool) return;

    const ratesArray = Object.entries(updateTool.rates).map(([unit, rate]) => ({
      unit,
      rate: String(rate)
    }));

    setFormData({
      id: updateTool.id,
      tool_code: updateTool.tool_code,
      tool_name: updateTool.tool_name,
      rates: ratesArray
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

  const handleRateChange = (index, field, value) => {
    const updatedRates = [...formData.rates];
    updatedRates[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      rates: updatedRates
    }));
  };

  const addRateField = () => {
    setFormData((prev) => ({
      ...prev,
      rates: [...prev.rates, { unit: '', rate: '' }]
    }));
  };

  const removeRateField = (index) => {
    const updatedRates = [...formData.rates];
    updatedRates.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      rates: updatedRates
    }));
  };

  const createNewTool = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValidate(true);

    if (formData.tool_name && formData.rates.every(item => item.unit && item.rate)) {
      const ratesPayload = {};
      formData.rates.forEach(({ unit, rate }) => {
        ratesPayload[unit] = parseFloat(rate);
      });
      console.log({
          tool_code: formData.tool_code,
          tool_name: formData.tool_name,
          rates: ratesPayload,
        })

      // Request({
      //   url: '/create-tool',
      //   body: {
      //     tool_code: formData.tool_code,
      //     tool_name: formData.tool_name,
      //     rates: ratesPayload,
      //   },
      // }).then((res) => {
      //   if (res.message) {
      //     dispatch(setNewTool(res.tool_rate));
      //     handleClose();
      //   }
      // }).catch(() => {});
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
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-sm p-2"
                    placeholder="Mesurement Name"
                    name="tool_name"
                    value={formData.tool_name}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="invalid-feedback">Please Enter Mesurement Name.</div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="alert alert-info" role="alert">
                    <div>
                      <i className="bi bi-exclamation-triangle-fill me-2 fs-5"/>
                      <span className="fw-medium">Note:</span> When converting from days to hours, use a conversion factor of 8.
                    </div>
                    <div className=""><span className="fw-medium">For example:</span>1 day = 8 hours</div>
                  </div>
                </div>
              </div>

              {formData.rates.map((item, index) => (
                <div 
                  className="row align-items-baseline mb-2" 
                  key={index}
                >
                  <div className="col">
                    <Select
                      options={options}
                      value={options.find((opt) => opt.value === item.unit) || null}
                      onChange={(selected) => handleRateChange(index, 'unit', selected ? selected.value : '')}
                      placeholder="Select Unit"
                      className={validate && !item.unit ? 'is-invalid' : ''}
                    />
                    {validate && !item.unit && (
                      <div className="invalid-feedback d-block">Please select a unit.</div>
                    )}
                  </div>

                  <div className="col">
                    <input
                      type="number"
                      className="form-control form-control-sm p-2"
                      placeholder="Conversion Factor"
                      value={item.rate}
                      onChange={(e) => handleRateChange(index, 'rate', e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">Please enter a rate.</div>
                  </div>

                  
                  {formData.rates.length > 1 && (
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => removeRateField(index)}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  )}
                  
                </div>
              ))}

              <div className="mb-3 text-end">
                <button 
                  type="button" 
                  className="btn btn-sm btn-success w-25" 
                  onClick={addRateField}
                >
                  <i className="bi bi-plus"></i> Add Unit
                </button>
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

export default CreateMesuremnetModal;

