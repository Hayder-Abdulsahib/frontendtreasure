import { signIn } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Signin = () => {
  const userIn = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "", //we can leave this empty without the username and the password in this case if we want to
    showPassword: false,
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
    dispatch(signIn(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>SignIn Form</h1>
      <div class="col-sm-3">
        <label className="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          placeholder="enter username"
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="enter password"
          className="form-control"
        />
      </div> */}
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
      <button type="submit" className="btn btn-info float-right">
        SignIn
      </button>
      {!userIn && (
        <div>
          <br />
          <Link to={"/signup"}>SignUp</Link>
        </div>
      )}
    </form>
  );
};

export default Signin;
