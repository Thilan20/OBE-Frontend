import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import { render } from 'react-dom';

const checkboxes = [
  {
    name: 'Engineering Knowledge',
    key: 'checkBox1',
    label: 'Knowledge',
  },
  {
    name: 'Problem Analysis',
    key: 'checkBox2',
    label: 'Problem Analysis',
  },
  {
    name: 'Investigation',
    key: 'checkBox3',
    label: 'Investigation',
  },
  {
    name: 'Ethics',
    key: 'checkBox4',
    label: 'Ethics',
  },
];



class AddLO extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  

  loid:'',  
  loName:'',    
  } 
  }   

  AddLO=()=>{  
    axios.post('https://localhost:5001/api/LOes', {loid:this.state.loid,
    loName:this.state.loName,  })  
    
  .then(json => {  
      console.log(json.data.Status);  
      alert("Data Save Successfully"); 
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
    
    <Container className="App"> 
     
    <h4 className="PageHeading">Add Learning Outcomes </h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="loid" sm={2}>LO ID</Label>  
          <Col sm={10}>  
            <Input type="text" name="loid" onChange={this.handleChange} value={this.state.loid} placeholder="Enter LO Id" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}> LO Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="loName" onChange={this.handleChange} value={this.state.loName} placeholder="Enter LO Name" />  
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
  </Container>  
    
  );
}
}

export default AddLO