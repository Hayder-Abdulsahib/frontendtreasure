import { Logo, NavItem } from "../styles";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { signOut } from "../store/actions/authActions";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut(history));
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
          <NavItem className="nav-item" to="/">
            <h5>Hello {user.username}</h5>
            <button onClick={handleSignOut}>Sign Out</button>
          </NavItem>
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
