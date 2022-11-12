import React from 'react';
import { useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  LoginFormBox,
  FormText,
  FormInput,
  FormLabel,
  FormButton,
  FormRedirectText,
  RedirectLink,
} from './LoginForm.styled';

export const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onLogin({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <LoginFormBox onSubmit={handleSubmit}>
      <FormText>Welcome</FormText>
      <FormLabel>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
      </FormLabel>
      <FormLabel>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
      </FormLabel>
      <FormButton type="submit">Log In</FormButton>
      <FormRedirectText>
        Not registered yet? Register here
        <RedirectLink to="/register">
          <IconContext.Provider
            value={{
              color: 'white',
              className: 'global-class-name',
              size: '25px',
            }}
          >
            <FaArrowCircleRight />
          </IconContext.Provider>
        </RedirectLink>
      </FormRedirectText>
    </LoginFormBox>
  );
};
