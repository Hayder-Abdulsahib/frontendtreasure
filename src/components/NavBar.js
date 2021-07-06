import { Logo, NavItem } from "../styles";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { signOut } from "../store/actions/authActions";

import { toast } from "react-toastify";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut(history));
    toast(`Goodbye ${user.username}`);
  };
  return (
    <div className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src="https://www.pikpng.com/pngl/m/180-1800149_cartoon-treasure-chest-treasure-hunt-icon-png-clipart.png"
          alt="logo"
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <NavItem className="nav-item" exact to="/">
              <p>Hello {user.username}</p>
            </NavItem>
            <NavItem className="nav-item" to="/">
              <button
                onClick={handleSignOut}
                className="btn btn-info float-right"
              >
                Sign Out
              </button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem className="nav-item" to="/signin">
              SignIn
            </NavItem>
            <NavItem className="nav-item" to="/signup">
              SignUp
            </NavItem>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
