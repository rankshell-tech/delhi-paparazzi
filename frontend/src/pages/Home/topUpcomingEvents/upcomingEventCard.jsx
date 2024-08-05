import "./upcomingEventCard.css";

export default function UpcomingEventCard({
  tittle = "Delhi Jazz Festival",
  desc = "Festival of music by Musicians for Music lovers",
  date = "19.05.2024 - 23.05.2024",
  image = "https://picsum.photos/1080/350",
}) {
  return (
    <div className="eventCard">
      <div className="image">
        <img src={image} alt="event" />
        <div className="overlay"></div>
      </div>
      <div className="textContainer">
        <div className="text">
          <div className="texts">
            <h1>{tittle}</h1>
            <p className="desc">{desc}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
