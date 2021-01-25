import React, { Component } from 'react';  
import { Link } from 'react-router-dom';

class Table extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
   
     
  render() {  
    return (  
        <tr colSpan="4">
          <div class=" offset-md-4">
              <Link to={"/"}>
                  <td >  
                    {this.props.obj.moduleId}  
                  </td> 
              </Link> 
          </div>
        
          <td >  
                    {this.props.obj.name}  
          </td> 

        </tr> 
    );
      
  }  
}  
  
export default Table; 