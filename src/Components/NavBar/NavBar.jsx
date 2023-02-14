import React from "react";


import "./NavBar.css";

export default function NavBar() {

    return (
        <header>
            <div class="Home">
                <h2>WiiTube</h2>
                <img class = "Logo" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="Youtube Logo"/>
            </div>

            <form action="#" method="get">
                <input type="text" placeholder="Search"/>
                <button type="submit">Go</button>
            </form>
        </header>
    );
}
