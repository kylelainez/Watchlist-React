import { ConnectionStates } from 'mongoose';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import showService from '../utils/showService';

export default function ShowDetails({ show }) {
    const [id, setId] = useState('');
    const [trailer, setTrailer] = useState(false);

    const opts = {
        height: window.innerHeight,
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            disablekb: 1,
            modestbranding: 1,
            loop: 1,
        },
    };

    const readyPlayer = (event) => {
        event.target.playVideo();
    };

    useEffect(async () => {
        setId(show?.id);
        if (id !== '') {
            const videos = await showService.fetchTrailer(id);
            for (let video of videos) {
                if (video.site === 'YouTube' && video.type === 'Trailer') {
                    setTrailer(video.key);
                    break;
                }
            }
        }
    }, [id]);

    return (
        <div>
            {trailer ? (
                <YouTube videoId={trailer} opts={opts} onReady={readyPlayer} />
            ) : (
                ''
            )}
        </div>
    );
}
