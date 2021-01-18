import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
class Table extends Component {  
 
      
    DeleteCourse= () =>{  
     axios.delete('https://localhost:5001/api/Modules/'+this.props.obj.moduleId) .then(json => {  
    alert('Record deleted successfully!!');  
    })  
    }  

  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.moduleId}   
          </td>  
          <td>  
            {this.props.obj.name}  
          </td>   
          <td>  
          <Link to={"/edit/"+this.props.obj.ModuleId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteCourse} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table; 