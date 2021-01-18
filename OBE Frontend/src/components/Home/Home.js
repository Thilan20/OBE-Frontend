import React from 'react'
import Logo from './logo.jpg'
import background from './building.jpg'


import { Link} from 'react-router-dom'

var sectionStyle = {
 
  backgroundImage: "url(" + { background } + ")"
};


const Home = () => {
  return (
    <section style={ sectionStyle }>
       
    
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
              <button class="col-md-4   ">Admin</button>
          </Link>
          <div>
            <Link className="header" to='/lecturer'  >
              <button  class="col-md-4" >Lecturer</button>
            </Link>
          </div>
          <div>
            <Link className="header" to='/student'  >
              <button class="col-md-4">Student</button>
            </Link>
          </div>
          <div>
            <Link className="header" to='/login'  >
              <button class="col-md-4">Login</button>
            </Link>
          </div>
    </div>
    </section> 
  )
}



export default Home