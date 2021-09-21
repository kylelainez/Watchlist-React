import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import userService from './../utils/userService';

export default function LoginForm({ setSelected, handleUser }) {
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
            handleUser();
            history.push('/');
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            autoComplete='off'
            className='d-flex flex-column'>
            <FloatingLabel
                controlId='floatingEmail'
                label='Email address'
                className='mb-3'>
                <Form.Control
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formState.email}
                    onChange={handleInput}
                    required
                />
            </FloatingLabel>

            <FloatingLabel label='Password' controlId='floatingPassword'>
                <Form.Control
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={handleInput}
                    required
                />
            </FloatingLabel>
            <p ref={errorMessage}></p>
            <Button variant='primary' type='submit' size='lg' block='true'>
                Submit
            </Button>
            <p className='pt-2'>
                Don't have an Account?{' '}
                <span
                    onClick={() => setSelected('signup')}
                    style={{ cursor: 'pointer', color: '#fff' }}>
                    Sign up
                </span>
            </p>
        </Form>
    );
}
