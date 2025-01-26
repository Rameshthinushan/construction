import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import Settings from './settings'
import Overview from './overview/overview'

const components = {
  overview: <Overview />,
  settings: <Settings />
}

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
  const {domin} = useParams()
  const [relativePath , setRelativePath] = useState()
  const url = (typeof domin == 'undefined')? 'overview' : domin
 
  useEffect(() => {
    setRelativePath(components[url])
  }, [domin])

  return (
    <div className="row">
      <div className="col">
        <div className="row dt-dashboard-container">
          <div className="col-1 site-bg-compo text-center">
            <div className="mb-4">
              <img src="assets/site-images/newlog.png" alt="" height="100"/>
            </div>
            <ListItemsDeskTop
              url={url}
            />
            <div className="log-out">
              <span>
                <i className="bi bi-box-arrow-in-right fs-4"></i>
              </span>
            </div>
          </div>

          <div className="col-11">
            <div className="row mt-3 mb-3 ms-2 me-2 align-items-center">
              <div className="col-lg-8">
                <QuickNav 
                  url={url}
                />
              </div>
              <div className="col-lg-4">
                <CustomerInfo />
              </div>
            </div>

            <div className="row ms-2 me-2">
              <div className="col"> 
                {relativePath}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

const CustomerInfo = () => {
  return (
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
  )
}

const ListItemsDeskTop = ({url}) => {
  const [list, setList] = useState([{
    to: '/overview',
    slug: 'overview',
    icon: 'bi-grid',
    tooltipText: 'Overview',
    placement: 'right',
    show: true
  }, {
    to: '/settings',
    slug: 'settings',
    icon: 'bi bi-gear',
    tooltipText: 'Settings',
    placement: 'right',
    show: true
  }])

  return (
    <div>
      <ul className="list-unstyled">
        {
          list.map((i, k) => (
            (i.show)? 
              <li 
                className="mb-4"
                key={k}
              >
                <OverlayTrigger
                  placement={i.placement}
                  overlay={
                    <Tooltip id={`tooltip-${i}`}>
                      {i.tooltipText}
                    </Tooltip>
                  }
                >
                  <Link to={i.to} className="nav-font-color">
                    <span className={`${(url === i.slug)? `active` : ''} nav-list-item`}>
                      <i className={`bi ${i.icon} fs-5`}></i>
                    </span>
                  </Link>
                </OverlayTrigger>
              </li>
            : ''
          ))
        }
      </ul>
    </div>
  ) 
}

const QuickNav = ({url}) => {
  const [quickNav, setQuickNav] = useState([{
    to: '/overview',
    slug: 'overview',
    text: 'Overview',
    show: true
  }, {
    to: '/settings',
    slug: 'settings',
    text: 'Settings',
    show: true
  }, {
    to: '/settings',
    slug: 'settings',
    text: 'Quick nav 1',
    show: true
  }, {
    to: '/settings',
    slug: 'settings',
    text: 'Quick nav 2',
    show: true
  }, {
    to: '/settings',
    slug: 'settings',
    text: 'Quick nav 3',
    show: true
  }])
  return (
    <div className="site-bg-compo p-3 rounded-2 site-border">
      <div className="row fw-medium text-center align-items-center">
        {quickNav.map((q, i) => (
          (q) ? 
            <div className="col" key={i}>
              <Link to={q.to} className="nav-font-color text-decoration-none">
                <div className={`p-2 ${(url === q.slug)? `active-quick-nav` : `quick-nav-item`}`}>{q.text}</div>
              </Link>
            </div>
           : ''
        ))}
      </div>
    </div>
  )
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