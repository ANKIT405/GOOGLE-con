import React from "react";
import "./images.css";
const Images = () => {
  const url = `https://youtube-search-api3.p.rapidapi.com/youtube/search/?q=${localStorage.getItem(
    "Queries"
  )}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d188f6a332msh522a8ebe27d7adfp1a4fe9jsn69f183770e66",
      "X-RapidAPI-Host": "youtube-search-api3.p.rapidapi.com",
    },
  };

  let GET = fetch(url, options);
  GET.then((val) => {
    return val.json();
  }).then((res) => {
    console.log(res);
    for (let i = 0; i < res.result.result.length; i++) {
      let img = `<a src=${res.result.result[i].link}><img src=${res.result.result[i].thumbnails[0].url}/></a>`;
      let para = `<a src=${res.result.result[i].link} >${res.result.result[i].accessibility.title}</a>`;
      let Div = `<div>${img}${para} ${res.result.result[i].duration}<br/>" "<span>${res.result.result[i].channel.name}</span></div><br/>`;
      document.getElementById("video").insertAdjacentHTML("beforeend", Div);
    }
  });
  return <div id="video" className="Video"></div>;
};

export default Images;
