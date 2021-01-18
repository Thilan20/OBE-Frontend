import React, { Component } from 'react';

import { Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Lecturer from './components/Lecturer/lecturer'
import Student from './components/Students/Student'
import Login  from './components/Login/login'
import CreateCourse from'./components/CreateCourse/CreateCourse'
import Admin from './components/Admin/Admin'


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
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
