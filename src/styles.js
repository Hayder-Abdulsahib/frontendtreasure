import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Center = styled.h1`
  text-align: center;
`;

export const Logo = styled(Link)`
  img {
    width: 4rem;
  }
`;
// export const TresureButton = styled(Link)`
//   width: 8rem;
// `;

export const NavItem = styled(NavLink)`
  color: #0a46c5;
  padding: 0.25em 1em;

  &.active {
    color: #ff0000;
  }
`;

export const SignupButton = styled(Link)`
  width: 8rem;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    
    background-color: #dfdfdf
  }
`;
