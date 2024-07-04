import image1 from "../../../assets/home_hero_gallery/download (10).jpeg";
import image2 from "../../../assets/home_hero_gallery/download (11).jpeg";
import image3 from "../../../assets/home_hero_gallery/download (12).jpeg";
import image4 from "../../../assets/home_hero_gallery/download (13).jpeg";
import image5 from "../../../assets/home_hero_gallery/download (14).jpeg";
import image6 from "../../../assets/home_hero_gallery/images (3).jpeg";
import image7 from "../../../assets/home_hero_gallery/images (4).jpeg";
import { Link } from "react-router-dom";

import "./heroSection.css";

export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="heroSectionContainer">
          <div className="heroTextSection">
            <h1 className="heroText">Delhi Paparazzi</h1>
            <p className="heroDescription">
              A social media platform for the people of Delhi.
            </p>
            <div className="buttonContainer">
              <Link to="/events" className="button">
                Events
              </Link>

              <Link to="/restaurants" className="button restaurantButton">
                Restaurants
              </Link>
            </div>
          </div>
          <div className="heroSectionImageGallery">
            <div className="heroSectionImageGalleryColumn">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
            </div>
            <div className="heroSectionImageGalleryColumn midColumn">
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
            <div className="heroSectionImageGalleryColumn">
              <img src={image5} alt="" />
              <img src={image6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
