import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setConfigration } from "../features/configration"
import { setAllRoles } from '../features/role'
import DashBoard from "./dashboard/dashboard"
import Request from '../api'

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    Request({
      url: '/configs'
    }).then((res) => {
      // const {}  
      //console.log(res.labor_rates)

      //if (res.message == 'SUCCESS') {
        console.log('workign')
        dispatch(setConfigration(res));
      //}
    }).catch((e) => {
      console.log("Error fetching roles:", e);
    });
  }, []);

  // useEffect(() => {
  //   Request({
  //     url: `/get-roles`
  //   }).then((res) => {
  //     if(res.message === 'Success') {
  //       dispatch(setAllRoles(res.roles))
  //     }
  //   }).catch((e) => (
  //     console.log(e)
  //   ))
  // }, [])

  return (
    <div className="container-fluid">
      <DashBoard/>
    </div>
  )
}



export default Layout
