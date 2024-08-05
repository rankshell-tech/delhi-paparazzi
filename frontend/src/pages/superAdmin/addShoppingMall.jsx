import Header from "../../components/header/header";
import "./addShoppingMall.css";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import {
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Chip,
  Select,
  FormControl,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

const fas = [
  "wifi",
  "parking",
  "restaurant",
  "cafe",
  "atm",
  "toilet",
  "wheelchair",
  "baby",
  "shopping",
  "security",
  "medical",
  "escalator",
];

export default function AddRestaurant() {
  const [facilities, setFacilities] = useState([]);
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState([]);


  return (
    <div className="addRestaurantPage">
      <Header />
      <div className="banner d-flex p-4 align-items-center justify-content-center py-lg-5">
        <h1>Add Shopping Mall</h1>
      </div>

      <form className=" py-3">
        <div className="inputColumns d-flex px-5 gap-3">
          <div className="left">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Location" name="location" />
            <div className="tagContainer d-flex gap-2">
              <input type="text" placeholder="Tag1" name="tag1" />
              <input type="text" placeholder="Tag2" name="tag2" />
              <input type="text" placeholder="Tag3" name="tag3" />
            </div>

            <input type="text" placeholder="Contact No." name="contactNo" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Website" name="website" />
          </div>
          <div className="right">
            <textarea
              placeholder="Description"
              name="description"
              rows={6}
            ></textarea>
            <input type="text" placeholder="Opening Time" name="openingHours" />
            <input type="text" placeholder="Closing Time" name="closingHours" />
            <input
              type="text"
              placeholder="Initial Rating"
              name="initialRating"
            />
          </div>
        </div>
        <div className="imagesContainer px-5 d-flex">
          <div className="logoContainer d-flex gap-5 flex-row-reverse justify-content-end align-items-center">
            <div className="logoButton">
              <Button
                variant="contained"
                onClick={() => {
                  document.getElementById("businessLogoInput").click();
                }}
              >
                Upload Logo
              </Button>
              <input
                type="file"
                name="businessLogo"
                id="businessLogoInput"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setLogo(reader.result);
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>
            <div className="imageContainer">
              {logo ? <img src={logo} alt="logo" /> : <div>Choose Logo</div>}
            </div>
          </div>

          <div className="bannerContainer d-flex gap-2">
            <div className="input flex-shrink-0">
              <Button
                variant="contained"
                onClick={() => {
                  document.getElementById("bannerInput").click();
                }}
                className=" flex-shrink-0 my-5"
              >
                Upload Banner Images
              </Button>
              <input
                type="file"
                name="banner"
                onChange={(e) => {
                  const files = e.target.files;

                  for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setBanner((prev) => [...prev, reader.result]);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                accept="image/*"
                id="bannerInput"
                multiple
              />
            </div>
            <div className="bannerContainer ">
              {banner.length > 0 ? (
                <div className="bannerImageContainer d-flex gap-1 flex-wrap flex-grow-1 justify-content-start ">
                  {banner.map((img, index) => (
                    <img key={index} src={img} alt="banner" />
                  ))}
                </div>
              ) : (
                <div className="placeholderContainer d-flex gap-1 flex-wrap flex-grow-1 justify-content-start">
                  <div className="placeholder">
                    <p>Upload Banner Images</p>
                  </div>
                  <div className="placeholder">
                    <p>Upload Banner Images</p>
                  </div>
                  <div className="placeholder">
                    <p>Upload Banner Images</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="buttonContainer px-5 mt-4">
          <Button variant="contained" type="submit" fullWidth
          
          color="success"
          >
            Add Restaurant
          </Button>
        </div>
      </form>
    </div>
  );
}
