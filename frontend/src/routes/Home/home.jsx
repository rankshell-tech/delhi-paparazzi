import Header from "../../components/header/header";
import "./home.css";
import HeroSection from "./HeroSection/heroSection";
import Services from "./services/services";


export default function HomeRoute() {
  return (
    <div className="homeRoute">
      <Header />
      <HeroSection />
      <Services />
      
    </div>
  );
}
