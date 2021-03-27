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
<<<<<<< Updated upstream
              <Link to={"/"}>
                  <td >  
                    {this.props.obj.moduleId}  
                  </td> 
              </Link> 
=======
          <td >  
          <Link to={'/results/'+this.props.obj.moduleId}  >
          
            {this.props.obj.moduleId}  
           </Link>
           </td>  
>>>>>>> Stashed changes
          </div>
        
          <td >  
                    {this.props.obj.name}  
<<<<<<< Updated upstream
          </td> 

=======
            </td> 
            <td>
            <Link to ={'/viewLO/'+this.props.obj.moduleId}>
            
            <button class='btn btn-success'>
              View LOs
            </button>
          </Link>
          </td>


            <td>
            <Link to ={'/Feedback'}>
            
            <button class='btn btn-success'>
              Add Feedback
            </button>
          </Link>
          </td>
>>>>>>> Stashed changes

        </tr> 
    );
      
  }  
}  
  
export default Table; 