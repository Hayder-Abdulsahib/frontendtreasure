import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Center = styled.h1`
  text-align: center;
`;

export const Logo = styled(Link)`
  img {
    width: 8rem;
  }
`;
// export const TresureButton = styled(Link)`
//   width: 8rem;
// `;

export const NavItem = styled(NavLink)`
  color: "red";
  padding: 0.25em 1em;

  &.active {
    color: "white";
  }
`;

export const SignupButton = styled(Link)`
  width: 8rem;
`;
