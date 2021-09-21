import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Row,
    Col,
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
            <Navbar.Collapse
                id='basic-navbar-nav'
                className='justify-content-end'>
                <Nav className='ml-auto pr-2'>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link href='#link'>Link</Nav.Link>
                </Nav>
                <Form>
                    <Row>
                        <Col>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='mr-sm-2'
                            />
                        </Col>
                        <Col md='auto'>
                            <Button variant='outline-success'>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
