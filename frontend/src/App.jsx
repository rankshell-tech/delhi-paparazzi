import Header from "./components/header/header";
import "./App.css";
import HomeRoute from "./routes/Home/home";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/auth/login/login";
import Register from "./routes/auth/register/register";
import ForgotPassword from "./routes/auth/forgot-password/forgotPassword";
import Cafe from "./routes/cafe/cafe";
import ShoppingMalls from "./routes/shoppingMalls/shoppingMalls";
import SingleShoppingMallPage from "./routes/shoppingMalls/singleShoppingMallPage";
import Activities from "./routes/activities/activities";

function App() {
  return (
    <div className="appRoot">
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        {/* authentication */}
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/restaurants">
          <Route path="" element={<Cafe />} />
        </Route>
        <Route path="/shopping-mall">
          <Route path="" element={<ShoppingMalls />} />
          <Route path=":id" element={<SingleShoppingMallPage />} />
        </Route>
        <Route path="/activities">
          <Route path="" element={<Activities />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
