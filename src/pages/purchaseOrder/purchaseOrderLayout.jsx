import { useState } from "react"
import { Link } from "react-router"

const PurchaseOrderLayout = () => {
  const [navList, setNavList] = useState([{
    to: '/po',
    text: 'P/O',
    image: 'checkout.png',
  }, {
    to: '/supplier',
    text: 'Suppliers',
    image: 'supplier.png',
  }])

  return (
    <div className="row">
      <div className="col">
        <div className="d-flex flex-wrap">
            {
              navList.map((nl, i) => (
                <Link 
                  to={nl.to} 
                  className="text-decoration-none"
                  key={i}
                >
                  <div className="w-100px mb-3 me-3">
                    <div className="site-bg-compo shadow rounded-3 p-3 text-center h-100 zoom">
                      <div className="mb-2">
                        <img src={`assets/site-images/${nl.image}`} alt="" height={30}/>
                      </div>
                      <div className="nav-font-color small fw-medium">{nl.text}</div>
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

export default PurchaseOrderLayout