//topUpComingEvents.jsx

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UpcomingEventCard from "./upcomingEventCard";
import "./topUpcomingEvents.css"

export default function TopUpComingEvents() {
  return (
    <div className="mainSection upcomingEvent">
      <div className="heading">
        <h1>Top Upcoming Events</h1>
      </div>
      <div className="eventContainer">
        <Carousel autoPlay = {true} showArrows = {false} infiniteLoop = {true}>
          <UpcomingEventCard />
          <UpcomingEventCard />
          <UpcomingEventCard />
        </Carousel>
      </div>
    </div>
  );
}
