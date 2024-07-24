import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import "./restaurantCard.css";
export default function RestaurantCard({
  tags = ["Bar", "Cafe", "Restaurant"],
  name = "Restaurant",
  star = "4.5",
  address = "13 B Mayur Vihar Lobby Level Crowne Plaza Hotel, New Delhi 110091 India",
  image = "https://picsum.photos/200/300",
  to = "123456",
}) {
  return (
    <Link className="restaurantCard" to={"/" + { to }}>
      <div className="imageContainer">
        <img src={image} alt="restaurant image" />
      </div>
      <div className="restaurantDetails">
        <div className="tags">
          {tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
        <div className="name">
          <h4>{name}</h4>
          <div className="stars">
            <span>{star}</span>
            <StarIcon />
          </div>
        </div>
        <div className="location">
          <LocationOnIcon />
          <p>{address}</p>
        </div>
      </div>
    </Link>
  );
}
