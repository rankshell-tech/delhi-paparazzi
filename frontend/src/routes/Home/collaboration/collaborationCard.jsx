import "./collaborationCard.css"

export default function CollaborationCard({
  image = "https://therankshell.com/Images/rankshell.webp",
  name = "Rankshell",
}) {
  return (
    <div className="collaborationCard">
      <div className="image">
        <img src={image} alt="collaboration" />
      </div>
      <div className="name">
        <h4>{name}</h4>
      </div>
    </div>
  );
}
