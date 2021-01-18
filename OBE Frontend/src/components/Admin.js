import React from 'react'
import Logo from './logo.jpg';
import { Link} from 'react-router-dom'

const Admin = () => {
  return (
    <div>
        <div class= "header">

                         <img src={Logo} alt ='weblogo' />
                           <h1>
                           <Link className="header" to='/'  >
                                Faculty of Engineering University of Ruhuna
                                </Link>
                                </h1>
                            
                            <h2>Outcome Based Education System</h2>

                    </div>

      <div className="container">
        <h3 className="center">Administrator</h3>
        

        <Link className="header" to='/createcourse'   >
          <button>Create Course</button>
        </Link>

      </div>
    </div>
  )
}

export default Admin