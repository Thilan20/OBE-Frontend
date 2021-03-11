import React from 'react'
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import Logo from './logo.jpg';
import Courselist from '../Lecturer/Courselist'
import LOlist from '../Lecturer/LOlist'
import Coursedetails from '../Lecturer/CourseDetails'
import AddLO from '../Lecturer/AddLO'  
import Filter from '../Lecturer/Filter'
import FilterPO from '../Lecturer/FilterPO'
import AddResults from '../Results/AddResults'

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
          <Route path='/Courselist' component={Courselist}  /> 
          <Route path='/Couredetails' component={Coursedetails} /> 
          <Route path='/LOlist' component={LOlist} /> 
          <Route exact path='/AddLO' component={AddLO} />
          <Route path='/filter/:id' component={Filter} />  
          <Route path='/filterPO/:poId' component={FilterPO} /> 
          <Route path='/AddResults' component={AddResults} /> 
        </Switch>  
      </div>  
      </BrowserRouter>
      </div>
      <div class="col-md-4 offset-md-4  ">
      <Link to={"/View"} target="_blank">
    <button type="button" >View</button> </Link> 

    <Link to={"/AddResults"} target="_blank">
    <button type="button" >Add Result</button> </Link> 
    </div>
    </div>
  )
}

export default Lecturer