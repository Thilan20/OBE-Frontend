import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'



class AddasComponentLOtable extends Component {  
  

  constructor(props) {  
    super(props);  
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
<<<<<<< Updated upstream
              {this.props.obj.loName}  
=======
              {this.props.obj.name}  
>>>>>>> Stashed changes
            </td>
            
      </tr> 
    );
      
  }  
}  
  
export default AddasComponentLOtable; 