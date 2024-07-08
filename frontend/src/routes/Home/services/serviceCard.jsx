import "./serviceCard.css";

export default function ServiceCard({ text, image ="https://picsum.photos/250/350"  }) {
  return (
    <div className="serviceCard">
      <div className="image">
        <img src= {image}
         alt={text} />
      </div>
      <div className="textContainer">
        <div className="text">{text}</div>
        <div className="button">Contact</div>
      </div>
    </div>
  );
}
