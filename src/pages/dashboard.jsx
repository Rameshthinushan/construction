
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
    <div className="row">
      <div className="col">
        <div className="row dt-dashboard-container">
          {/* side navigation panel */}
          <div className="col-1 site-bg-compo text-center">
            <div className="mb-4"><img src="assets/site-images/newlog.png" alt="" height="100"/></div>
            <div>
              <ul className="list-unstyled nav-font-color">
                <li className="mb-4">
                  <span className="active nav-list-item">
                    <i className="bi bi-grid-fill fs-5"></i>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="nav-list-item">
                    <i className="bi bi-house-fill fs-5"></i>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="nav-list-item">
                    <i className="bi bi-house-fill fs-5"></i>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="nav-list-item">
                    <i className="bi bi-house-fill fs-5"></i>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="nav-list-item">
                    <i className="bi bi-house-fill fs-5"></i>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="nav-list-item">
                    <i className="bi bi-house-fill fs-5"></i>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="nav-list-item">
                    <i className="bi bi-house-fill fs-5"></i>
                  </span>
                </li>
              </ul>
            </div>
            <div className="log-out">
              <span>
                <i className="bi bi-box-arrow-in-right fs-4"></i>
              </span>
            </div>
          </div>
          {/* content  panel */}
          <div className="col-11">
            {/* top navigation panel */}
            <div className="row mt-3 mb-3 ms-2 me-2 align-items-center">
              {/* quick navigation panel */}
              <div className="col-lg-8">
                <div className="site-bg-compo p-3 rounded-2 site-border">
                  <div className="row nav-font-color fw-medium text-center align-items-center">
                    <div className="col">
                      <div className="active-quick-nav p-2 quick-nav-item">Quick nav 1</div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <div className="p-2 quick-nav-item">Quick nav 1</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <div className="p-2 quick-nav-item">Quick nav 1</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <div className="p-2 quick-nav-item">Quick nav 1</div>
                      </div>  
                    </div>
                    <div className="col">
                      <div className="col">
                        <div className="p-2 quick-nav-item">Quick nav 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* customer Details */}
              <div className="col-lg-4">
                <div className="m-4">
                  <div className="align-items-center d-flex justify-content-end">
                    <div className="me-4 dec-font-color"><i className="bi bi-bell fs-4"></i></div>
                    <div className="">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <div>Thinusan</div>
                          <div className="small nav-font-color">Thinushan@gmail.com</div>
                        </div>
                        <div className="ms-4">
                          <span className="fw-medium p-2 rounded-2 site-bg-compo site-border">RT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="row ms-2 me-2">
              <div className="col"> 
                {/* content */}
                <div className="row">
                  <div className="col">
                    <div className="site-bg-compo p-3 rounded-2 site-border h-100">
                      <div>
                        <div class="text-end nav-font-color small mb-2">2025-01-01 <span className="fw-bold text-white ms-2 me-2">To</span> 2025-01-23</div>
                        <div className="d-flex align-items-end site-border-bottom pb-2">
                          <div className="w-100">
                            <h6 className="mb-3">Heloooo WelcomeBack Mr.Thinu 😎</h6>
                            <h5>Your Company</h5>
                            <h1 className="dec-font-color">Overview Breakdown</h1>
                          </div>
                          <div>
                            <img src="assets/site-images/rb_2148887079.png" alt="" height="140" className="zoom"/>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <div className="nav-font-color small">Revenue</div>
                          <div className="fw-bold fs-5">126,000,000.00</div> 
                        </div>
                        <div>
                          <div className="nav-font-color small"> Complete</div>
                          <div className="fw-bold fs-5">20</div>
                        </div>
                        <div>
                          <div className="nav-font-color small"> Ongoing </div>
                          <div className="fw-bold fs-5">10</div>
                        </div>
                        <div>
                          <div className="nav-font-color small">Year over Year Ratio</div>
                          <div className="fw-bold fs-5"><span>+ 100,000.00</span> <span className="ms-4">20%<i className="bi bi-arrow-up"></i></span></div>
                        </div>
                      </div>
                      <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mb-4">
                      <div className="col">
                        <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100 zoom">
                          <div className="d-flex">
                            <div className="w-100">
                              <div className="nav-font-color">Ongoing Projects</div>
                              <div><h1>10</h1></div>
                            </div>
                            <div>
                              <img src="assets/site-images/contruction.png" alt="" height="80"/>
                            </div>
                          </div>
                          <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100 zoom">
                          <div className="d-flex">
                            <div className="w-100">
                              <div className="nav-font-color">Ongoing Projects</div>
                              <div><h1>10</h1></div>
                            </div>
                            <div>
                              <img src="assets/site-images/contruction.png" alt="" height="80"/>
                            </div>
                          </div>
                          <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100 zoom">
                          <div className="d-flex">
                            <div className="w-100">
                              <div className="nav-font-color">Ongoing Projects</div>
                              <div><h1>10</h1></div>
                            </div>
                            <div>
                              <img src="assets/site-images/contruction.png" alt="" height="80"/>
                            </div>
                          </div>
                          <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 site-border h-100 zoom">
                          <div className="d-flex">
                            <div className="w-100">
                              <div className="nav-font-color">Ongoing Projects</div>
                              <div><h1>10</h1></div>
                            </div>
                            <div>
                              <img src="assets/site-images/contruction.png" alt="" height="80"/>
                            </div>
                          </div>
                          <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="site-bg-compo p-3 rounded-2 site-border h-100 text-center">
                      Load More...
                    </div>
                  </div>
                  <div className="col">
                    <div className="site-bg-compo p-3 rounded-2 site-border h-100 text-center">
                      Load More...
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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