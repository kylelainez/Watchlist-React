import React, { useEffect, useState } from 'react';
import showService from '../utils/showService';
import { Row, Card, Button } from 'react-bootstrap';

export default function Rows({ data }) {
    const [shows, setShows] = useState([]);

    useEffect(async () => {
        setShows(await showService.fetchData('shows'));
    }, []);

    return (
        <Row>
            {shows.map((show, idx) => (
                <Card
                    style={{ width: '15rem', margin: '1rem' }}
                    key={`show-${idx}`}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    );
}
