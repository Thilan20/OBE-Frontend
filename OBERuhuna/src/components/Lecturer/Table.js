import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import CourseDetails from '../Lecturer/CourseDetails'
import { Route,Link} from 'react-router-dom'


class Table extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
   
     
  render() {  
    return (  
        <tr colSpan="4">
          <div class=" offset-md-4">
          <td >  
            {this.props.obj.moduleId}  
          </td>  
          </div>
        
            <td >  
                    {this.props.obj.name}  
           </td> 
          
        
          <td>  
            <Link to={"/"}>
              <button type="button"  className="btn btn-success">Add LO</button> 
              </Link>                 
          </td>
          <td>  
            <Link to={"/"}>
              <button type="button"  className="btn btn-success">Add PO</button> 
              </Link>                 
          </td>
          <td>  
             
            <Link to={"../Lecturer/CourseDetails"}>
              <button type="button"  className="btn btn-danger">Details</button> 
              </Link>
                            
          </td>  
        </tr> 
    );
      
  }  
}  
  
export default Table; 