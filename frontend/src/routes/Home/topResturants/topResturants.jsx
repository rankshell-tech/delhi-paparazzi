import { Link } from "react-router-dom";
import RestaurantCard from "./restaurantCard";
import "./topRestaurants.css";

export default function TopRestaurants() {
  return (
    <div className="mainSection topRestaurants">
      <div className="heading">
        <h1>Top Restaurants</h1>
      </div>
      <div className="restaurantContainer">
        <RestaurantCard />
        <RestaurantCard />

        <RestaurantCard />
        <RestaurantCard />
      </div>
      <div className="exploreContainer d-flex align-items-center justify-content-center mt-5">
        <Link to="/restaurants">
          <button className="primaryButton">Explore More</button>
        </Link>
      </div>
    </div>
  );
}
