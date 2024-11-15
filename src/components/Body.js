import RestaurantCard from "./RestaurantCard";
import { restaurantArray } from "../utils/constants";


const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                
                {
                    restaurantArray.map(restaurant => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}

            </div>
        </div>
    );
};

//exporting or sending out the Body component, wherever it is required.
export default Body