import { StyledButton } from 'Components/ContactForm/ContactForm.styled.';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authSlice';
import { StyledUserMenuDiv, StyledUserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <StyledUserMenuDiv>
      <StyledUserName>Welcome, {user.name}!</StyledUserName>
      <StyledButton onClick={onLogOut}>Log Out</StyledButton>
    </StyledUserMenuDiv>
  );
};

export default UserMenu;
