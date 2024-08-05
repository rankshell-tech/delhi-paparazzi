import Header from "../../components/header/header";
import "./home.css";
import HeroSection from "./HeroSection/heroSection";
import Services from "./services/services";
import TopUpComingEvents from "./topUpcomingEvents/topUpComingEvents";
import TopRestaurants from "./topResturants/topResturants";
import Collaboration from "./collaboration/collaboration";

export default function HomeRoute() {
  return (
    <div className="homeRoute">
      <Header />
      <HeroSection />
      <Services />
      <TopUpComingEvents />
      <TopRestaurants />
      <Collaboration />
    </div>
  );
}
