import React from "react";


import "./Signup.css";

export default function Signup() {

    return (
        <main>
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Next</button>
            </form>
            <p>New to WiiTube? <a href="#">Create an account</a></p>
        </main>
    );
}
