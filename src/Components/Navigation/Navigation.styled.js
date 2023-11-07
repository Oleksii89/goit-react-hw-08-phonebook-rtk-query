import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: grey;
  border: 1px solid black;
  border-radius: 15px;
  display: inline-block;
  padding: 15px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.4s;

  &.active {
    border: 2px solid white;
    background-color: grey;
    color: black;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
`;
export const StyledNavListUnAuth = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-left: auto;
`;
export const StyledNavListAuth = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-left: auto;
`;

export const StyledHeader = styled.header`
  box-shadow: 5px 10px 8px 10px grey;
  margin-bottom: 50px;
`;
