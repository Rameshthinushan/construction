import Dropdown from 'react-bootstrap/Dropdown';
// import DashBoard from "./dashboard"
import Staff from './staff';

import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

import DashBoard from './dashboard';
import AddShift from './add_shift';
import AddSiteInventory from './add_site_inventory';
import Task from './task';
import AddExpense from './add_expense';
import AddStaff from './add_staff';
import CookingSupplies from './cooking_supplies';
import AddDailyLog from './add_daily_log';

const components = {
  dashboard: <DashBoard/>,
  task: <Task/>,
  expanse: <AddExpense/>,
  staff: <AddStaff/>,
  suppliers: <CookingSupplies/>,
  'daily-log': <AddDailyLog/>,
  'employee-shift': <AddShift/>,
  'site-inventory': <AddSiteInventory/>
}

const Layout = () => {
  const {domin} = useParams()
  const [currentComponents, setCurrentComponents] = useState()
  
  useEffect(() => {
    const component = (typeof domin === 'undefined' || domin === '') ? 'dashboard' : domin
    setCurrentComponents(component)
  }, [domin]);
  console.log(currentComponents)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {components[currentComponents]}
        </div>
      </div>
    </div>
  )
}

const NavMobile = () => {
  return (
    <div className="row">
      <div className="col nab-bg pt-2 pb-2">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <span className='nav-text-name'>RT</span>
              </div>
              <div className="small">
                <div className="fw-medium">Thinushan</div>
                <div className="small">thinushan@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <div className="me-3">
                <button className="mobile-nav-btn">
                  <i className="bi bi-bell fs-4"></i>
                </button>
              </div>
              <div className="me-3">
                <button className="mobile-nav-btn">
                  <i className="bi bi-box-arrow-right fs-4"></i>
                </button>
              </div>
              <div>
                <button className="menu-btn">
                  <i className="bi bi-text-left fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
