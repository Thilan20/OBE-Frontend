import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from './logo.jpg';
import {Button } from 'reactstrap'
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

import AsComponentTable from './AsComponentTable';
  
export default class AsComponentList extends Component {  
  
   moduleId=this.props.match.params.value;
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    } 
    componentDidMount(){  
      debugger;  
      
      axios.get('https://localhost:5001/api/AsComponents1?id=' +this.props.match.params.value)  
        .then(response => {  
      
          this.setState({ business: response.data });
          console.log(json.data.Status);  
          alert("Assignment Components"/*+this.props.match.params.value*/);   
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
    
    
    
    tabRow(mid=this.props.match.params.value){  
      return this.state.business.map(function(object, i){  
          return <AsComponentTable dataFromParent = {mid} obj={object} key={i} />;  
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
        <div class="column col-md-1 offset-md-5">
        <h4 align="center">Assessment Components of {this.props.match.params.value}</h4> 

        </div>
            
        <div class="column col-md-2 offset-md-4">
            <Link to={`/AddAsComponent/${this.props.match.params.value}`}> 
              <button> Add Assessment Components</button>
            </Link>
          </div>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >Assessnment Component</th>  
                <th >LO </th>
                <th>PO</th>
                <th> Marks</th>   
                <th>Learning Domain</th>
                <th>Type</th>
                <th>Delete</th>
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
    </div>  
      );  
    }  
  }  
