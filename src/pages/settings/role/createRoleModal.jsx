import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateRoleModal = ({show, handleClose, permission}) => {
  const role = useSelector((state) => state.configration.value)
  const [formData, setFormData] = useState([{
    role: '',
    comments: '',
    active: '',
    permission: []
  }]);

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
    console.log(formData);
  }

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      permission: checked
        ? [...prevState.permission, value] // Add permission
        : prevState.permission.filter((p) => p !== value) // Remove permission
    }));
  };


  const createNewUser = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  
  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      size="md"
    >
      <Modal.Header 
        closeButton 
        className="border-0" 
      />
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form action="" onSubmit={createNewUser}>
              <div className="row mb-3">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col">
                      <input 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="New Role"
                        name="role"
                        onChange={handelOnChange}
                        value={formData.role}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <textarea 
                        type="text" 
                        className="form-control form-control-sm p-2" 
                        placeholder="Comments"
                        name="comments"
                        onChange={handelOnChange}
                        value={formData.comments}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col small">
                      <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="active" 
                        id="active" 
                        onChange={handelOnChange}
                        value={true}
                      />
                      <label className="form-check-label" for="active">Active</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="active" 
                        id="nonactive" 
                        onChange={handelOnChange}
                        value={false}
                      />
                      <label className="form-check-label" for="nonactive">Non Active</label>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className='border-bottom mb-2 pb-2'> Set user Permisions </div>
                    </div>
                  </div>
                  <div className="row small">
                    {
                      permission.map((p, i) => (
                        <div 
                          className="col-lg-4 col-md-6 col-6 mb-2" 
                          key={i}
                        >
                          <div className="form-check">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              value={p.id}
                              id="defaultCheck1" 
                              onChange={() => handlePermissionChange}
                              checked={formData.permission?.includes(p.id)}
                            />
                            <label 
                              className="form-check-label" 
                              for="defaultCheck1"
                            >
                              {p.text}
                            </label>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>              
              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-sm btn-warning w-25">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CreateRoleModal