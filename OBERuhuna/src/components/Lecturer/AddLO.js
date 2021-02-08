import React from 'react';  
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import { Link } from 'react-router-dom';

class AddLO extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
ID:'',  
Name:'',    
} 

}   
AddLO=()=>{  
  axios.post('https://localhost:5001/api/LOes', {Name:this.state.Name,  })  
  
.then(json => {   
  window.opener = null;
  window.open("","_self")
  window.close();

}  
 )  
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
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter LO Name" />  
          </Col>  
        </FormGroup>  
           
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <Link to={"/LOlist"} target="_blank">
          <button type="button" onClick={this.AddLO} className="btn btn-success">Submit</button>  </Link>
          </Col>  
          <Col sm={2}>  
            <Button color="danger">Cancel</Button>{''}  
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
   
export default AddLO;