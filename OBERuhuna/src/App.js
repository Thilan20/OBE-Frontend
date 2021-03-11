import React, { Component } from 'react';

import { Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Lecturer from './components/Lecturer/lecturer'
import Student from './components/Students/Student'
import Login  from './components/Login/login'
import CreateCourse from'./components/CreateCourse/CreateCourse'
import Admin from './components/Admin/Admin'
import LOlist from './components/Lecturer/LOlist'
import Result from './components/Results/Result'
import AddResults from './components/Results/AddResults'
import View from './components/Lecturer/View'
import Filter from './components/Lecturer/Filter'
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
          <Route path='/Result' component={Result} />
          <Route path='/AddResults' component={AddResults} />
          <Route path='/LOlist' component={LOlist} /> 
          <Route path='/View' component={View} />
          <Route path='/filter/:id' component={Filter} /> 
        </div>        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

