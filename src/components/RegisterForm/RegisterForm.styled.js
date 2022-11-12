import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const RegisterFormBox = styled.form`
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const FormText = styled.p`
  z-index: 10;
  font-size: 35px;
  font-family: cursive;
  text-align: center;
  margin-top: 15px;
`;

export const FormInput = styled.input`
  z-index: 10;
  background: transparent;
  padding: 1em;
  margin-bottom: 20px;
  border: none;
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  outline: transparent;
  width: 300px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const FormLabel = styled.label`
  z-index: 10;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const FormButton = styled.button`
  z-index: 10;

  background: transparent;
  width: 100px;
  padding: 1em;
  margin-bottom: 20px;
  border: none;
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  outline: transparent;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const FormRedirectText = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const RedirectLink = styled(NavLink)`
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  & svg:hover {
    transform: scale(1.1);
  }
`;
