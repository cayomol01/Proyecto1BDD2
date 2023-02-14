import React, { useState } from "react";



import "./Contain.css";


import VideoCard from "../VideoCard/VideoCard"
import NavBar from "../NavBar/NavBar"


const videos = [];
for (let index = 0; index < 12; index++) {
    videos.push(<VideoCard img = "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"/>)
    
}

export default function Contain() {
    const [mostrar, setMostrar] = useState(videos)
    return (
        <>
        <NavBar/>
        <main>
            <section>
                <h1>Trending Videos</h1>
                {mostrar}
            </section>
        </main>
        </>
    );
}
