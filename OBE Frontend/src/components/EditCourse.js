import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  

class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
  
         this.state = {  
            ModuleId: '',  
            Name: '',  
  
        }  
    }  
    
  
  componentDidMount() {  
      axios.get('http://localhost:5001/api/Modules/id='+this.props.ModuleId)  
          
              this.setState({   
                Name:this.state.Name, 
                ModuleId:this.state.ModuleId  });  //changeaaaaaaaaaaaaaaaaa         
  
    }  
  
  onChangeModuleId(e) {  
    this.setState({  
        ModuleId: e.target.value  
    });  
  }  
  onChangeName(e) {  
    this.setState({  
        Name: e.target.value  
    });    
  }  

  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {    
      ModuleId: this.state.ModuleId,  
      Name: this.state.Name,  
  
    };  
    axios.post('https://localhost:5001/api/Modules/', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/Courselist')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Module Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="moduleid" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="moduleId" value={this.state.moduleId} onChange={this.onChangeModuleId}  
                                placeholder="Enter ModuleId" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="name" value={this.state.name} onChange={this.onChangeName} placeholder="Enter RollNo" />  
                            </Col>  
                        </FormGroup>  
                          
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={2}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
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
  
export default Edit;  