import React, { Component } from 'react';  
import { Link} from 'react-router-dom'
import axios from 'axios';  
import POTable from '../Lecturer/POTable';  
import Logo from '../logo.jpg';

export default class FilterPO extends Component {  
  
  constructor(props) {  
    
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      console.log("hi",this.props.match.params.id);
      axios.get('https://localhost:5001/api/POes?id='+this.props.match.params.poId)  
        .then(response => {  
          this.setState({ business: response.data });  
      
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <POTable obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
        
        <div className="container">
          <h4 align="center">PO</h4>  
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
