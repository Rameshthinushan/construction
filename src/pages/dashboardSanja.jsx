import React, { useState } from "react";

const DashboardNew = () => {
  const items = [
    { icon: "bi bi-house", text: "Dashboard" },
    { icon: "bi bi-cash-coin", text: "Receivables" },
    { icon: "bi bi-arrow-repeat", text: "Returns" },
    { icon: "bi bi-people", text: "Customers" },
    { icon: "bi bi-wallet2", text: "Payable" },
    { icon: "bi bi-cart", text: "Sales" },
    { icon: "bi bi-box-seam", text: "Inventory" },
    { icon: "bi bi-cloud-download", text: "Imports" },
    { icon: "bi bi-tag", text: "Cutting" },
    { icon: "bi bi-diagram-2", text: "EDI" },
    { icon: "bi bi-building", text: "Showroom" },
  ];

  const [activeId, setActiveId] = useState(null);
  const [navId, navActiveId] = useState(null);
  const list = [
    'Company Snapshot',
    'Cut & Sold Lookup',
    'Inventory Snap Shot',
    'Balance to Sell Sales Summary',
    'Open Orders to Pick',
    'Period Comparision Report',
    'SR Availability',
    'Sales Forecast Report',
    'Detailed Period Comparision Repor',
    'Style Cost Period',
  ];


  let constructionList = [];
  list.forEach((list, index) => {
    constructionList.push(
      <li
        className={`mt-4 row ${activeId === index ? "active" : ""}`}
        key={index}
        onClick={() => setActiveId(index)}
      >
        {list}
      </li>)
  })

  return (
    <div>
      <div className="container-fluid  bg-color">
        <div className="row justify-content-center">
          <div className="col-11 dashboard-color">
            <div className="row px-1 mt-0">
              <div className="col-md-2 col-lg-2   bg-white rounded-start">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="assets/site-images/logo.png"
                      className="logo rounded mt-2"
                      alt=""
                    />
                  </div>
                  <div className="col-4 mt-3">
                    <b>Constructions</b>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-8 bg-white">
                <div className="row">
                  <div className="col-md col-lg p-2 ">
                    <form
                      className="d-flex "
                      role="search"
                    >
                      <input
                        className="form-control input-color me-2 "
                        type="search"
                        placeholder="Search Dashboard..."
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  <div className="col-md col-lg p-2">
                    <div className="input-group  mb-3">
                      <span
                        className="input-group-text text-primary input-color"
                        id="basic-addon1"
                      >
                        Switch Company
                      </span>
                      <select
                        className="form-select input-color"
                        aria-label="Default select example"
                      >
                        <option value="1"></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 p-2 bg-white rounded-end">
                <div className="row">
                  <div className="col-md-3 col-lg-3">
                    <img
                      src="assets/site-images/user.png"
                      className="avatar rounded"
                      alt=""
                    />
                  </div>
                  <div className="col-md-3 col-lg-3">
                    welcome back,
                    <span className="text-primary">Yossi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row px-1">
              <div className="col bg-white mt-2  rounded">
                <div className="row">
                  {items.map((item, index) => (
                    <div
                      className={`col-lg col-md mt-4  mb-4 ${navId === index ? "nav-active" : ""}`}
                      key={index}
                      onClick={() => navActiveId(index)}
                    >
                      <div className="row">
                        <div className="col-4  ">
                          <span className="rounded-circle p-2 prime-color icon-circle">
                            <i className={item.icon + " text-dark"}></i>
                          </span>
                        </div>
                        <div className="col-4">
                          <span className="d-block">{item.text}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row px-1 mt-2">
              <div className="col-lg-2 col-md-2 bg-white rounded px-2">
                <ul className="ul-none text-start fs-6">{constructionList}</ul>
              </div>
              <div className="col-lg-10 col-md-10">
                <div className="row justify-content-between gap-2">
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4  mt-2">
                        <span className="rounded p-2 revenue-color">
                          <i className="bi bi-currency-dollar text-white"></i>
                        </span>
                      </div>
                      <div className="col-4 ">
                        <div><b>$32,350.00</b></div>
                        <div>TotalRevenue</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4 mt-2">
                        <span className="rounded p-2 expence-color">
                          <i className="bi bi-arrow-up-right text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$6,000</b></div>
                        <div>TotalExpenses</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4  mt-2">
                        <span className="rounded p-2 account-receive-color">
                          <i className="bi bi-box-arrow-down-left text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$56,044.45</b></div>
                        <div>AccountReceivable</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4  mt-2">
                        <span className="rounded p-2 payable">
                          <i className="bi bi-box-arrow-in-up-right text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$56,044.45</b></div>
                        <div>AccountPayable</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between mt-5 gap-2">
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4  mt-2">
                        <span className="rounded p-2 missing-images">
                          <i className="bi bi-images text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$56 0445</b></div>
                        <div>ItemsMissingImages</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4  mt-2">
                        <span className="rounded p-2 fob-cost">
                          <i className="bi bi-cash-coin text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$56 0445</b></div>
                        <div>FoBCosts</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4  mt-2">
                        <span className="rounded p-2 po-items">
                          <i className="bi bi-cash-coin text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$56 0445</b></div>
                        <div>PoItemsMissing</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md shadow p-4 bg-white rounded">
                    <div className="row">
                      <div className="col-4">
                        <span className="rounded p-2 booked">
                          <i className="bi bi-cash-coin text-white"></i>
                        </span>
                      </div>
                      <div className="col-4">
                        <div><b>$56 0445</b></div>
                        <div>Booked</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between mt-5 ">
                  <div
                    className="col-6  shadow p-4 mb-5 bg-white rounded bg-black text-start"
                    style={{ maxWidth: '49%' }}
                  >
                    <b>Invoices</b>

                  </div>
                  <div
                    className="col-6  p-4 shadow p-3 mb-5 bg-white rounded bg-black text-start"
                    style={{ maxWidth: '50%' }}
                  >
                    <b>Sales Forcast</b>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-md col-lg shadow rounded p-5 bg-white p-2 text-center">
                    <i className="bi bi-arrow-clockwise"></i> loading More..
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNew;
