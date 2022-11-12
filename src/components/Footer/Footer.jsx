import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FooterBar, FoterText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBar>
      <FoterText>Copyright © 2022. Developed by Nikolay Yevsovich</FoterText>
      <a
        href="https://github.com/NikolayYevsovich"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconContext.Provider
          value={{
            color: 'white',
            className: 'global-class-name',
            size: '25px',
          }}
        >
          <FaGithub />
        </IconContext.Provider>
      </a>
    </FooterBar>
  );
};
