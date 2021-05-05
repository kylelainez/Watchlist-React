import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import userService from './../utils/userService';

export default function SignupForm({ setSelected, handleUser }) {
    const history = useHistory();
    const password = useRef();
    const confirmPassword = useRef();
    const errorMessage = useRef();
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInput = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formState.confirmPassword === formState.password) {
            const message = await userService.signup(formState);
            if (message === 'Success') {
                handleUser();
                history.push('/');
            } else {
                errorMessage.current.innerText = message;
                errorMessage.current.className = 'alert alert-danger';
            }
        } else {
            password.current.classList.add('is-invalid');
            confirmPassword.current.classList.add('is-invalid');
            errorMessage.current.innerText = 'Password does not match!';
            errorMessage.current.className = 'alert alert-danger';
        }
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Row>
                <Form.Group controlId='formBasicFirstName' as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        placeholder='John'
                        name='firstName'
                        value={formState.firstName}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>

                <Form.Group controlId='formBasicLastName' as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        placeholder='Smith'
                        name='lastName'
                        value={formState.lastName}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='johnsmith@domain.com'
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
                    ref={password}
                />
            </Form.Group>

            <Form.Group controlId='formBasicConfirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={formState.confirmPassword}
                    onChange={handleInput}
                    required
                    ref={confirmPassword}
                />
            </Form.Group>

            <p ref={errorMessage}></p>

            <Button variant='primary' type='submit' size='lg' block>
                Submit
            </Button>
            <p
                onClick={() => setSelected('login')}
                style={{ cursor: 'pointer' }}>
                Already have an Account? Login
            </p>
        </Form>
    );
}
