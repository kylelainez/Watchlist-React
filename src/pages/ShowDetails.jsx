import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Overlay from '../components/Overlay';
import showService from '../utils/showService';

export default function ShowDetails({ show }) {
    const [id, setId] = useState('');
    const [trailer, setTrailer] = useState(false);

    const opts = {
        height: window.innerHeight - 10,
        width: window.innerWidth,
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

    useEffect(() => {
        async function awaitData() {
            setId(show?.id);
            if (id !== '') {
                const videos = await showService.fetchTrailer(
                    id,
                    show.media_type
                );
                console.log(show.media_type);
                for (let video of videos) {
                    if (video.site === 'YouTube' && video.type === 'Trailer') {
                        setTrailer(video.key);
                        break;
                    }
                }
            }
        }
        awaitData();
    }, [id]);

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                position: 'absolute',
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
            }}>
            {trailer ? (
                <YouTube videoId={trailer} opts={opts} onReady={readyPlayer} />
            ) : (
                ''
            )}
            <Overlay show={show} />
        </div>
    );
}
