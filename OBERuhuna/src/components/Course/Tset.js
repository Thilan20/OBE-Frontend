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
         
            data.numOfProducts = parseInt(data.numOfProducts);
            data.totalPrice = data.numOfProducts*this.price;
            axios.put(`${apiUrl}/${this.props.location.state.cartid}`, data)
                .then((data) => {
                console.log(data);
            })
                .catch((error) => {
                    console.log(error);
                });
            //Resetting the form
            console.log('complete');
            console.log(data);
            console.log(this.price);
            console.log(this.props.location.state.cartid);

            //this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }

        return (<Redirect to= './Cart'/>)
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
                                <Input  value={data.productName} invalid={errors.productName ? true : false} name="productName" onChange={this.handleChange}/>
                                <FormFeedback>{errors.productName}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="numOfProducts">Number Of Product</Label>
                                <Input  value={data.numOfProducts} invalid={errors.numOfProducts ? true : false} name="numOfProducts" onChange={this.handleChange}/>
                                <FormFeedback>{errors.numOfProducts}</FormFeedback>
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