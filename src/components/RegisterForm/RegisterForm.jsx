import React from 'react';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowCircleRight } from 'react-icons/fa';
import {
  RegisterFormBox,
  FormText,
  FormInput,
  FormLabel,
  FormButton,
  FormRedirectText,
  RedirectLink,
} from './RegisterForm.styled';

export const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    onRegister({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterFormBox onSubmit={handleSubmit}>
      <FormText>Create Account</FormText>
      <FormLabel>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Username"
        />
      </FormLabel>
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
      <FormButton type="submit">Register</FormButton>
      <FormRedirectText>
        Already have an account? Log in here
        <RedirectLink to="/login">
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
    </RegisterFormBox>
  );
};
