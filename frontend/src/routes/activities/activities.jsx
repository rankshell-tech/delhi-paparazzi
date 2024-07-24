import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Header from "../../components/header/header";
import "./activities.css";
import { Link } from "react-router-dom";

const demoData = {
  headImages: [
    "https://picsum.photos/1900/500",
    "https://picsum.photos/1900/500",
    "https://picsum.photos/1900/500",
  ],
  tittle: "Delhi Murder case took a wild turn",
  text:
    "Officiis error pariatur, perspiciatis ipsum officia deserunt iure provident aspernatur, praesentium dolore debitis quis harum. Reiciendis ducimus eligendi harum sequi, qui quos delectus molestiae. Consequuntur repudiandae saepe illum reiciendis asperiores, temporibus magnam vero quis odio tempora similique provident velit perferendis tenetur! Provident aliquid earum maxime incidunt impedit sed corporis placeat numquam nihil, suscipit atque odio perferendis odit recusandae illo adipisci consectetur cupiditate quaerat velit, sequi voluptas quia? Sed voluptas perspiciatis vel tempore modi similique illum, officia debitis sequi quaerat voluptate quas qui nulla, quisquam eos error dolore labore voluptates repellendus numquam est explicabo esse. Est necessitatibus libero veritatis voluptatem quos odio excepturi nisi perspiciatis nulla ipsam modi consectetur laudantium magni itaque tenetur quidem, quaerat cumque ipsum sunt dicta! Qui at vel dolor commodi earum voluptatibus unde fuga adipisci voluptas tempore sint quisquam, autem asperiores voluptates explicabo quos corporis debitis recusandae aliquid veniam repellat id optio atque itaque. Libero molestias modi rerum ratione. Inventore provident consequuntur enim eos. Temporibus magni, porro quisquam provident pariatur inventore explicabo fugit alias. At consectetur quam animi laudantium corrupti nihil! Beatae quos aspernatur nam iste illum ullam laboriosam? Rerum," +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam placeat voluptate facilis optio excepturi delectus architecto iste voluptates veniam similique, molestiae cupiditate. Rem consectetur ipsam sapiente architecto ut illo a enim magnam. Porro vel dignissimos doloribus perspiciatis dicta maiores illum, ducimus mollitia distinctio aliquam maxime quam provident soluta sed commodi pariatur, ad velit cumque consequatur? Blanditiis repudiandae in placeat nesciunt nihil ut magni rem explicabo, qui odio, quod aliquid exercitationem unde obcaecati cum non repellendus excepturi assumenda numquam natus quidem tempore, quibusdam eos doloribus. Eum aliquam vel voluptate iusto." +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam placeat voluptate facilis optio excepturi delectus architecto iste voluptates veniam similique, molestiae cupiditate. Rem consectetur ipsam sapiente architecto ut illo a enim magnam. Porro vel dignissimos doloribus perspiciatis dicta maiores illum, ducimus mollitia distinctio aliquam maxime quam provident soluta sed commodi pariatur, ad velit cumque consequatur? Blanditiis repudiandae in placeat nesciunt nihil ut magni rem explicabo, qui odio, quod aliquid exercitationem unde obcaecati cum non repellendus excepturi assumenda numquam natus quidem tempore, quibusdam eos doloribus. Eum aliquam vel voluptate iusto vero.",
  bannerImage: "https://picsum.photos/1900/500",
};

export default function Activities() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("popularity");
  const handelChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    for (let index = 0; index < 20; index++) {
      setData((prevData) => [...prevData, demoData]);
    }
  }, []);

  return (
    <div className="activitiesSearchPage">
      <Header />
      <div className="searchContainerWrapper p-3 d-flex align-items-center justify-content-center gap-3">
        <form className="searchContainer d-flex overflow-hidden">
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

      <div className="activitiesContainer d-flex gap-3 flex-column my-3 px-3">
        {data.map((activity, index) => {
          return (
            <Link
              key={index}
              className="activityCard position-relative"
              to={`/activities/${index}`}
            >
              <div className="activityCardImage">
                <img
                  src={activity.bannerImage}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="activityCardText p-2">
                <h1>{activity.tittle}</h1>
                <p>{activity.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
