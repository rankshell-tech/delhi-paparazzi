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
import "./../login/login.css"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="registerRoute">
      <Header />
      <div className="registerContainer ">
        <div className="registerForm shadow-lg">
          <h1>Register</h1>
          <p>Register to your account</p>
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
            {/* Name */}
            <TextField
              className="mb-3"
              fullWidth
              label="Name"
              variant="outlined"
              type="text"
              required
            />
            {/* DOB */}
            <DatePicker
              className="mb-3"
              required

              label="Date of Birth"
              variant="outlined"
              slotProps={{ textField: { fullWidth: true, required:true } }}
            />

            <div className="d-flex flex-column">
              <div className="form-check d-flex gap-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label text-start" htmlFor="flexCheckDefault">
                  Please accept our terms and conditions before registering.
                </label>
              </div>
              <Link to="/auth/login">Already have an account?</Link>
            </div>
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
