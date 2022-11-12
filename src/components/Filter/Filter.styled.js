import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  z-index: 10;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const FilterInput = styled.input`
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
  width: 250px;
  background: rgba(255, 255, 255, 0.1);
  padding-top: 15px;
  padding-bottom: 15px;

  &:hover {
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;
