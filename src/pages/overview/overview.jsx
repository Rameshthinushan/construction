import React from 'react'
import list from '../dashboard/listitems'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router'

 const Overview = () => {
  const url = `overview`;
  
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="site-bg-compo p-3 rounded-2 shadow h-100">
                <div>
                  <div className="text-end nav-font-color small mb-2">2025-01-01 <span className="fw-bold text-white ms-2 me-2">To</span> 2025-01-23</div>
                  <div className="d-flex align-items-end border-bottom pb-2">
                    <div className="w-100">
                      <h6 className="mb-3">Heloooo WelcomeBack Mr.Thinu 😎</h6>
                      <h5>Your Company</h5>
                      <h1 className="dec-font-color">Overview Breakdown</h1>
                    </div>
                    <div>
                      <img src="/assets/site-images/rb_2148887079.png" alt="" height="140" className="zoom"/>
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
                  <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 shadow h-100 zoom">
                    <div className="d-flex">
                      <div className="w-100">
                        <div className="nav-font-color">Ongoing Projects</div>
                        <div><h1>10</h1></div>
                      </div>
                      <div>
                        <img src="/assets/site-images/contruction.png" alt="" height="80"/>
                      </div>
                    </div>
                    <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                  </div>
                </div>
                <div className="col">
                  <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 shadow h-100 zoom">
                    <div className="d-flex">
                      <div className="w-100">
                        <div className="nav-font-color">Ongoing Projects</div>
                        <div><h1>10</h1></div>
                      </div>
                      <div>
                        <img src="/assets/site-images/contruction.png" alt="" height="80"/>
                      </div>
                    </div>
                    <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 shadow h-100 zoom">
                    <div className="d-flex">
                      <div className="w-100">
                        <div className="nav-font-color">Ongoing Projects</div>
                        <div><h1>10</h1></div>
                      </div>
                      <div>
                        <img src="/assets/site-images/contruction.png" alt="" height="80"/>
                      </div>
                    </div>
                    <div className="text-end mt-3"><i className="bi bi-arrow-right"></i></div>
                  </div>
                </div>
                <div className="col">
                  <div className="site-bg-compo pt-3 pb-3 ps-4 pe-4 rounded-2 shadow h-100 zoom">
                    <div className="d-flex">
                      <div className="w-100">
                        <div className="nav-font-color">Ongoing Projects</div>
                        <div><h1>10</h1></div>
                      </div>
                      <div>
                        <img src="/assets/site-images/contruction.png" alt="" height="80"/>
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
              <div className="site-bg-compo p-3 rounded-2 shadow h-100 text-center">
                Load More...
              </div>
            </div>
            <div className="col">
              <div className="site-bg-compo p-3 rounded-2 shadow h-100 text-center">
                Load More...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview