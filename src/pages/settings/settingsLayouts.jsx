import React, { useState } from 'react'
import { Link } from 'react-router'

const SettingsLayouts = () => {
  const [settingList, setSettingList] = useState([{
    to: "/user",
    image: "group.png",
    text: "User", 
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
                  <div className="site-bg-compo site-border rounded-3 p-3 text-center h-100 zoom">
                    <div className="mb-2">
                      <img src={`assets/site-images/${sl.image}`} alt="" height={30}/>
                    </div>
                    <div class="nav-font-color">{sl.text}</div>
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