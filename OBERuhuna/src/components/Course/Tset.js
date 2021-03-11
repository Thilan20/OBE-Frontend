import React, {Component} from 'react';
//import {Table, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { Link ,Redirect} from 'react-router-dom'
import {FormFeedback, FormGroup, Input, Label,Form,Button} from "reactstrap";

const apiUrl = 'https://localhost:5001/api/Modules';

class EditCart extends Component{

    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data:{
            "moduleId": this.props.location.state.moduleId,
            "name":this.props.location.state.name,
            "id":this.props.location.state.id,
            
        },

    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        

        if (Object.keys(errors).length === 0) {
         
           
            axios.put('https://localhost:5001/api/Modules/'+this.props.match.params.id, data)
                .then((data) => {
                console.log(data);
            })
                
            console.log('complete');
            console.log(data);

            //this.setState(this.getInitialState());
        
        }

        
    }


    render() {

        const {data,errors} = this.state;

        return(
            <div className="Container">
                <h4 className="center">CART EDIT</h4>
                <div id="Registerbox">
                    <div className="box">
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup>
                                <Label for="productName">Product Name</Label>
                                <Input  value={data.moduleId}  name="moduleId" onChange={this.handleChange}/>
                                
                            </FormGroup>

                            <FormGroup>
                                <Label for="numOfProducts">Number Of Product</Label>
                                <Input  value={data.name} name="name" onChange={this.handleChange}/>
                               
                            </FormGroup>

                                <Button color="primary" >Save Changes</Button>

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditCart;