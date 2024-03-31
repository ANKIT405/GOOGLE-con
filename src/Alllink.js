import React from "react";
import "./Searchbar.css";
import searchicon from "./AllBGimage/searchicon.png";
import Google from "./AllBGimage/google-logo.png";
import { Link } from "react-router-dom";
import All from "./All";
const Alllink = () => {
  let num = localStorage.getItem("Num");
  function Go_Back() {
    localStorage.setItem("Num", `${num}`);
    window.location.reload();
  }
  //--------------------------------------------------------------------------
  window.addEventListener("scroll", function () {
    let Nav = document.getElementById("Nav-bar");
    Math.floor(window.scrollY) >= 180
      ? (Nav.style.position = "fixed")
      : (Nav.style.position = "static");
  });
  //-----------------------------------------------------------------------------

  function Key_Press(event) {
    if (event.which == 13) {
      window.location.reload();
    }
  }

  return (
    <div>
      <div id="Nav-bar" className="Nav-bar">
        <img className="Alllink-google" src={Google} />
        <input
          onChange={(eve) => {
            localStorage.setItem("Queries", `${eve.target.value}`);
          }}
          onKeyDown={(e) => {
            Key_Press(e);
          }}
          id="Alllink-search-box"
          placeholder="Search Google or type a URL"
        />{" "}
        {/* input second*/}
      </div>

      <div id="Bottom-bar">
        <div>
          <Link className="Comp-tag" to="/All">
            All
          </Link>
          <Link className="Comp-tag" to="/Images">
            Videos
          </Link>
          <Link className="Comp-tag" to="/Shopping">
            Shopping
          </Link>
        </div>
      </div>

      {/* Rendering Component Called <All/>*/}

      <button
        style={{
          display: "block",
          position: "fixed",
          bottom: 10 + "px",
          left: 9 + "px",
          border: "none",
          borderRadius: 40 + "px",
          height: 5 + "vh",
          fontSize: 1.1 + "vw",
        }}
        onClick={() => {
          num = 0;
          Go_Back();
        }}
        className="goback-btn"
      >
        {" "}
        ˂˂ Go Back
      </button>
    </div>
  );
};

export default Alllink;
