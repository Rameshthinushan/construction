import {useState} from 'react'
import { Link } from 'react-router'

 const ProjectAndClientsLayout = () => {
  const [projectAndClientsList, setProjectAndClientsList] = useState([{
    to: "/project",
    image: "project.png",
    text: "Projects", 
    show: true
  }, {
    to: "/clients",
    image: "public-relation.png",
    text: "Clients", 
    show: true
  }])

  return (
    <div className="row">
      <div className="col">
        <div className="d-flex flex-wrap">
            {
              projectAndClientsList.map((pc, i) => (
                <Link 
                  to={pc.to} 
                  className="text-decoration-none"
                  key={i}
                >
                  <div className="w-100px mb-3 me-3">
                    <div className="site-bg-compo site-border rounded-3 p-3 text-center h-100 zoom">
                      <div className="mb-2">
                        <img src={`assets/site-images/${pc.image}`} alt="" height={30}/>
                      </div>
                      <div className="nav-font-color small fw-medium">{pc.text}</div>
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
export default ProjectAndClientsLayout;