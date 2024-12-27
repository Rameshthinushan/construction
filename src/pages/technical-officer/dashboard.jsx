
import Select from 'react-select'

const DashBoard = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const find = (e) => {
    console.log('adv', e)
  }

  const today = new Date().toJSON().slice(0, 10);
  return (
    <div className="row">
      <div className="col">

        <div className="row">
          <div className="col text-end mt-3 mb-3">
            <button class="btn btn-sm site-btn me-2">
              <i className="bi bi-plus-circle-fill me-2"></i>
              Create New Task
            </button>
            <button class="btn btn-sm btn-secondary">
              <i className="bi bi-funnel-fill me-2"></i>
              Filter
            </button>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li className="border-bottom fw-medium pb-1 pt-1 small">
                <div className="row">
                  <div className="col-9">Task Details (<span className='small'>{today}</span>)</div>
                  <div className="col-3">Action</div>
                </div>
              </li>
              {Array.from({ length: 12 }).map((_, index) => (
                <li
                  key={index} 
                  className="border-bottom pb-1 pt-1 small"
                >
                  <div className="row align-items-center">
                    <div className="col-9">
                      <div className="fw-medium">Excavation</div>
                      <div className="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex">
                        <div className="me-2">
                          <button className="btn btn-sm btn-warning">
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                        </div>
                        <div className="">
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
   
            </ul>
          </div>
        </div>

        {/* <Select 
          options={options} 
          placeholder="Select an option" 
          onChange={(e) => find(e.target)}
        /> */}
      </div>
    </div>
  )
}

export default DashBoard