import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import userService from './../utils/userService';

export default function LoginForm() {
    const history = useHistory();
    const errorMessage = useRef();
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = await userService.login(formState);
        if (message !== 'Success') {
            errorMessage.current.innerText = message;
            errorMessage.current.className = 'alert alert-danger';
        } else {
            history.push('/');
        }
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    value={formState.email}
                    onChange={handleInput}
                    required
                />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={formState.password}
                    onChange={handleInput}
                    required
                />
            </Form.Group>

            <p ref={errorMessage}></p>

            <Button variant='primary' type='submit' size='lg' block>
                Submit
            </Button>
        </Form>
    );
}
