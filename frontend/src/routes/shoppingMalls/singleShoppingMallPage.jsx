import Header from "../../components/header/header";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./singleShoppingMallPage.css";
import { Description } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import DirectionsIcon from "@mui/icons-material/Directions";
import CallIcon from "@mui/icons-material/Call";
import ShoppingMallGallery from "./shoppingMallGallery";
import ShoppingMallReviews from "./shoppingMallReviews";

export default function SingleShoppingMallPage() {
  const [data, setData] = useState({
    name: "Shopping Mall",
    rating: "4.5",
    address:
      "13 B Mayur Vihar Lobby Level Crowne Plaza Hotel, New Delhi 110091 India",
    tags: ["Mall", "Shopping", "Entertainment"],
    facilities: ["Parking", "Security", "Restaurants", "Cinema", "Gaming Zone"],
    galleryImages: [
      "https://picsum.photos/1900/500",
      "https://picsum.photos/1900/500",
      "https://picsum.photos/1900/500",
      "https://picsum.photos/1900/500",
      "https://picsum.photos/1900/500",
    ],
    Description:
      "This is a shopping mall and food court. It has a lot of shops and restaurants. It also has a cinema and a gaming zone. It is a great place to hangout with friends and family.",
    openingHours: "10:00 AM - 10:00 PM",
    menuImage: "https://picsum.photos/500/1900",
  });

  const [showSection, setShowSection] = useState("reviews"); // overview, reviews, photos

  return (
    <div className="singleShoppingMallPage">
      <Header />
      <div className="headingSection">
        <div className="shoppingMallGallery">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            dynamicHeight={true}
          >
            {data.galleryImages.map((image, index) => {
              return (
                <div key={index} className="slides">
                  <img src={image} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className="infoContainer p-3">
          <div className="nameContainer d-flex align-items-center gap-2">
            <h1 className="name">{data.name}</h1>
            <div className="rating">
              <span>{data.rating}</span>
              <StarIcon />
            </div>
          </div>

          <div className="desc">
            <p>{data.Description}</p>
          </div>
        </div>
        <div className="actionButtons d-flex flex-column gap-2">
          <button className="btn btn-primary">
            <DirectionsIcon />
            Directions
          </button>
          <button className="btn btn-primary">
            <CallIcon />
            Call
          </button>
        </div>
      </div>
      <div className="tabs m-2">
        <button
          className={showSection === "overview" ? "active" : ""}
          onClick={() => setShowSection("overview")}
        >
          Overview
        </button>
        <button
          className={showSection === "reviews" ? "active" : ""}
          onClick={() => setShowSection("reviews")}
        >
          Reviews
        </button>
        <button
          className={showSection === "photos" ? "active" : ""}
          onClick={() => setShowSection("photos")}
        >
          Photos
        </button>
      </div>
      {showSection === "overview" && (
        <div className="infoSection">
          <div className="address">
            <h2>Address</h2>
            <p>{data.address}</p>
          </div>
          <div className="tags">
            <h2>Tags</h2>
            <div className="tagsContainer d-flex gap-2 flex-wrap">
              {data.tags.map((tag, index) => {
                return (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="facilities">
            <h2>Facilities</h2>
            <div className="facilitiesContainer d-flex gap-2 flex-wrap">
              {data.facilities.map((facility, index) => {
                return (
                  <span key={index} className="facility">
                    {facility}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="openingHours">
            <h2>Opening Hours</h2>
            <p>{data.openingHours}</p>
          </div>
        </div>
      )}
      {/* shopping mall gallery */}
      {showSection === "photos" && <ShoppingMallGallery />}
      {/* reviews */}
      {showSection === "reviews" && <ShoppingMallReviews />}
    </div>
  );
}
