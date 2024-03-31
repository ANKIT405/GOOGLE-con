import React from "react";
import image1 from "./AllBGimage/image1.jpg";
import image2 from "./AllBGimage/image2.jpg";
import image3 from "./AllBGimage/image3.jpg";
import image4 from "./AllBGimage/image4.jpg";
import image5 from "./AllBGimage/image5.jpg";
import { Link } from "react-router-dom";
import searchicon from "./AllBGimage/searchicon.png";
import googleLogo from "./AllBGimage/google-logo.png";
import Alllink from "./Alllink";
import App from "./App";
import "./Searchbar.css";

const Searchbar = () => {
  let imgCollection = [image1, image2, image3, image4, image5];
  let Body = document.getElementById("img");
  Body.style.backgroundImage = `url(${imgCollection[1]})`;

  //--------------------------------------------
  window.addEventListener("resize", function () {
    let google_searchbox = document.getElementById("main1");
    google_searchbox.style.top =
      -this.screenX > -310 ? -this.screenX + "px" : "nothing";
  });
  //-------------------------------------------
  let num = 0;
  function Processing__() {
    // Rendering 2 Children.........
    localStorage.setItem("Num", `${num}`);

    console.log("Checking function");
  } //end

  console.log(window);
  //-------------------------------
  function Key_Press(event) {
    if (event.which == 13) {
      num = 1;
      Processing__();
      window.location.reload();
    }
  }
  //-------------------------------

  return (
    <div id="main1" className="google_searchbox">
      <div className="G-logo">
        <img className="G-img" src={googleLogo} />
      </div>

      <div id="search-container">
        <input
          onChange={(eve) => {
            console.log(eve.target.value);
            localStorage.setItem("Queries", `${eve.target.value}`);
          }}
          onKeyDown={(e) => {
            Key_Press(e);
          }}
          type="text"
          id="search-box"
          placeholder="Search Google or type a URL"
        />
        <svg
          onClick={() => {
            num = 1;
            Processing__();
            window.location.reload();
          }}
          className="iconSize"
          viewBox="0 0 24 24"
        >
          <path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path>
          <path
            fill="#ea4335"
            d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
          ></path>
          <path
            fill="#fbbc04"
            d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
          ></path>
          <path
            fill="#4285f4"
            d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
