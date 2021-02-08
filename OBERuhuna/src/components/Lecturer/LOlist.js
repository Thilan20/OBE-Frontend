import React, { Component } from 'react';  
import { Route, BrowserRouter,Link,Switch,withRouter} from 'react-router-dom'
import axios from 'axios';  
import Table1 from '../Lecturer/Table1';  
import Logo from '../logo.jpg';
export default class LOlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:5001/api/LOes')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table1 obj={object} key={i} />;  
      });  
    }  
  
    render() {  
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
          <h4 align="center">LO List</h4>  
          <table className="table table-striped " style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th colSpan="1" >Name</th>   
                <th colSpan="5">Action</th> 
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  </div>
      );  
    }  
  }  
