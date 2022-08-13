import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav>
                <Link to="/">
                    <h1>Gavin Southerland</h1>
                </Link>
                <Link to="/about">
                    <h1>About</h1>
                </Link>
                <Link to="/interests">
                    <h1>Interests</h1>
                </Link>
                <Link to="/projects/">
                    <h1>Projects</h1>
                </Link>
                <a href='wikipedia.org' target="_blank"rel="noreferrer">
                    <h1>Resume</h1>
                </a>
            </nav>

        </div>
    );
}

export default Header;