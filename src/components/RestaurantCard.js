import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log(resData);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,        
    } = resData?.info;

    return (
      <div className="res-card" style={{backgroundColor: "#fofofo"}}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;