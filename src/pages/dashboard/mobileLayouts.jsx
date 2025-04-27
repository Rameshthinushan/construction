
import { useEffect, useState } from "react"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router'

import Overview from '../overview/overview'
import SettingsLayouts from '../settings/settingsLayouts'
import UserList from '../settings/user/userList'
import FirstScreenView from "./mobileDashboard"
import Profile from '../settings/profile/profile'
import RoleList from '../settings/role/roleList'

import list from "./listitems"

function MobileLayouts({domin}) {
  const components = {
    onloding: <FirstScreenView />,
    overview: <Overview />,
    settings: <SettingsLayouts />,
    user: <UserList />,
    profile: <Profile />,
    role: <RoleList/>
  }
  
  const [relativePath , setRelativePath] = useState()
  const url = (typeof domin == 'undefined')? 'onloding' : domin
 
  useEffect(() => {
    setRelativePath(components[url])
  }, [domin])

  return (
    <div className="row">
      <div className="col">
        <MobileNavigation
          url={url}
        />
        <div className="row">
          <div className="col">
            {relativePath}
          </div>
        </div>

      </div>
    </div>
    
  )
}

const MobileNavigation = ({url}) => {
  return (
    <>
      <div className="row sticky-top">
        <div className="bg-white col m-2 p-3 rounded-2 shadow mobile-nav-border">
          <div className="d-flex justify-content-between">
            {
              list.map((i, k) => (
                (i.show)? 
                  <div 
                    className=""
                    key={k}
                  >
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip id={`tooltip-${i}`}>
                          {i.tooltipText}
                        </Tooltip>
                      }
                    >
                      <Link to={i.to} className="nav-font-color">
                        <span className={`${(i.slug?.includes(url))? `side-nav-active` : ''} nav-list-item`}>
                          <i className={`bi ${i.icon} fs-5`}></i>
                        </span>
                      </Link>
                    </OverlayTrigger>
                  </div>
                : ''
              ))
            }
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col color-purple fw-medium">
          {url}
        </div>
      </div>
    </>
  )
}

export default MobileLayouts