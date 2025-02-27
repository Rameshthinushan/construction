import React, { useState } from 'react'
import { Link } from 'react-router'

const SettingsLayouts = () => {
  const [settingList, setSettingList] = useState([{
      to: "/profile",
      image: "profile.png",
      text: "Profile", 
      show: true
  },{
    to: "/user",
    image: "group.png",
    text: "User", 
    show: true
  }, {
    to: "/mesurement",
    image: "ruller.png",
    text: "Mesurement", 
    show: true
  }, {
    to: "/role",
    image: "management.png",
    text: "Role", 
    show: true
  }, {
    to: "/status",
    image: "time-tracking.png",
    text: "Status", 
    show: true
  }])

  return (
    <div className="row">
      <div className="col">

        <div className="d-flex flex-wrap">
          {
            settingList.map((sl, i) => (
              <Link to={sl.to} className="text-decoration-none">
                <div className="w-100px mb-3 me-3" key={i}>
                  <div className="site-bg-compo site-border rounded-3 p-3 text-center h-100 zoom shadow">
                    <div className="mb-2">
                      <img src={`assets/site-images/${sl.image}`} alt="" height={30}/>
                    </div>
                    <div className="nav-font-color small fw-medium">{sl.text}</div>
                  </div>
                </div>
              </Link>
            ))
          }
          

          
        </div>

      </div>
    </div>
  )
}

export default SettingsLayouts