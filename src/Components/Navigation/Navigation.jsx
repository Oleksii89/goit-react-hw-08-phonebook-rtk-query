import React from 'react';
import {
  StyledHeader,
  StyledNav,
  StyledNavLink,
  StyledNavList,
  StyledNavListAuth,
  StyledNavListUnAuth,
} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
import UserMenu from 'Components/UserMenu/UserMenu';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
        </StyledNavList>

        {authenticated ? (
          <StyledNavListAuth>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu />
          </StyledNavListAuth>
        ) : (
          <StyledNavListUnAuth>
            <li>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </li>
          </StyledNavListUnAuth>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Navigation;
