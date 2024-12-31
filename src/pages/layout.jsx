import Dropdown from 'react-bootstrap/Dropdown';
import DashBoard from "./dashboard"
import Staff from './staff';

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-lg-none">
          <NavMobile/>
        </div>
      </div>

      <div className="row d-lg-flex d-none">
        <div className="col">
          working
        </div>
      </div>

      <div className="row d-lg-none">
        <div className="col">
          <DashBoard/>
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
