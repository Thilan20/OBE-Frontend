import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

class AddLO extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
  loid:'',  
<<<<<<< Updated upstream
  loName:'',
  //ModuleId:'', 
=======
  name:'',
  ModuleId:'', 
>>>>>>> Stashed changes
  } 
  
  }   
  AddLO=()=>{  
    axios.post('https://localhost:5001/api/LOes', {loid:this.state.loid,
<<<<<<< Updated upstream
  loName:this.state.loName,ModuleId:this.props.match.params.value })  
=======
  name:this.state.name,ModuleId:this.props.match.params.value })  
>>>>>>> Stashed changes
    
  .then(json => {  
      console.log(json.data.Status);  
      alert("Data Save Successfully to "+this.props.match.params.value); 
      window.open("", "_self");
    window.close(); 
      this.props.history.push('/LOlist') 
              }  
      )
  }

  onClose = () => {
    window.open("", "_self");
    window.close();
  }
         
      

  handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
  }  
    

  render() {  
  return (
    
<<<<<<< Updated upstream
=======

    <div>
    <div class= "header">
       <img src={Logo} alt ='weblogo' />
       <h1>
           <Link className="header" to='/'  >
               Faculty of Engineering University of Ruhuna
           </Link>
       </h1>
                         
       <h2>Outcome Based Education System</h2>

     </div>

>>>>>>> Stashed changes
    <Container className="App"> 
     
    <h4 className="PageHeading">Add Learning Outcomes </h4>  
    <Form className="form">  
      <Col>  
      <FormGroup row>  
          <Label for="loid" sm={2}></Label>  
            
        </FormGroup>  


        <FormGroup row>  
          <Label for="loid" sm={2}>loid</Label>  
          <Col sm={10}>  
            <Input type="text" name="loid" onChange={this.handleChange} value={this.state.loid} placeholder="Enter LO Id" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
<<<<<<< Updated upstream
            <Input type="text" name="loName" onChange={this.handleChange} value={this.state.loName} placeholder="Enter LO Name" />  
=======
            <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter LO Name" />  
>>>>>>> Stashed changes
          </Col>  
        </FormGroup>  
           
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddLO} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger" onClick={this.onClose}>Cancel</Button>
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
    
<<<<<<< Updated upstream
  </Container>  
=======
  </Container> 
 </div>  
>>>>>>> Stashed changes
    
  );
}

}

export default AddLO