import styled from '@emotion/styled';

export const UserNavContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconrWrapper = styled.span`
  margin-right: 15px;
`;

export const UserNameText = styled.span`
  color: white;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 30px;
`;

export const LogOutButton = styled.button`
  margin-left: auto;
  z-index: 101;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  & svg:hover {
    transform: scale(1.1);
  }
`;
