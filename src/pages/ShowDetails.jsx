import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Overlay from '../components/Overlay';
import showService from '../utils/showService';

export default function ShowDetails({ show }) {
    const [id, setId] = useState('');
    const [trailer, setTrailer] = useState(false);
    const [selectedShow, setShow] = useState(show);
    const params = useParams();
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
        setTimeout(() => {
            document.querySelector('#movie_player')?.playVideo();
        }, 1000);
    };

    useEffect(() => {
        async function getShow() {
            const show2 = await showService.fetchShow(params.type, params.id);
            show2.media_type = params.type;
            setShow(show2);
        }
        if (!selectedShow) getShow();
    }, [selectedShow]);

    useEffect(() => {
        console.log('get trailer');
        setId(selectedShow?.id);
        async function awaitData() {
            const videos = await showService.fetchTrailer(
                id,
                selectedShow.media_type
            );
            console.log(selectedShow.media_type);
            for (let video of videos) {
                if (video.site === 'YouTube' && video.type === 'Trailer') {
                    setTrailer(video.key);
                    break;
                }
            }
        }
        if (id && selectedShow) {
            awaitData();
        }
    }, [id, selectedShow]);

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
            {trailer && selectedShow ? (
                <YouTube videoId={trailer} opts={opts} onReady={readyPlayer} />
            ) : (
                ''
            )}
            {selectedShow ? <Overlay show={selectedShow} /> : ''}
        </div>
    );
}
