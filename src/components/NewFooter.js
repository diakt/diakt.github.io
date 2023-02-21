import React from "react";

function NewFooter(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
      <div className="container-fluid">
        {/* all fuckery inside here */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.linkedin.com/in/gavin-southerland-756838176/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://github.com/diakt"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://twitter.com/diaktyl"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://open.spotify.com/user/eightplusandunder?si=dae3dc688bf34480"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://sci-hub.se/donate"
                target="_blank"
                rel="noreferrer"
              >
                SciHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NewFooter;
