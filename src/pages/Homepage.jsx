import React, { useState } from 'react';
import { Container, Row, Image, Col, Button } from 'react-bootstrap';
import TMDB from './../tmdb.svg';
import LoginForm from './../components/LoginForm';
import SignupForm from './../components/SignupForm';

export default function Homepage({ handleUser }) {
    const [selected, setSelected] = useState('home');

    const setView = () => {
        switch (selected) {
            case 'home':
                return (
                    <Col className='py-5'>
                        <Row className='justify-content-center'>
                            <p>
                                Save all your favorite movies and shows on a
                                list!
                            </p>
                        </Row>
                        <Row className='justify-content-center'>
                            <Button
                                className='mx-4'
                                size='lg'
                                onClick={() => setSelected('login')}>
                                Login
                            </Button>
                            <Button
                                className='mx-4'
                                size='lg'
                                onClick={() => setSelected('signup')}>
                                Signup
                            </Button>
                        </Row>
                    </Col>
                );
            case 'login':
                return (
                    <Row className='justify-content-center py-5'>
                        <Col sm={9}>
                            <LoginForm
                                setSelected={setSelected}
                                handleUser={handleUser}
                            />
                        </Col>
                    </Row>
                );
            case 'signup':
                return (
                    <Row className='justify-content-center py-5'>
                        <Col sm={9}>
                            <SignupForm
                                setSelected={setSelected}
                                handleUser={handleUser}
                            />
                        </Col>
                    </Row>
                );
        }
    };

    return (
        <Container>
            <Row className='justify-content-center'>
                <h1>Watchlist React</h1>
            </Row>
            {setView()}
            <Row className='justify-content-center px-5 pb-3'>
                <Image src={TMDB} fluid />
            </Row>
            <Row className='justify-content-center'>
                <p>Powered by The Movie Database API</p>
            </Row>
        </Container>
    );
}
