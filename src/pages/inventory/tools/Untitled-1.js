// import { Modal } from 'react-bootstrap';
// import { useState, useEffect } from 'react';
// import Select from 'react-select';
// import Request from '../../../api';
// import { useSelector, useDispatch } from 'react-redux';
// import {setNewTool} from '../../../features/configration'; 

// const CreateToolsModal = ({ show, handleClose, unitsData, toolid }) => {
//   const dispatch = useDispatch();
//   const toolDetails = useSelector((state) => state.configration.value.tool_rates);
//   const [validate, setValidate] = useState(false);
//   const [formData, setFormData] = useState({
//     tool_code: '',
//     tool_name: '',
//     unit: '',
//     rate: ''
//   });

//   useEffect(() => {
//     if (toolid === "") {
//       console.log('working', toolid);
//       Request({
//         url: '/get-next-code',
//         body: {
//           type: 'tool'
//         }
//       })
//       .then((res) => {
//         setFormData((prev) => ({
//           ...prev,
//           tool_code: res.code
//         }));
//       })
//       .catch(() => {});
//     }
//   }, [show]);

//   useEffect(() => {
//     if (!toolid) {
//       setFormData({
//         tool_code: "",
//         tool_name: "",
//         unit: '',
//         rate: '',
//       });
//       return;
//     }
  
//     const updateTool = toolDetails.find(({ id }) => id === toolid);

//     if (!updateTool) return;

//     const unit = Object.keys(updateTool.rates)[0];
//     setFormData({
//       id: updateTool.id,
//       tool_code: updateTool.tool_code,
//       tool_name: updateTool.tool_name,
//       unit: unit,
//       rate: updateTool.rates[unit]
//     });
//     console.log(formData);
//   }, [toolid, show]);

  

//   const options = unitsData.map((unit) => ({
//     value: String(unit.id),
//     label: unit.name
//   }));

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleUnitChange = (selectedOption) => {
//     setFormData((prev) => ({
//       ...prev,
//       unit: selectedOption ? selectedOption.value : ''
//     }));
//   };


//   const createNewTool = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setValidate(true);

//     // Example: basic front-end validation
//     if (formData.tool_name && formData.unit) {
//       Request({
//         url: '/create-tool',
//         body: formData,
//       }).then ((res) => {
//         if (res.message) {
//           const rate =  res.tool_rate.rate
//           const obj = {
//             "tool_code": res.tool_rate.tool_code,
//             "tool_name":  res.tool_rate.tool_name,
//             "rates": {
//               [rate]: res.tool_rate.unit
//             },
//             "id": res.tool_rate.id
//           }
//           console.log(obj)
//           dispatch(setNewTool(obj));
//           handleClose();
//         }
//       }).catch(() => {
        
//       })
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose} size="md">
//       <Modal.Header closeButton className="border-0" />
//       <Modal.Body>
//         <div className="row">
//           <div className="col">
//             <form
//               onSubmit={createNewTool}
//               className={`needs-validation ${validate ? 'was-validated' : ''}`}
//               noValidate
//             >
//               <div className="row mb-3">
//                 <div className="col-3 fw-medium">Tool code:</div>
//                 <div className="col text-secondary">{formData.tool_code}</div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col">
//                   <input
//                     type="text"
//                     className="form-control form-control-sm p-2"
//                     placeholder="Tool Name"
//                     name="tool_name"
//                     value={formData.tool_name}
//                     onChange={handleOnChange}
//                     required
//                   />
//                   <div className="invalid-feedback">Please enter a tool name.</div>
//                 </div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col">
//                   {console.log(formData.unit)}
//                 <Select
//   options={options}
//   value={options.find((opt) => opt.value === formData.unit) || null}
//   placeholder="Select Unit"
//   onChange={handleUnitChange}
//   className={validate && !formData.unit ? 'is-invalid' : ''}
// />
//                   {validate && !formData.unit && (
//                     <div className="invalid-feedback d-block">Please select a unit.</div>
//                   )}
//                 </div>

//                 <div className="col">
//                   <input
//                     type="text"
//                     className="form-control form-control-sm p-2"
//                     placeholder="Tool Rate"
//                     name="rate"
//                     value={formData.rate}
//                     onChange={handleOnChange}
//                     required
//                   />
//                    <div className="invalid-feedback">Please enter Tool type.</div>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col text-center">
//                   <button className="btn btn-sm btn-warning w-25" type="submit">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default CreateToolsModal;


import { Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import Request from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTool } from '../../../features/configration';

const CreateToolsModal = ({ show, handleClose, unitsData, toolid }) => {
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

              {formData.rates.map((item, index) => (
                <div className="row mb-2" key={index}>
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
                      placeholder="Rate"
                      value={item.rate}
                      onChange={(e) => handleRateChange(index, 'rate', e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">Please enter a rate.</div>
                  </div>

                  <div className="col-auto">
                    {formData.rates.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => removeRateField(index)}
                      >
                        −
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <div className="mb-3 text-end">
                <button type="button" className="btn btn-sm btn-success" onClick={addRateField}>
                  + Add Unit
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

export default CreateToolsModal;
