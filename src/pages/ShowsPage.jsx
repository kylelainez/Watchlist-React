import React, { useState } from 'react';
import ShowDetails from './ShowDetails';

import Rows from '../components/Rows';

export default function ShowsPage() {
    const [selected, setSelected] = useState(false);

    function handleSelect(show) {
        if (selected && selected.id === show.id) {
            setSelected(false);
        }
        setSelected(show);
    }

    return (
        <div>
            {selected === false ? (
                <>
                    <Rows data='trending' handleSelect={handleSelect} />
                    <Rows
                        data='netflix'
                        handleSelect={handleSelect}
                        type={'tv'}
                    />
                </>
            ) : (
                <ShowDetails show={selected} />
            )}
        </div>
    );
}
