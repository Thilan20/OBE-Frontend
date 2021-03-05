import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'



class AsComponentTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    DeleteAsComponent= () =>{  
     axios.delete('https://localhost:5001/api/AsComponents/'+this.props.obj.asID)  
    .then(json => {  
    alert('Record deleted successfully!!');
    window.location.reload(false);  
     
    }) 
   
    } 
     
  render() {  
    return (  
        <tr >  
          <div class=" col-md-1 offset-md-3">
            <td >  
              {this.props.obj.ascomponent}  
            </td>
            
          </div>      
          
            <td >  
              {this.props.obj.loid}  
            </td> 

           <td >  
              {this.props.obj.poid}  
            </td>

            <td >  
              {this.props.obj.marks}  
            </td>
            <td class=" offset-md-3" >  
              {this.props.obj.ld}  
            </td>
            <td >  
              {this.props.obj.type}  
            </td>
          <td>  
            <Link to={"/Ascomponent"}>
              <button type="button" onClick={this.DeleteAsComponent} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>

      </tr> 
    );
      
  }  
}  
  
export default AsComponentTable; 