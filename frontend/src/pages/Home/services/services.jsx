// services.jsx
const services = [
  {
    tittle: "Paid Partnership",
  },
  {
    tittle: "Branding",
  },
  {
    tittle: "Collaboration",
  },
  {
    tittle: "Video Editing",
  },
];

import "./service.css"
import ServiceCard from "./serviceCard";
export default function Services() {
  return (
    <div className=" mainSection services">
      <div className="heading">
        <h1>Services we offer</h1>
      </div>
      <div className="cardContainer">
        {services.map((service, index) => {
          return <ServiceCard key={index} text={service.tittle} />;
        })}
      </div>
    </div>
  );
}
