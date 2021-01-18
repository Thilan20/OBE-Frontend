import React from 'react'
import Logo from './logo.jpg'

import { Link} from 'react-router-dom'

 

const Home = () => {
  return (
    <div>
                 <div class= "header">

                 <img src={Logo} alt ='weblogo' />
                        <h1>Faculty of Engineering University of Ruhuna</h1>
                        <h2>Outcome Based Education System</h2>
                    </div>

      <div className="container">

      <div class="col-md-4 offset-md-8  "  align="right">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">Submit</button>
    
         </div>
     


        <h4 className="center">Home</h4>
        
            






      </div>

      <Link className="header" to='/admin'   >
          <button>Admin</button>
        </Link>
        <Link className="header" to='/lecturer'  >
          <button>LECTURER</button>
        </Link>
        <Link className="header" to='/student'  >
          <button>Student</button>
        </Link>

        <Link className="header" to='/login'  >
          <button>Login</button>
        </Link>



    </div>
  )
}



export default Home