import React from 'react';
import { Container } from 'react-bootstrap';
import Rows from '../components/Rows';

export default function ShowsPage() {
    return (
        <div>
            <Rows data='trending' />
            <Rows data='netflix' />
        </div>
    );
}
