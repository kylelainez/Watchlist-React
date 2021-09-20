import React, { useEffect, useState } from 'react';
import showService from '../utils/showService';
import { Row, Card } from 'react-bootstrap';
import './Rows.css';
const POSTER_URL = 'https://image.tmdb.org/t/p/original';

export default function Rows({ data, type, handleSelect }) {
    const [shows, setShows] = useState([]);

    useEffect(async () => {
        const shows = await showService.fetchData(data);
        shows.forEach((show) => {
            show.media_type = show.media_type ? show.media_type : type;
        });
        console.log(shows);
        setShows(shows);
    }, []);

    return (
        <Row style={{ margin: 0, width: '100vw', overflow: 'hidden' }}>
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
