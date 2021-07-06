import { signUp } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Signup = () => {
  const userIn = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleClickShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>SignUp Form</h1>
      <div className="col-sm-3">
        <label className="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>

      <div>
        <br />
        <InputLabel htmlFor="standard-adornment-password">
          Enter your Password
        </InputLabel>
        <Input
          type={user.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={user.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {user.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <br />
      <div className="col-sm-3">
        <label className="form-label">email</label>
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
          className="form-control"
        />
      </div>
      <div className="col-sm-3">
        <label className="form-label">firstName</label>
        <input
          type="text"
          value={user.firstName}
          onChange={handleChange}
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="col-sm-3">
        <label className="form-label">lastName</label>
        <input
          type="text"
          value={user.lastName}
          onChange={handleChange}
          name="lastName"
          className="form-control"
        />
      </div>
      <br />

      <button type="submit" className="btn btn-info float-right">
        SignUp
      </button>

      {!userIn && (
        <div>
          <br />
          <Link to={"/signin"}>SignIn</Link>
        </div>
      )}
    </form>
  );
};

export default Signup;
