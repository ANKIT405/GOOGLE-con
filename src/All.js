import React from "react";
import "./All.css";

const All = () => {
  let Get = localStorage.getItem("Queries");
  let appe = <ul id="list-items" type="none"></ul>;
  let Sitem;
  const url = `https://google-web-search1.p.rapidapi.com/?query=${Get}&limit=20&related_keywords=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d188f6a332msh522a8ebe27d7adfp1a4fe9jsn69f183770e66",
      "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
    },
  };

  let f = fetch(url, options);
  f.then((res) => {
    return res.json();
  }).then((val) => {
    Sitem = val;
    console.log(Sitem);

    for (let count = 0; count < Sitem.results.length; count++) {
      let Ele = document.getElementById("list-items");

      Ele.insertAdjacentHTML(
        "Beforeend",
        `<li><a style={{color:"darkblue"}} href=${Sitem.results[count].url}>${Sitem.results[count].title}</a></</li>\n`
      );
      Ele.insertAdjacentHTML(
        "Beforeend",
        `<p style={{color:"grey"}} >${Sitem.results[count].description}</p>`
      );
      console.log("end");
    }
  });

  let Css = {
    height: "auto",
    width: 50 + "vw",

    marginLeft: 7 + "%",
  };

  return (
    <div id="insert" style={Css}>
      {/* All data of above API */}
      {appe}

      {/* <li><a href={Sitem.result[count].url}>{Sitem.result[count].title}</a></li>
  `<p>${Sitem.result[count].description}</p>` */}
    </div>
  );
};

export default All;
