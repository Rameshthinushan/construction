
import { Link } from 'react-router'
import DashboardNew from './dashboardSanja'


const DashBoard = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="row d-lg-flex d-none">
          <div className="col">
            <DashboardDeskTop/>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col">
            <DashBoardMobile/>
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardDeskTop = () => {
  return (
    <DashboardNew/>
  ); 
}

const DashBoardMobile = () => {
  const dashboardLsit = [{
    to: 'employee-shift',
    icon: 'bi-person-circle',
    text: 'Employee Shift',
    endIcon: 'bi-chevron-right'
  }, {
    to: 'site-inventory',
    icon: 'bi-box-seam-fill',
    text: 'Site Inventory',
    endIcon: 'bi-chevron-right'
  }, {
    to: 'task',
    icon: 'bi-list-check',
    text: 'Task',
    endIcon: 'bi-chevron-right', 
  }, {
    to: 'expanse',
    icon: 'bi-list-check',
    text: 'Expanse',
    endIcon: 'bi-chevron-right', 
  },  {
    to: 'staff',
    icon: 'bi-list-check',
    text: 'Staff',
    endIcon: 'bi-chevron-right', 
  }, {
    to: 'suppliers',
    icon: 'bi-list-check',
    text: 'Cooking Suppliers',
    endIcon: 'bi-chevron-right', 
  }, {
    to: 'daily-log',
    icon: 'bi-list-check',
    text: 'Daily Log',
    endIcon: 'bi-chevron-right', 
  }] 

  

  return (
    <div className="row d-lg-none">
      <div className="col">
        <div className="row mb-4 mt-3">
          <div className="col">
            <div className="border rounded-3 p-2">
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <span className='nab-bg nav-text-name'>RT</span>
                </div>
                <div className="small w-auto">
                  <div className="fw-medium">Thinushan <i className="bi bi-patch-check-fill text-primary"></i></div>
                  <div className="small text-secondary">thin@gmail.com</div>
                </div>
                <div className="w-100 text-end">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          dashboardLsit.map((item, i) => (
            <ListItem
              key={i}
              property={item}
            />
          ))
        }
        {/* <div className="row mb-2">
          <div className="col">
            <Link to="employee-shift" className="text-decoration-none text-dark">
              <div className="bg-body-secondary border p-2 rounded-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <i className="bi bi-person-circle fs-4"></i>
                      </div>
                      <div className="small fw-medium">Employee Shift</div>
                    </div>
                  </div>
                  <div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div> */}

        {/* <div className="row mb-2">
          <div className="col">
            <div className="bg-body-secondary border p-2 rounded-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="bi bi-box-seam-fill fs-4"></i>
                    </div>
                    <div className="small fw-medium">Site Inventory</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* <div className="row mb-2">
          <div className="col">
            <div className="bg-body-secondary border p-2 rounded-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="bi bi-people fs-4"></i>
                    </div>
                    <div className="small fw-medium">Staffs Management</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="row mb-2">
          <div className="col">
            <div className="bg-body-secondary border p-2 rounded-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="bi bi-person-circle fs-4"></i>
                    </div>
                    <div className="small fw-medium">Add Employee Shift</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row mb-2">
          <div className="col">
            <div className="bg-body-secondary border p-2 rounded-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="bi bi-person-circle fs-4"></i>
                    </div>
                    <div className="small fw-medium">Add Employee Shift</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="border-bottom pt-2"></div>
        
        <div className="row mt-3 mb-2">
          <div className="col small fw-medium text-secondary">
            Settings & Preferances
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="bg-body-secondary border p-2 rounded-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="bi bi-gear-fill fs-4"></i>
                    </div>
                    <div className="small fw-medium">Settings</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="bg-body-secondary border p-2 rounded-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="bi bi-bell-fill fs-4"></i>
                    </div>
                    <div className="small fw-medium">Notification</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom pt-2"></div>
        <div className="row mt-3 mb-2">
          <div className="col small fw-medium text-secondary">
            Support
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <div className="p-2">
              <div className="d-flex align-items-center text-danger">
                <div className="me-2">
                  <i className="bi bi-box-arrow-in-left fs-4"></i>
                </div>
                <div className="small fw-medium">Logout</div>
              </div>
            </div>
          </div>
        </div>

        {/* <Staff/> */}
      </div>
    </div>
  )
}

const ListItem = ({property}) => {
  return (
    <div className="row mb-2">
      <div className="col">
        <Link to={property.to} className="text-decoration-none text-dark">
          <div className="bg-body-secondary border p-2 rounded-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <i className={`bi ${property.icon} fs-4`}></i>
                  </div>
                  <div className="small fw-medium">{property.text}</div>
                </div>
              </div>
              <div>
                <i className={`bi ${property.endIcon}`}></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ); 
}

export default DashBoard