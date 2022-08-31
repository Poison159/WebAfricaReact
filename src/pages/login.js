import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from '../features/counterSlice';

export const Login  = () => {
    
    const count         = useSelector((state)=> state.counter.value);
    const dispatch      = useDispatch();

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        dispatch(increment());
        alert(event.target[0].value);
       
      }

    return(
        <div className="row mid">
            <h4> status : {count}</h4>
            <Card className="middle">
                <Card.Body className="middle">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button class="btn btn-primary" aria-label="log in">log in</button> 
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}