import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Overlay({ show }) {
    return (
        <div
            style={{
                position: 'absolute',
                height: '100vh',
                width: '100vw',
                margin: '0 !important',
                padding: '0 !important',
                zIndex: 100,
                top: 0,
                left: 0,
                poisition: 'relative',
            }}
            className='d-flex'>
            <Col
                style={{
                    width: '30%',
                    position: 'absolute',
                    paddingLeft: '5%',
                }}
                className='align-self-center'>
                <Row>Test </Row>
                <Row> {show.overview}</Row>
            </Col>
        </div>
    );
}
