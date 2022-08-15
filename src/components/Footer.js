import React from 'react';

function Footer() {
    return (
        <div>

            <ul className="footer-directory-icons">
                <img 
                className="footer-directory-image" 
                src={require("../logos/github.png" )}
                id="github-logo" 
                alt="GitHub logo. Click to see my GitHub account."></img>
                <img 
                className="footer-directory-image" 
                src={require("../logos/linkedin3.png" )}
                id="linkedin-logo" 
                alt="LinkedIn logo. Click to see my LinkedIn. Yuck."></img>
                <img 
                className="footer-directory-image" 
                src={require("../logos/twitter3.png" )}
                id="twitter-logo" 
                alt="Twitter logo. Click to see math memes."></img>
                <img 
                className="footer-directory-image" 
                src={require("../logos/spotify4 copy.png")}
                 id="spotify-logo" 
                 alt="Spotify logo. Click to see my Spotify, but only if you like techno."></img>
                <img 
                className="footer-directory-image" 
                src={require("../logos/scihub3.png" )}
                id="scihub-logo" 
                alt="Donate to a good cause."></img>
            </ul>


        </div>
    );
}

export default Footer;