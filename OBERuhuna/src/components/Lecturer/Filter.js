import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import CourseDetails from '../Lecturer/CourseDetails'
import { Route,Link} from 'react-router-dom'


class Filter extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    FilterLO= () =>{  
      axios.get('https://localhost:5001/api/LOes/'+this.props.obj.id)  
     .then(json => {  
     alert('Record deleted successfully!!');  
     window.location.reload(false);
     }) 
    } 
     
  render() {  
    return (  
      
        <tr>
            <td >  
                    {this.props.obj.name}  
           </td> 
           <td >  
                    {this.props.obj.moduleId}  
           </td> 
          <td>  
            <Link to={"/"} target="_blank">
              <button type="button"  className="btn btn-success">Add PO</button> 
              </Link>                 
          </td>
          <td>  
          <Link to={"/LOlist"}>
              <button type="button" onClick={this.FilterLO} className="btn btn-danger">Filter</button> </Link> 
          </td>
        </tr> 
        
    );
      
  }  
}  
  
export default Filter; 