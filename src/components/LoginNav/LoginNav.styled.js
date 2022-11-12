import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoginNavContainer = styled.div`
  padding-top: 15px;
  margin-right: 600px;
  padding-bottom: 20px;
`;

export const PageLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  padding-bottom: 20px;
  color: white;
  font-weight: 500;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 20px;
  padding-bottom: 15px;
  &:hover {
    border-bottom: 2px solid white;
  }
  &.active {
    border-bottom: 2px solid white;
  }
`;

export const AppLogo = styled(NavLink)`
  width: 50px;
  z-index: 1100;
  position: inherit;
`;
