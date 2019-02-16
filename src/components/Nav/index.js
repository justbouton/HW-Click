import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {
  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <h2>Clicky game</h2>
    <h3>Score: {props.score}</h3>
    <h3>Highest score: {props.highest}</h3>    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {/* <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> */}
      </ul>
    </div>
  </nav>
</div>
  );
}

export default Nav;
