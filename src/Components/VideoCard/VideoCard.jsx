import React from "react";


import "./VideoCard.css";

export default function VideoCard({img}) {

    return (
        <>
            <div className="video-card">
                <img src={img} alt="Video Thumbnail"/>
                <h3>Video Title</h3>
                <p>Video Duration: </p>
            </div>
        </>
    );
}
