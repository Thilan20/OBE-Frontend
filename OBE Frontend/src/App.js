import React, { Component } from 'react';

import { Route, BrowserRouter,Link,Switch  } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Lecturer from './components/lecturer'
import Student from './components/student'
import Login  from './components/login'
import CreateCourse from'./components/CreateCourse'
import Addcourse from './components/Addcourse';  
import Courselist from './components/Courselist';  
import EditCourse from './components/EditCourse';
import Table from './components/Table';
class App extends Component {
  render() {
    return (
      


      <BrowserRouter>
      <div>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/lecturer' component={Lecturer} />
          <Route path='/student' component={Student} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route path='/createcourse' component={CreateCourse} />
        </div>


        
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/Addcourse'} className="nav-link">Addcourse</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Courselist'} className="nav-link">Course List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/Addcourse' component={Addcourse} />  
          <Route path='/edit/:id' component={EditCourse} />  
          <Route path='/Courselist' component={Courselist} />  
          <Route path='/Table' component={Table} /> 
        </Switch>  
      </div>  
      </div>
      </BrowserRouter>

      
    );
  }
}


export default App;
