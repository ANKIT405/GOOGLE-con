import React, { createElement, useRef } from "react";
import "./Shopping.css";
const Shopping = () => {
  let Query = localStorage.getItem("Queries");
  const url = `https://real-time-product-search.p.rapidapi.com/search?q=${Query}&country=us&language=en&limit=30`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "95d13bead6msh0452bbde4cd771dp12eee0jsn7c231f1cd73c",
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };

  let div = useRef(); //<div class="product-container"><h1>click</h1></div>
  fetch(url, options)
    .then((result) => {
      return result.json();
    })
    .then((resp) => {
      console.log(resp);
      try{let result = resp.data; //[...]
      let gethtml = result.map((obj) => {
        let html = `<div class='product'><img src=${obj.product_photos[0]}/><a href=${obj.product_page_url} class='title'>${obj.product_title}</a><hr/>
        <span class='price'>${obj.offer.price}</span><h5 class='delivery'>${obj.offer.shipping}</h5></div>`;
        return html;
      });
      div.current.insertAdjacentHTML("beforeend", gethtml)}
      catch(err){
        console.log(err)
      }

    });

  console.log(div); //get this element <div class="product-container"><h1>click</h1></div> (parent element showing below)
  let divFunc = () => {};

  return (
    <div
      className="product-container"
      ref={div} /*targeting the element */
    ></div>
  );
};

export default Shopping;
