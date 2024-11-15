import { CDN_URL } from "../utils/constants";

//this is a JS object:
const styleCard = {
    background: "#FF964F"
}

const RestaurantCard = (props) => {

    const { resData }=props;

    //we have used here the inline style of CSS.
    return (
        <div className='res-card' style={styleCard}>
           <img className='res-logo' src={CDN_URL+resData.cloudinaryImageId} alt="restaurant image"/>
           <h3>{resData.name}</h3>
           <h3>{resData.locality}</h3>
           <h3>{resData.areaName}</h3>
           <h4>{resData.cuisines.join(", ")}</h4>
           <h4>{resData.avgRating} stars</h4>
           <h4>{resData.costForTwo.split(" ")[0]}</h4>
           <h4>{resData.sla.deliveryTime} minutes</h4>
        </div>
    );
};


export default RestaurantCard;