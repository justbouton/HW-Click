import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Click an image to begin <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      <span className="navbar-text">
        Score: {props.score} | High Score: {props.highest}
      </span>
    </div>
  </nav>
  );
}

export default Nav;
