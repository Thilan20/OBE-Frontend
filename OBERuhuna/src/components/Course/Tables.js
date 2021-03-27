import React, { Component } from 'react';  
import axios from 'axios';  
import { Route,Link} from 'react-router-dom'


class Table extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    DeleteCourse= () =>{  
     axios.delete('https://localhost:5001/api/Modules1/'+this.props.obj.moduleId)  
    .then(json => {  
    alert('Record deleted successfully!!');  
     
    }) 
   
    } 
     
  render() {  
    return (  
        <tr>  
          <td >  
            {this.props.obj.moduleId}  
          </td>  
          <td>  
            {this.props.obj.name}  
<<<<<<< Updated upstream
          </td>
          <td>
            {this.props.obj.credits}
          </td> 
          <td>
            {this.props.obj.state}
          </td>   
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
=======
          </td> 
          <td>
            {this.props.obj.credits}
            </td>  
            <td>
            {this.props.obj.type}
            </td>  
            <td>
            {this.props.obj.state}
            </td>  
>>>>>>> Stashed changes
          <td>  
            <Link to={"/"}>
              <button type="button" onClick={this.DeleteCourse} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>
        </tr> 
    );
      
  }  
}  
  
export default Table; 