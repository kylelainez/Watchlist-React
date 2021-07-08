import React, { useEffect, useState } from 'react';
import showService from '../utils/showService';
import { Row, Card } from 'react-bootstrap';
import './Rows.css';
const POSTER_URL = 'https://image.tmdb.org/t/p/original';

export default function Rows({ data, handleSelect }) {
    const [shows, setShows] = useState([]);

    useEffect(async () => {
        setShows(await showService.fetchData(data));
    }, []);

    return (
        <Row style={{ margin: 0, width: '100vw' }}>
            <h1 style={{ marginLeft: '30px', color: 'white' }}>
                {data.charAt(0).toUpperCase() + data.slice(1)}
            </h1>
            <Row className='poster-scroll'>
                {shows.map((show, idx) => (
                    <Card
                        className='poster'
                        key={`show-${idx}`}
                        onClick={() => handleSelect(show)}>
                        <Card.Img
                            src={POSTER_URL + show.poster_path}
                            style={{ height: '100%' }}
                        />
                    </Card>
                ))}
            </Row>
        </Row>
    );
}
