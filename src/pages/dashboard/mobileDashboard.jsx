import { Link } from "react-router"
import list from "./listitems"

const FirstScreenView = () => {
  return (
    <div className="row">
      <div className="col">
        <UserSection/>
        <Items />
        <Notification/>
        <Logout/>
      </div>
    </div>
  )
}

const Items = () => {
  return (
    <div className="row mb-4">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="site-border-bottom pb-2 mb-3 ms-1 fw-medium">Search Items</div>
          </div>
        </div>
        <div className="row">
          {
            list.map((l, i) => (
              <div className="col-4 mb-3" key={i}>
                <div className="site-bg-compo site-border rounded-3 p-3 text-center h-100">
                  <Link to={l.to} className="text-decoration-none">
                    <div className="dec-font-color mb-2">
                      <i className={`bi ${l.icon} fs-1`}></i>
                    </div>
                    <div className="nav-font-color">{l.text}</div>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
} 

const Notification = () => {
  return (
    <div className="row mb-4">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="site-border-bottom pb-2 mb-3 ms-1 fw-medium">Notification</div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mb-3">
            <div className="site-bg-compo site-border rounded-3 p-3 text-center h-100">
              <Link className="text-decoration-none">
                <div className="dec-font-color mb-2">
                  <i className={`bi bi-bell fs-1`}></i>
                </div>
                <div className="nav-font-color">Notification</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Logout = () => {
  return (
    <div className="row mb-4">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="site-border-bottom pb-2 mb-3 ms-1 fw-medium">Support</div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mb-3">
            <div className="site-bg-compo site-border rounded-3 p-3 text-center h-100">
              <Link className="text-decoration-none">
                <div className="dec-font-color mb-2">
                  <i className={`bi bi-power fs-1`}></i>
                </div>
                <div className="nav-font-color">Log out</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const UserSection = () => {
  return (
    <div className="row mb-4 mt-3">
      <div className="col">
        <div className="site-border rounded-3 p-3 site-bg-compo">
          <div className="d-flex align-items-center">
            <div className="me-3 ms-2">
              <span className='nav-text-name'>RT</span>
            </div>
            <div className="small w-auto">
              <div className="fw-medium">Thinushan <i className="bi bi-patch-check-fill text-primary"></i></div>
              <div className="small nav-font-color">thin@gmail.com</div>
            </div>
            <div className="w-100 text-end">
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
} 

export default FirstScreenView