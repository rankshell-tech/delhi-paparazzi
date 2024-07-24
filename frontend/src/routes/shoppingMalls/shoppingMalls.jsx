import Header from "../../components/header/header";
import "./shoppingMalls.css";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Box } from "@mui/material";
import ShoppingMallCard from "../../components/shoppingMallCard/shoppingMallCard";

export default function ShoppingMalls() {
  const [sort, setSort] = useState("popularity");
  const handelChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <div className="shoppingMalls">
      <Header />
      <div className="searchContainerWrapper p-3 d-flex align-items-center justify-content-center gap-3">
        <form className="shoppingContainer d-flex overflow-hidden">
          <input
            type="text"
            name="search"
            className=" flex-grow-1 border-0 p-2"
            placeholder="Search"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
        <div className="actionButtons">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handelChange}
              >
                <MenuItem value={"popularity"}>popularity</MenuItem>
                <MenuItem value="Rating">Rating</MenuItem>
                <MenuItem value="Relevance">Relevance</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="shoppingMallCards p-2 justify-content-center d-flex flex-wrap gap-3">
        {[...Array(10)].map(() => {
          return <ShoppingMallCard />;
        })}
      </div>
    </div>
  );
}
