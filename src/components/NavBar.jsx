import React from 'react';
import axios from 'axios';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto pr-2'>
                    <Nav.Link onClick={}>Home</Nav.Link>
                    <Nav.Link href='#link'>Link</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type='text'
                        placeholder='Search'
                        className='mr-sm-2'
                    />
                    <Button variant='outline-success'>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
