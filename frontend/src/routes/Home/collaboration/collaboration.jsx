//collaboration.jsx

import CollaborationCard from "./collaborationCard";
import "./collaboration.css"

export default function Collaboration() {
  return (
    <div className="mainSection collaborationContainer">
      <div className="heading">
        <h1>Collaboration</h1>
      </div>
      <div className="collaborationCards">
        <div className="container">
          {[...Array(10)].map((collaboration, index) => {
            return <CollaborationCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
