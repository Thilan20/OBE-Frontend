import React, { Component } from 'react';

import { Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Lecturer from './components/Lecturer/lecturer'
import Student from './components/Students/Student'
import Login  from './components/Login/login'
import CreateCourse from'./components/CreateCourse/CreateCourse'
import Admin from './components/Admin/Admin'
import Talbe from './components/Lecturer/Table'
import LO from './components/LO/AddLO'
import LOlist from './components/LO/LOlist'
import DynamicTable from './components/LO/DynamicTable'
import AddPO from './components/PO/AddPO';
import POlist from './components/PO/POlsit'
import AsComponentList from './components/AssignmentComponents/AsComponentList';
import AddAsComponent from './components/AssignmentComponents/AddAsComponent';
import test from './components/AssignmentComponents/Test';
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
          <Route path ='/AddLO/:value' component = {LO}/>
          <Route path = '/LOlist/:value' component ={LOlist} />
          <Route path ='/DynamicTable' component={ DynamicTable}/>
          <Route path = '/AddPO' component={AddPO}/>
          <Route path='/POlist' component={POlist}/>
          <Route path='/Ascomponent/:value' component={AsComponentList}/>
          <Route path= '/AddAsComponent/:value1' component={AddAsComponent} />
          <Route path='/test' component ={test} />
        </div>        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
