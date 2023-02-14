import React from "react";


import "./Login.css";

export default function Login() {

    return (
        <>
        <main>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
            <p>New to WiiTube? <a href="./SignUp.html">Create an account</a></p>
        </main>
        </>
    );
}
