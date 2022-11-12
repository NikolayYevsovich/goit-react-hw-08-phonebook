import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const PageLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);
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

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
