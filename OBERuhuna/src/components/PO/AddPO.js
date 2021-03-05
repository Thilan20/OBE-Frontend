import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

class AddPO extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
  poid:'',  
  poName:'',    
  } 
  
  }   
  AddPO=()=>{  
    axios.post('https://localhost:5001/api/POes', {poid:this.state.poid,
    poName:this.state.poName,  })  
    
  .then(json => {  
      console.log(json.data.Status);
      alert("New PO Added to the list");   
      window.open("", "_self");
    window.close(); 

              }  
      )
  }

  onClose = () => {
    alert("Are you Sure You want to cancel?"); 
    window.open("", "_self");
    window.close();
  }
         
      

  handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
  }  
    

  render() {  
  return (
    
    <Container className="App"> 
     
    <h4 className="PageHeading">Add Program Outcomes </h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="poid" sm={2}>Enter Poid</Label>  
          <Col sm={10}>  
            <Input type="text" name="poid" onChange={this.handleChange} value={this.state.poid} placeholder="POid" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Enter PO Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="poName" onChange={this.handleChange} value={this.state.poName} placeholder="PO Name" />  
          </Col>  
        </FormGroup>  
           
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddPO} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger"  onClick={this.onClose} >Cancel</Button>
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
    
  );
}
}

export default AddPO