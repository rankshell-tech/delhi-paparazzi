import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./shoppingMallReviews.css"

export default function ShoppingMallReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <div className="shoppingMallReviews">
      <h1>Shopping Mall Reviews</h1>
      <form className="addComment d-flex gap-2 align-items-center p-4">
        <TextField label="Write a review" variant="outlined" />
        <Button variant="contained" color="primary">
          Add
        </Button>
      </form>
      <div className="reviewsContainerWrapper d-flex flex-column gap-2 p-3">
        {reviews.map((review, index) => {
          return (
            <div key={index} className="reviewContainer d-flex gap-2">
              <div className="userProfilePic overflow-hidden rounded-circle">
                <img
                  src={`https://picsum.photos/50?random=${index}`}
                  alt="user profile"
                />
              </div>
              <div className="reviewContent">
                <div className="email">
                  <span>{review.email}</span>
                </div>
                <div className="review">{review.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
