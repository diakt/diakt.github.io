import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    // const gitHubLogo = document.getElementById("github-logo");
    // const linkedinLogo = document.getElementById("linkedin-logo");
    // const twitterLogo = document.getElementById("twitter-logo")
    // const spotifyLogo = document.getElementById("spotify-logo");
    // const sciHubLogo = document.getElementById("scihub-logo")

    // //footer event listeners
    // gitHubLogo.addEventListener("click", function () { newWindow("https://github.com/diakt") });
    // linkedinLogo.addEventListener("click", function () { newWindow("https://www.linkedin.com/in/gavin-southerland-756838176/") });
    // twitterLogo.addEventListener("click", function () { newWindow("https://twitter.com/diaktyl") });
    // spotifyLogo.addEventListener("click", function () { newWindow("https://open.spotify.com/user/eightplusandunder?si=dae3dc688bf34480") });
    // sciHubLogo.addEventListener("click", function () { newWindow("https://sci-hub.se/donate") });


    // function newWindow(link) {
    //     window.open(link, '_blank')
    // }


    return (
        <ul className="footer-directory-icons">
            <a className="footer-directory-image" href="https://github.com/Joeyryanbridges" target="_blank" rel="noreferrer" >
                <img
                    src={require("../logos/github.png")}
                    id="github-logo"
                    alt="GitHub logo. Click to see my GitHub account.">
                </img>
            </a>
            <a className="footer-directory-image" href="https://www.linkedin.com/in/gavin-southerland-756838176/" target="_blank" rel="noreferrer">
                <img
                    src={require("../logos/linkedin3.png")}
                    id="linkedin-logo"
                    alt="LinkedIn logo. Click to see my LinkedIn. Yuck.">
                </img>
            </a>
            <a className="footer-directory-image" href="https://twitter.com/diaktyl" target="_blank" rel="noreferrer">
                <img
                    src={require("../logos/twitter3.png")}
                    id="twitter-logo"
                    alt="Twitter logo. Click to see math memes.">
                </img>
            </a>
            <a className="footer-directory-image" href="https://open.spotify.com/user/eightplusandunder?si=dae3dc688bf34480" target="_blank" rel="noreferrer">
                <img
                    src={require("../logos/spotify4 copy.png")}
                    id="spotify-logo"
                    alt="Spotify logo. Click to see my Spotify, but only if you like techno.">
                </img>
            </a>
            <a className="footer-directory-image" href="https://sci-hub.se/donate" target="_blank" rel="noreferrer">
                <img
                    src={require("../logos/scihub3.png")}
                    id="scihub-logo"
                    alt="Donate to a good cause.">
                </img>
            </a>
        </ul>

    );
}

export default Footer;