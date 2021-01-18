import React from 'react';  
import axios from 'axios';   

import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
class Addcourse extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
ModuleId:'',  
Name:'',    
} 

}   
Addcourse=()=>{  
  axios.post('https://localhost:5001/api/Modules', {ModuleId:this.state.ModuleId,Name:this.state.Name,  })  
  
.then(json => {  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Courselist')   
 })  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Course Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="ModuleId" sm={2}>ModuleId</Label>  
          <Col sm={10}>  
            <Input type="text" name="ModuleId" onChange={this.handleChange} value={this.state.ModuleId} placeholder="Enter Module Id" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Module Name" />  
          </Col>  
        </FormGroup>  
           
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.Addcourse} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger">Cancel</Button>{' '}  
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
   
export default Addcourse;