import React from "react";

import "./Header.css"

export default function Header(){
    return(
        <header className="Header">
            <nav className="navbar navbar-default">
                <div className="container">
                    <h1 className="navbar-brand">React Dictionary API</h1>
                </div>
            </nav>
        </header>
    )
}