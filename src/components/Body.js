import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [ListofRestaurants, setListofRestaurants] = useState(resList);

  let listofRestaurants1 = [
     {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: "400",
        sla:{
          deliveryTime: 36
        },
        avgRating: "3.8",
    },
    {
        id: "334476",
        name: "MCD",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: "400",
        sla:{
          deliveryTime: 36
        },
        avgRating: "4.5",
    },
    {
      id: "334477",
      name: "Dominos",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: "400",
      sla:{
        deliveryTime: 36
      },
      avgRating: "4.1",
    },

  ];

    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={() => {
          
          const filteredList = ListofRestaurants.filter((res) => res.info.avgRating > 4.3
            );           
          console.log(filteredList);
          setListofRestaurants(filteredList);
        }}
        >
        Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {resList.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            //<RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;