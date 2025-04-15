import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import list from './listitems'

import Overview from '../overview/overview'
import SettingsLayouts from '../settings/settingsLayouts'
import UserList from '../settings/user/userList'
import MobileLayouts from './mobileLayouts'
import PurchaseOrderLayout from '../purchaseOrder/purchaseOrderLayout'
import PurchaseOrder from '../purchaseOrder/po/purchaseOrder'
import Suppliers from '../purchaseOrder/supplier/suppliers'
import ProjectAndClientsLayout from '../projectsAndClients/layout'
import RoleList from '../settings/role/roleList'
import StatusList from '../settings/status/statusList'
import Profile from '../settings/profile/profile'
import ClientList from '../projectsAndClients/clients/clientList'
import  InventoryLayout  from '../inventory/inventoryLayout'
import ProjectList from '../projectsAndClients/project/projectList'
import ReportsLayout from '../reports/reportsLayout'

const components = {
  overview: <Overview />,
  settings: <SettingsLayouts />,
  user: <UserList />,
  'purchase-order':<PurchaseOrderLayout />,
  po: <PurchaseOrder />,
  supplier: <Suppliers />,
  projects: <ProjectAndClientsLayout />,
  project: <ProjectList />,
  clients: <ClientList />,
  role: <RoleList />,
  status: <StatusList />,
  profile: <Profile />,
  inventory: <InventoryLayout />,
  reports: <ReportsLayout/>
  // clients: <ClientList/>
}

const DashBoard = () => {
  const {domin, subdomin} = useParams()
  const url = (typeof domin == 'undefined')? 'onloding' : domin
  return (
    <div className="row">
      <div className="col">
        <div className="row d-lg-flex d-none">
          <div className="col">
            <DashboardDeskTop
              domin={domin}
            />
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col">
            <MobileLayouts
              domin={domin}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardDeskTop = ({domin}) => {
  const [relativePath , setRelativePath] = useState()
  const url = (typeof domin == 'undefined')? 'overview' : domin
 
  useEffect(() => {
    setRelativePath(components[url])
  }, [domin])

  return (
    <div className="row">
      <div className="col">
        <div className="row dt-dashboard-container">
          <div className="col-1 site-bg-compo text-center border-end">
            <div className="mb-4">
              <img src="/assets/site-images/newlog.png" alt="" height="100"/>
            </div>
            <ListItemsDeskTop
              url={url}
            />
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
    <div className="m-4 me-0">
      <div className="align-items-center d-flex justify-content-end">
        <div className="me-4"><i className="bi bi-bell fs-4"></i></div>
        <div className="">
          <div className="d-flex align-items-center">
            <div className="small">
              <div>Thinusan</div>
              <div className="small nav-font-color">Thinushan@gmail.com</div>
            </div>
            <div className="ms-4">
              <span className="fw-medium p-2 rounded-2 user-info">RT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItemsDeskTop = ({url}) => {
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
                    <span className={`${(i.slug?.includes(url))? `active` : ''} nav-list-item`}>
                      <i className={`bi ${i.icon} fs-5`}></i>
                    </span>
                  </Link>
                </OverlayTrigger>
              </li>
            : ''
          ))
        }
        <li className="mt-5 border-top pt-3">
          <Link to='/logout' className="nav-font-color">
            <span className="nav-list-item">
              <i className="bi bi-power fs-5"></i>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  ) 
}

const QuickNav = ({url}) => {
  const [quickNav, setQuickNav] = useState([{
    to: '/purchase-order',
    slug: ['purchase-order', 'po', 'supplier'],
    text: 'Purchase Order',
    show: true
  }, {
    to: '/inventory',
    slug: ['inventory'],
    text: 'Inventory',
    show: true
  }, {
    to: '/expanse',
    slug: ['expanse'],
    text: 'Expanse',
    show: true
  }, {
    to: '/documents',
    slug: ['documents'],
    text: 'BSR / BOQ',
    show: true
  }, {
    to: '/settings',
    slug: ['settings', 'user', 'mesurement', 'role', 'profile', 'status'],
    text: 'Settings',
    show: true
  }])
  return (
    <div className="site-bg-compo p-3 rounded-2 shadow">
      <div className="row fw-medium text-center align-items-center">
        {quickNav.map((q, i) => (
          (q) ? 
            <div className="col" key={i}>
              <Link to={q.to} className="nav-font-color text-decoration-none">
                <div className={`p-2 ${(q.slug?.includes(url))? `active-quick-nav` : `quick-nav-item`}`}>{q.text}</div>
              </Link>
            </div>
           : ''
        ))}
      </div>
    </div>
  )
}

export default DashBoard