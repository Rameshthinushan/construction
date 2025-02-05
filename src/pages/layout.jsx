import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setConfigration } from "../features/configration"
import DashBoard from "./dashboard/dashboard"
import Request from '../api'

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    Request({
      url: '/get-role'
    })
      .then((res) => {
        if (res.message === 'success') {
          dispatch(setConfigration(res.role))
        }
      })
      .catch((e) => {
        console.log("Error fetching roles:", e);
      });
  }, []);

  return (
    <div className="container-fluid">
      <DashBoard/>
    </div>
  )
}



export default Layout
