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
        <Navbar
            bg='#000'
            variant='dark'
            expand='lg'
            style={{ padding: '8px 30px' }}>
            <Navbar.Brand href='#home'>Watchlist React</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto pr-2'>
                    <Nav.Link>Home</Nav.Link>
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
