import { Button, TextField } from "@mui/material";
import Header from "../../../components/header/header";
import "./login.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginRoute">
      <Header />
      <div className="loginContainer ">
        <div className="loginForm shadow-lg">
          <h1>Welcome Back!</h1>
          <p>Log in to your account</p>
          <hr />

          <form className="form ">
            <TextField
              className="mb-3"
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
            />
            {/* password with eye  */}
            <TextField
              className="mb-3"
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <a href="/auth/forgot-password">Forgot Password?</a>
            </div>
            <Button
              className="mt-3"
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
          {/* <hr /> */}
          <div className="d-flex align-content-center justify-content-center">
            <p>Don't have an account?</p>
            <a href="/auth/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
