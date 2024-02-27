import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { json, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, locality, costForTwoMessage, avgRating, sla } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>💸{costForTwoMessage}</h2>
      <h3>{locality}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>⏰ {sla.deliveryTime} min</h4>
      <h4>{avgRating} ✨</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            🔊 {item.card.info.name} - 💰 {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
