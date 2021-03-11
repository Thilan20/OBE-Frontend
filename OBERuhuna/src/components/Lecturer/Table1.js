import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import CourseDetails from '../Lecturer/CourseDetails'
import { Route,Link} from 'react-router-dom'


class Table1 extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    DeleteLO= () =>{  
      
      axios.delete('https://localhost:5001/api/LOes/'+this.props.obj.id)  
     .then(json => {  
     alert('Record deleted successfully!!');  
    
     }) 
    } 
     
  render() {  
    return (  
      
        <tr>
            <td >  
                    {this.props.obj.name}  
           </td> 
        
           <td>  
          <Link to={'/filterPO/'+this.props.obj.poId}>
              <button type="button"  className="btn btn-success">PO</button> </Link> 
          </td>
          <td>  
          <Link to={"/Courselist"}>
              <button type="button" onClick={this.DeleteLO} className="btn btn-danger">Delete</button> </Link> 
          </td>
        </tr> 
        
    );
      
  }  
}  
  
export default Table1; 