import React from 'react'
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import Logo from './logo.jpg';
import Courselist from '../Lecturer/Courselist'
import Coursedetails from '../Lecturer/CourseDetails'
const Lecturer = () => {
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

        <div class ="title">
            <h2> Department of Electrical and Information Engineering</h2>
            <h3>Cousrse assigned by Head of the Department</h3>
        </div>



      <div className="container">
        <h3 className="center">Lecturer</h3>



        <BrowserRouter>
        <div className="container">  
        <nav className="navbar navbar-expand-lg navheader" >  
          <div className="collapse navbar-collapse">  
            <ul className="navbar-nav mr-auto">   
              <li className="nav-item">  
                <Link to={'/Courselist'} className="nav-link">Course List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route path='/Courselist' component={Courselist} /> 
          <Route path='/Couredetails' component={Coursedetails} /> 
        </Switch>  
      </div>  
      </BrowserRouter>


      </div>
    </div>
  )
}

export default Lecturer