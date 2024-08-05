import Header from "../../components/header/header";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import RestaurantCard from "../../components/restaurantCard/restaurantCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function Cafe() {
  const [sort, setSort] = useState("popularity");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <div className="cafe">
      <Header />
      <div className="d-flex gap-5 p-5">
        <div className="searchContainer flex-grow-1">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            style={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="actionButtons d-flex justify-content-end">
          <div className="sortContainer">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sort"
                  onChange={handleChange}
                >
                  <MenuItem value={"popularity"}>popularity</MenuItem>
                  <MenuItem value="Rating">Rating</MenuItem>
                  <MenuItem value="Relevance">Relevance</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
      <div className="cafeCardContainerWrapper p-2">
        <div className="cafeCardContainer m-auto d-flex flex-wrap gap-3 justify-content-center">
          {[...Array(10)].map(() => {
            return <RestaurantCard />;
          })}
        </div>
      </div>
    </div>
  );
}
