import { useState } from "react"
import { Link } from "react-router"

const InventoryLayout = () => {
  const [navList, setNavList] = useState([{
    to: '/po',
    text: 'Material',
    image: 'checkout.png',
  }, {
    to: '/supplier',
    text: 'Plants',
    image: 'supplier.png',
  }, {
    to: '/tools',
    text: 'Tools',
    image: 'support.png',
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

export default InventoryLayout