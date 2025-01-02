import React, { useState } from 'react';
import { Link } from 'react-router';

const NavMobile = ({to}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="row">
      <div className="col nab-bg pt-2 pb-2">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <Link to={to}>
                  <button className="mobile-nav-btn">
                    <i className="bi bi-chevron-left fs-4"></i>
                  </button>
                </Link>
              </div>
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
                <button className="menu-btn"
                  data-bs-toggle="collapse"
                  data-bs-target="#mobileMenu"
                  aria-expanded="false"
                  aria-controls="mobileMenu">
                  <i className="bi bi-text-left fs-4"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="collapse" id="mobileMenu">
            <div className="nab-bg p-3">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/add-staff" className="text-white text-decoration-none">Add Staff</a>
                </li>
                <li>
                  <a href="/add-shift" className="text-white text-decoration-none">Add Shift</a>
                </li>
                <li>
                  <a href="/add-expense" className="text-white text-decoration-none">Add Expense</a>
                </li>
                <li>
                  <a href="/add-site-inventory" className="text-white text-decoration-none">Add Site Inventory</a>
                </li>
                <li>
                  <a href="/add-daily-log" className="text-white text-decoration-none">Add Daily Log</a>
                </li>
                <li>
                  <a href="/meal-tracker" className="text-white text-decoration-none">Meal Tracker</a>
                </li>
                <li>
                  <a href="/cooking-supplies" className="text-white text-decoration-none">Cooking Supplies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMobile