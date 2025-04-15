import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setConfigration } from "../features/configration"
import { setAllRoles } from '../features/role'
import DashBoard from "./dashboard/dashboard"
import Request from '../api'

const Layout = () => {
  const dispatch = useDispatch()
  const [loding, Setloding] = useState(false)
  useEffect(() => {
    Request({
      url: '/configs'
    }).then((res) => {
      console.log(res.status)
      //if (res.status === 200) {
        dispatch(setConfigration(res));
        Setloding(true)
      //}
    }).catch((e) => {
      console.log("Error fetching roles:", e);
    });
  }, []);

  return (
    <div className="container-fluid">
      {
        (loding)? <DashBoard/> : <LodingTemplate/>
      }
      
    </div>
  )
}

const LodingTemplate = () => {
  return (
    <div className="row">
      <div className="col">
        Loding...
      </div>
    </div>
  )
}



export default Layout
