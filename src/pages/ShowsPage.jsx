import React, { useState } from 'react';
import Rows from '../components/Rows';
import NavBar from './../components/NavBar';

export default function ShowsPage({ handleShow }) {
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
