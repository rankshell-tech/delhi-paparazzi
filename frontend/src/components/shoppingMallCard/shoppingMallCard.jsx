import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import "./shoppingMallCard.css";
export default function ShoppingMallCard({
  imageLink = "https://picsum.photos/300/200",
  name = "Shopping Mall",
  rating = "4.5",
  address = "13 B Mayur Vihar Lobby Level Crowne Plaza Hotel, New Delhi 110091 India",
  to = "123456",
  tags = ["Mall", "Shopping", "Entertainment"],
}) {
  return (
    <Link className="shoppingMallCardWrapper d-flex" to={"./" + to}>
      <div className="imageSection">
        <img src={imageLink} alt="" />
      </div>
      <div className="infoSection">
        <div className="tags">
          {tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
        <div className="name d-flex gap-2 align-items-center">
          <h4>{name}</h4>
          <div className="rating">
            <span>{rating}</span>
            <StarIcon />
          </div>
        </div>
        <div className="address d-flex gap-1">
          <LocationOnIcon />
          <p>{address}</p>
        </div>
      </div>
    </Link>
  );
}
