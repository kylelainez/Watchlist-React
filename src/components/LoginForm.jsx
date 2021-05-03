import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import userService from './../utils/userService';

export default function LoginForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        userService.login(formState);
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
                />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    );
}
