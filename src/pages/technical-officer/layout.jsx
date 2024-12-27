import Dropdown from 'react-bootstrap/Dropdown';
import DashBoard from "./dashboard"
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
      <div className="col text-bg-dark pt-1 pb-1">
        <div className="row align-items-center">
          <div className="col">
            <button className="menu-btn">
              <i className="bi bi-text-left fs-4"></i>
            </button>
          </div>
          <div className="col fw-medium nav-text-color">Task</div>
          <div className="col">
            <div className="d-flex justify-content-end align-items-center">
              <div className="me-2">
                <button className="mobile-nav-btn">
                  <i className="bi bi-bell fs-4"></i>
                </button>
              </div>
              <div className="nav-text-name me-2">RT</div>
              <div>
                <button className="mobile-nav-btn">
                  <i class="bi bi-box-arrow-right fs-4"></i>
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
