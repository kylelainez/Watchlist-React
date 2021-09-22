import React, { useState } from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import LoginForm from './../components/LoginForm';
import SignupForm from './../components/SignupForm';
import BGImage from './../images/movie-bg.jpeg';
import NavBar from './../components/NavBar';

export default function Homepage({ handleUser }) {
    const [selected, setSelected] = useState('home');

    const link =
        'https://unsplash.com/photos/n7A4TjAQLN4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';

    const setView = () => {
        switch (selected) {
            case 'home':
                return (
                    <Row className='py-5 justify-content-center align-items-center'>
                        <Container>
                            <Row className='justify-content-center pb-4'>
                                <p>
                                    Save all your favorite movies and shows on a
                                    list!
                                </p>
                            </Row>
                            <Row className='justify-content-center'>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    <Button
                                        style={{ width: '100%' }}
                                        size='lg'
                                        onClick={() => setSelected('login')}>
                                        Login
                                    </Button>
                                </Col>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    <Button
                                        style={{ width: '100%' }}
                                        size='lg'
                                        onClick={() => setSelected('signup')}
                                        variant='secondary'>
                                        Signup
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                );
            case 'login':
                return (
                    <Row
                        className='justify-content-center align-items-center py-5'
                        style={{ width: '100%' }}>
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
                    <Row
                        className='justify-content-center py-5'
                        style={{ width: '100%' }}>
                        <Col sm={9}>
                            <SignupForm
                                setSelected={setSelected}
                                handleUser={handleUser}
                            />
                        </Col>
                    </Row>
                );
            default:
                return <div></div>;
        }
    };

    return (
        <>
            <NavBar />
            <div
                style={{
                    backgroundImage: `url(${BGImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundOrigin: 'content-box',
                    backgroundSize: 'cover',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                }}>
                <div
                    style={{
                        backgroundColor: '#000',
                        opacity: 0.7,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                    }}
                />
            </div>
            <Container
                className='d-flex justify-content-center'
                style={{
                    height: 'calc(100vh - 60px)',
                    minHeight: '600px',
                    position: 'relative',
                    color: '#fff',
                }}>
                <Col
                    className='d-flex flex-column align-self-center align-items-center justify-content-center py-4'
                    style={{
                        backgroundColor: 'rgba(10, 10, 10, 0.9)',
                        borderRadius: '30px',
                        color: '#8F8F8F',
                        maxWidth: '500px',
                        minHeight: '600px',
                    }}>
                    <Row className='justify-content-center'>
                        <h1 style={{ color: 'white' }}>MyWatchList</h1>
                    </Row>
                    {setView()}
                </Col>
            </Container>
        </>
    );
}
