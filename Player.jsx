

import React, { useRef } from "react";

const Player = () => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                width="400"
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />

            <br />

            <button className="video-btn" onClick={handlePlay}>
                Play
            </button>

            <button className="video-btn" onClick={handlePause}>
                Pause
            </button>
        </div>
    );
};

export default Player;
