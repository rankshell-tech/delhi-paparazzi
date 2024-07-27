import Header from "../../components/header/header";
import "./addRestaurant.css";
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
  const uploadedBannerFiles = useRef(null);
  const [facilities, setFacilities] = useState([]);

  const bannerUploaded = (e) => {
    const files = e.target.files;
    const uploadedFiles = uploadedBannerFiles.current;
    uploadedFiles.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      uploadedFiles.innerHTML += `<div>${files[i].name}</div>`;
    }
  };

  return (
    <div className="addRestaurantPage">
      <Header />
      <div className="banner d-flex p-4 align-items-center justify-content-center py-lg-5">
        <h1>Add Restaurant</h1>
      </div>
      <Box component={"form"} className="d-flex flex-column gap-4 p-4">
        <TextField
          className="input"
          label="Restaurant Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Location"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Image URL"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Contact Number"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Website"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Opening Hours"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Closing Hours"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          className="input"
          label="Initial Rating"
          variant="outlined"
          required
        />
        {/*Multiple Tags */}
        <TextField className="input" label="Tag1" variant="outlined" required />
        <TextField className="input" label="Tag2" variant="outlined" required />
        <TextField className="input" label="Tag3" variant="outlined" required />
        {/* Banner Image file max 10 */}
        <Button variant="contained" component="label">
          Upload Banner Images
          <input type="file" hidden onChange={bannerUploaded} multiple />
        </Button>
        {/* Show the uploaded file names */}
        <div className="uploadedBannerFiles" ref={uploadedBannerFiles}></div>
        {/* Select Facilities */}
        <FormControl
          sx={{ width: "100%" }}
          fullWidth={true}
          style={{
            width: "100%",
          }}
        >
          <InputLabel>Select Facilities</InputLabel>
          <Select
            multiple
            value={facilities}
            onChange={(e) => setFacilities(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
            renderValue={(selected) => (
              <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={() =>
                      setFacilities(facilities.filter((item) => item !== value))
                    }
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                  />
                ))}
              </Stack>
            )}
          >
            {fas.map((name) => (
              <MenuItem
                key={name}
                value={name}
                sx={{ justifyContent: "space-between" }}
              >
                {name}
                {facilities.includes(name) ? <CheckIcon color="info" /> : null}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Add Restaurant
        </Button>
      </Box>
    </div>
  );
}
