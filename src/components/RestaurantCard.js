// Component is just a normal javascript function which return some JSX. 
import { CDN_URL } from "../util/constants";
const RestaurantCard = (props) => {
    const {resData} = props; 

    if (!resData || !resData.info) {
        return null; 
    }

    const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" 
            src={ CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{deliveryTime} Minutes</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

export default RestaurantCard;

