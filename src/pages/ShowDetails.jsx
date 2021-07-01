import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export default function ShowDetails({ handleSelect, show }) {
    const opts = {
        height: window.innerHeight,
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            disablekb: 1,
            modestbranding: 1,
            playlist: `https://www.youtube.com/watch?v=${'RC4syAKmjCw'}`,
        },
    };

    const loop = (e) => {
        console.dir(e.target.playVideo());
    };

    const readyPlayer = (event) => {
        event.target.playVideo();
    };

    return (
        <div>
            <YouTube
                videoId={'RC4syAKmjCw'}
                opts={opts}
                onEnd={loop}
                onReady={readyPlayer}
            />
        </div>
    );
}
