import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  font-size: 65px;
  font-family: cursive;
  color: white;
  position: relative;
  z-index: 100;
`;

export const GetStartedBox = styled.div`
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: auto;
  padding-bottom: 30px;
`;

export const GetStartedText = styled.span`
  font-size: 30px;
  margin-bottom: 0;
`;

export const GetStartedButton = styled(NavLink)`
  width: 100px;
  z-index: 100;
  border: 1px solid white;
  border-radius: 50px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18.4px);
  -webkit-backdrop-filter: blur(18.4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 500px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const TextContainer = styled.p`
  z-index: 100;
  margin-bottom: 0;
`;
