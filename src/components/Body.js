import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofRestaurants, setListofRestaurants] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.961144128793562&lng=77.70214509218931&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json_data = await data.json();
      setListofRestaurants(
        json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredData(json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  console.log("body ");
  const onlineStatus = useOnlineStatus();

  let listofRestaurants1 = [
    {
      id: "334475",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: "400",
      sla: {
        deliveryTime: 36,
      },
      avgRating: "3.8",
    },
    {
      id: "334476",
      name: "MCD",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: "400",
      sla: {
        deliveryTime: 36,
      },
      avgRating: "4.5",
    },
    {
      id: "334477",
      name: "Dominos",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: "400",
      sla: {
        deliveryTime: 36,
      },
      avgRating: "4.1",
    },
  ];

  // Conditional Rendering
  // if(ListofRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  if(onlineStatus === false){
    return(
      <h1> Looks like you are offline, please check your internet connection</h1>
    );
  }

  return ListofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="serach_box"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />

        <button
          onClick={() => {

            const filteredData = ListofRestaurants.filter((res) => {
              res.info.name.toLowerCase().includes(searchData.toLowerCase());              
            });
            setFilteredData(filteredData);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredList);
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((restaurant) => (
          <Link to= {"/restaurant/"+restaurant.info.id} className="res-container-link"><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
          //<RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
