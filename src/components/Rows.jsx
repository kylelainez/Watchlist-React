import React, { useEffect, useState } from 'react';
import showService from '../utils/showService';
import { Row, Card, Button } from 'react-bootstrap';

const POSTER_URL = 'https://image.tmdb.org/t/p/original';

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
                        <Card.Img
                            variant='top'
                            src={POSTER_URL + show.poster_path}
                        />
                        <Card.Title>
                            {show.title || show.name || show.original_name}
                        </Card.Title>
                        <Card.Text>{show.overview}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    );
}
