import React from 'react';
import {
  Container,
  GetStartedBox,
  GetStartedText,
  GetStartedButton,
  TextContainer,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <GetStartedBox>
        <TextContainer>
          Your personal contact book App <br />
          <GetStartedText>Save all your contacts in one place</GetStartedText>
        </TextContainer>
        <GetStartedButton to="/login">GET STARTED</GetStartedButton>
      </GetStartedBox>
    </Container>
  );
};
