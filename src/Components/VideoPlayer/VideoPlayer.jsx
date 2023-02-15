import React, { useState } from "react";



import "./VideoPlayer.css";


import NavBar from "../NavBar/NavBar"



export default function VideoPlayer({id, Titulo, link, }) {
    return (
        <>
        <NavBar/>
            <main>
                <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="Info">
                    <h1>{Titulo}</h1>
                    <div class="More">
                        <h2>Views: </h2>
                        <div>
                            <button class="like"  type="button">Like</button>
                            <button class="dislike" type="button">Dislike</button>
                        </div>

                    </div>
                    <div class="comment-section">
                        <h2>Comments: </h2>
                    </div>
                    
                </div>

            </main>
            
        </>
    );
}
