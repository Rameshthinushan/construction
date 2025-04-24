import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setConfigration } from "../features/configration"
import { setAllRoles } from '../features/role'
import DashBoard from "./dashboard/dashboard"
import Request from '../api'

const Layout = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    Request({
      url: '/configs'
    }).then((res) => {
      dispatch(setConfigration(res));
      setLoading(false)
    }).catch((e) => {
      setError("Error fetching configuration: " + e?.response?.data?.message);
      console.log("Error fetching roles:", e?.response?.data?.message);
    });
  }, []);

  return (
    <div className="container-fluid">
      {
        (loading) ? <LoadingTemplate error={error}/> : <DashBoard/>
      }
    </div>
  )
}

const LoadingTemplate = ({ error }) => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      {error && (
        <div class="ms-2">
          <div className="text-danger">
            {error}
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout