import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  

class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangemoduleId = this.onChangemoduleId.bind(this);  
    this.onChangename = this.onChangename.bind(this);  
    this.onChangeid = this.onChangeid.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            moduleId: '',  
            name: '',  
           id:''
  
        }  
    }  
    
  
  componentDidMount() {  
    console.log("get",this.props.match.params.id);
      axios.get('https://localhost:5001/api/Modules?+id='+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                moduleId: response.data.moduleId,   
                name: response.data.name, 
                });  
            
          })  
          .catch(function (error) {  
            console.log(error);  
        })  
    }  
  
  onChangemoduleId(e) {  
    this.setState({  
        moduleId: e.target.value  
    });  
  }  
  onChangename(e) {  
    this.setState({  
        name: e.target.value  
    });    
  }  
  onChangeid(e) {  
    this.setState({  
        id: e.target.value  
    });    
  }  
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        id:this.props.match.params.id,  
      moduleId:this.state.moduleId,
      name: this.state.name,  
  
    };  
    axios.post('https://localhost:5001/api/Modules/',  {ModuleId:this.state.ModuleId,Name:this.state.Name,  })  
        .then(res => console.log(res.data));  
        console.log("hello",this.state.name);
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
                            <Label for="ModuleId" sm={2}>ModuleId</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="moduleId" value={this.state.moduleId} onChange={this.onChangemoduleId}   // ModuleId
                                placeholder="Enter ModuleId" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="name" value={this.state.name} onChange={this.onChangename} placeholder="Enter New Name" />  
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