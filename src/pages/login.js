import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from "react-redux";
import {toggleLogIn,selectUser} from '../features/userSlice';
import { useNavigate } from "react-router-dom";

export const Login  = () => {
    
    const user              = useSelector(selectUser);
    const dispatch          = useDispatch();
    const navigate          = useNavigate();

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        dispatch(toggleLogIn({email:email,isloggedIn:true}));
        alert(event.target[0].value);
        //navigate("/");
      }

    return(
        <div className="row mid">
            {/* <h4>user: {user}</h4> */}
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
                        <button className="btn btn-primary" type="submit" aria-label="log in">log in</button> 
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}