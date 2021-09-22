import React, { useState } from 'react';
import ShowDetails from './ShowDetails';
import Rows from '../components/Rows';
import NavBar from './../components/NavBar';

export default function ShowsPage({ handleShow }) {
    const [selected, setSelected] = useState(false);

    return (
        <>
            <NavBar />
            <div>
                <Rows data='trending' handleSelect={handleShow} />
                <Rows data='netflix' handleSelect={handleShow} type={'tv'} />
            </div>
        </>
    );
}
