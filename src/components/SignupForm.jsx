import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
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
        <Form
            onSubmit={handleSubmit}
            autoComplete='off'
            className='d-flex flex-column'>
            <FloatingLabel
                controlId='floatingFirst'
                label='First Name'
                className='mb-3'>
                <Form.Control
                    name='firstName'
                    placeholder='First Name'
                    value={formState.firstName}
                    onChange={handleInput}
                    required
                />
            </FloatingLabel>

            <FloatingLabel
                controlId='floatingLast'
                label='Last Name'
                className='mb-3'>
                <Form.Control
                    name='lastName'
                    placeholder='Last Name'
                    value={formState.lastName}
                    onChange={handleInput}
                    required
                />
            </FloatingLabel>

            <FloatingLabel
                controlId='floatingEmail'
                label='Email Address'
                className='mb-3'>
                <Form.Control
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formState.email}
                    onChange={handleInput}
                    required
                />
            </FloatingLabel>

            <FloatingLabel
                controlId='floatingPassword'
                label='Password'
                className='mb-3'>
                <Form.Control
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={handleInput}
                    required
                    ref={password}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId='floatingConfirmPassword'
                label='Confirm Password'
                className='mb-3'>
                <Form.Control
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={formState.confirmPassword}
                    onChange={handleInput}
                    required
                    ref={confirmPassword}
                />
            </FloatingLabel>

            <p ref={errorMessage}></p>

            <Button variant='primary' type='submit' size='lg' block='true'>
                Submit
            </Button>
            <p className='pt-2'>
                Already have an Account?{' '}
                <span
                    onClick={() => setSelected('login')}
                    style={{ cursor: 'pointer', color: '#fff' }}>
                    Login
                </span>
            </p>
        </Form>
    );
}
