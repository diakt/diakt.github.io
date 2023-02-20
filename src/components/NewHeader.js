import React from "react";

function NewHeader(props) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light bg-light"
      style={{ height: "7vh" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Gavin Southerland
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NewHeader;
