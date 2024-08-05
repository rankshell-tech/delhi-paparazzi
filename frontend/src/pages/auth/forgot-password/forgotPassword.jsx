import Header from "../../../components/header/header";
import { Button, TextField } from "@mui/material";
// import "./login.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import "./../login/login.css";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="forgotPasswordRoute">
      <Header />
      <div className="forgotPasswordContainer ">
        <div className="forgotPasswordForm shadow-lg">
          <h1>Forgot Password</h1>
          <p>Please Reset your Password</p>
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
            {/* Send OTP */}
            <div className="d-flex align-content-end justify-content-end">
              <Button
                variant="contained"
                color="success"
                className="mb-3"
                type="button"
              >
                Send OTP
              </Button>
            </div>

            <TextField
              className="mb-3"
              fullWidth
              label="OTP"
              variant="outlined"
              type="text"
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
            <TextField
              className="mb-3"
              fullWidth
              label="Confirm Password"
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

            <Button
              variant="contained"
              fullWidth
              color="primary"
              className="mt-3"
              type="submit"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
