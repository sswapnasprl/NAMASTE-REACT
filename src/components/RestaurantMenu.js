import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import { CDN_URL } from "../utils/constants";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantCard(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, locality, costForTwoMessage, avgRating, sla } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  console.log(itemCards);

  return (
    <details>
      <h1>{name}</h1>
      <h2>💸{costForTwoMessage}</h2>
      <h3>{locality}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>⏰ {sla.deliveryTime} min</h4>
      <h4>{avgRating} ✨</h4>
      <menu className="rest-menucard">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <div className="menu-img">
              <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>            
            {console.log("item.card.info ---> ", item.card.info)}
            <div className="rest-menucard-details">
              <span> {item.card.info.isBestseller === true ? " ✔ Best Seller" : " ✖ Best Seller" } &nbsp;  {item.card.info.isVeg === 1 ? "🟢" : "🔴"}
              </span> 
              <span> 🔊 {item.card.info.name} </span> 
              <span> 💰 {item.card.info.price / 100} </span> 
              <span className="rest-menucard-details-info"> 💛 {item.card.info.description } </span> 
            </div>
            
          </li>
        ))}
      </menu>
    </details>
  );
}

export default RestaurantMenu;
