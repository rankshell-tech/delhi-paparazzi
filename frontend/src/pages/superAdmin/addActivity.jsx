import { Box, TextareaAutosize, TextField, Button } from "@mui/material";
import Header from "../../components/header/header";
import "./addActivity.css";
import { useRef } from "react";

export default function AddActivity() {
  const uploadedBannerFiles = useRef(null);

  const bannerUploaded = (e) => {
    const files = e.target.files;
    const uploadedFiles = uploadedBannerFiles.current;
    uploadedFiles.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      uploadedFiles.innerHTML += `<div>${files[i].name}</div>`;
    }
  };

  return (
    <Box className="addActivityPage">
      <Header />
      <div className="banner d-flex p-4 align-items-center justify-content-center py-lg-5">
        <h1>Add Activity</h1>
      </div>
      <Box component={"form"} className="d-flex flex-column gap-4 p-4">
        <TextField
          className="input"
          label="Activity Name"
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
          label="Image URL"
          variant="outlined"
          required
        />
        <Button variant="contained" component="label">
          Upload Banner Images
          <input
            type="file"
            hidden
            onChange={bannerUploaded}
            multiple
            accept="image/*"
          />
        </Button>
        {/* Show the uploaded file names */}
        <div className="uploadedBannerFiles" ref={uploadedBannerFiles}></div>
        <TextareaAutosize
          className="input p-2"
          label="Add Description"
          variant="outlined"
          minRows={40}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Activity
        </Button>
      </Box>
    </Box>
  );
}
