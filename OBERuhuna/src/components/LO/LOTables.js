import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'


class LOTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    DeleteLO= () =>{  
     axios.delete('https://localhost:5001/api/LOes/'+this.props.obj.loid)  
    .then(json => {  
    alert('Record deleted successfully!!');
    window.location.reload(false);  
     
    }) 
   
    } 
     
  render() {  
    return (  
        <tr >  
          <div class=" col-md-1 offset-md-5">
            <td >  
              {this.props.obj.loid}  
            </td>
            
          </div>      
          
            <td >  
              {this.props.obj.loName}  
            </td>
            <td>  
            <Link to={"/"}>
              <button type="button"  className="btn btn-success">Add PO</button> 
              </Link>                 
          </td>
          <td>  
            <Link to={"/LOlist"}>
              <button type="button" onClick={this.DeleteLO} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>
      </tr> 
    );
      
  }  
}  
  
export default LOTable; 