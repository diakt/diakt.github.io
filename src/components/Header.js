import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header-div" >
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
                
                <a href='https://drive.google.com/file/d/1l0iC3prYQL5YyKeUDYWLwUfF0c0o9-5k/view?usp=sharing' target="_blank"rel="noreferrer">
                    <h1>Resume</h1>
                </a>
            </nav>

        </div>
    );
}

export default Header;