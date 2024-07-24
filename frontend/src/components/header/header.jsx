import { Link } from "react-router-dom";
import logo from "./../../assets/delhi logo.png";
export default function Header() {
  return (
    <header
      className=" d-flex justify-content-between align-items-center "
      style={{
        backgroundColor: "var(--logo-background-color)",
      }}
    >
      <div className="logo">
        <img height={"74px"} src={logo} alt="delhi_paparazzi" />
      </div>
      <nav
        className="nav text-decoration-none d-flex justify-content-between align-items-center gap-4 px-5"
        style={{
          color: "#000",
        }}
      >
        <Link
          style={{
            color: "#000",
          }}
          className=" text-decoration-none"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            color: "#000",
          }}
          className=" text-decoration-none"
          to="./about"
        >
          About
        </Link>
        <Link
          style={{
            color: "#000",
          }}
          className=" text-decoration-none"
          to="./contact"
        >
          Contact
        </Link>
        <Link
          style={{
            color: "#000",
          }}
          className=" text-decoration-none"
          to="./restaurants"
        >
          Restaurants
        </Link>
        <Link
          style={{
            color: "#000",
          }}
          className=" text-decoration-none"
          to="./shopping-mall"
        >
          Shopping Malls
        </Link>
        <Link
          style={{
            color: "#000",
          }}
          className=" text-decoration-none"
          to="./events"
        >
          Events
        </Link>
        <Link
          className=" text-decoration-none"
          to="/auth/login"
          style={{
            padding: "10px 30px",
            backgroundColor: "var(--primary-color)",
            color: "var(--second-secondary-color)",
          }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
