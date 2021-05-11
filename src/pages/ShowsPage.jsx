import React from 'react';
import { Container } from 'react-bootstrap';
import Rows from '../components/Rows';

export default function ShowsPage() {
    return (
        <Container>
            <Rows data='movies' />
        </Container>
    );
}
