import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Auth/auth-operations';
import { useLogin } from '../../Hooks/useLogin';
import { selectUserName } from '../../Redux/Auth/auth-selectors';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { UserNavContainer, UserNameText, LogOutButton } from './UserNav.styled';
import { IconContext } from 'react-icons';

export const UserNav = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const onLogout = () => {
    dispatch(logout());
  };
  const isLogin = useLogin();

  return (
    <UserNavContainer>
      {isLogin && (
        <>
          <IconContext.Provider
            value={{
              color: 'white',
              className: 'global-class-name',
              size: '25px',
            }}
          >
            <FaUserCircle />
          </IconContext.Provider>
          <UserNameText>{userName}</UserNameText>
          <LogOutButton onClick={onLogout}>
            <IconContext.Provider
              value={{
                color: 'white',
                className: 'global-class-name',
                size: '25px',
              }}
            >
              <AiOutlineLogout />
            </IconContext.Provider>
          </LogOutButton>
        </>
      )}
    </UserNavContainer>
  );
};
