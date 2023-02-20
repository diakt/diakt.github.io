import React from "react";

function NewFooter(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
      <div className="container-fluid ">
        {/* all fuckery inside here */}
        <a className="navbar-brand" href="#">
          Gavin Southerland
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NewFooter;
