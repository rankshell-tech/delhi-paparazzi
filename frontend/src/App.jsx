import Header from "./components/header/header";
import "./App.css";
import HomeRoute from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import ForgotPassword from "./pages/auth/forgot-password/forgotPassword";
import Cafe from "./pages/cafe/cafe";
import ShoppingMalls from "./pages/shoppingMalls/shoppingMalls";
import SingleShoppingMallPage from "./pages/shoppingMalls/singleShoppingMallPage";
import Activities from "./pages/activities/activities";
import Activity from "./pages/activities/activity";
import AddShoppingMall from "./pages/superAdmin/addShoppingMall";
import AddRestaurant from "./pages/superAdmin/addRestaurant";
import AddActivity from "./pages/superAdmin/addActivity";

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
          <Route path=":id" element={<Activity />} />
        </Route>
        <Route path="/super-admin">
          <Route path="add-shopping-mall" element={<AddShoppingMall />} />
          <Route path="add-restaurant" element={<AddRestaurant />} />
          <Route path="add-activity" element={<AddActivity />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
