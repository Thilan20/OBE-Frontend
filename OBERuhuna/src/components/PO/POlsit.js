import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from '../logo.jpg';
import POTable from '../PO/POTables';  
import {Link} from 'react-router-dom'
  
export default class POlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []}; 

    }  
    
    componentDidMount(){  
      debugger;  
<<<<<<< Updated upstream
      axios.get('https://localhost:5001/api/POes/')  
=======
      axios.get('https://localhost:5001/api/POes?id='+this.props.match.params.value)  
>>>>>>> Stashed changes
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
<<<<<<< Updated upstream
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <POTable obj={object} key={i} />;  
=======
    tabRow(mid=this.props.match.params.value){  
      return this.state.business.map(function(object, i){  
          return <POTable  dataFromParent = {mid} obj={object} key={i} />;  
>>>>>>> Stashed changes
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

          <h4 align="center">PO List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >POId</th>  
                <th >PO Name</th>
<<<<<<< Updated upstream
                <th>Map</th>
=======
                
>>>>>>> Stashed changes
                <th> Delete</th>   
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
