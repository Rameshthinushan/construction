
import { useEffect, useState } from "react"

import Overview from '../overview/overview'
import SettingsLayouts from '../settings/settingsLayouts'
import UserList from '../settings/user/userList'
import FirstScreenView from "./mobileDashboard"

function MobileLayouts({domin}) {
  const components = {
    onloding: <FirstScreenView />,
    overview: <Overview />,
    settings: <SettingsLayouts />,
    user: <UserList />
  }
  
  const [relativePath , setRelativePath] = useState()
  const url = (typeof domin == 'undefined')? 'onloding' : domin
 
  useEffect(() => {
    setRelativePath(components[url])
  }, [domin])

  return (
    <div className="row">
      <div className="col">
        {relativePath}
      </div>
    </div>
  )
}

export default MobileLayouts