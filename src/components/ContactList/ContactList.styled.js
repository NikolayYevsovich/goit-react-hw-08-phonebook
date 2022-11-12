import styled from '@emotion/styled';

export const ListOfContacts = styled.ul`
  z-index: 101;
  background: transparent;
  padding: 20px;
  border: none;
  border-radius: 16px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  outline: transparent;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  width: 600px;
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  flex-wrap: wrap;
  margin-bottom: 140px;
`;

export const ListText = styled.h2`
  text-align: center;
  font-family: cursive;
  font-size: 30px;
  z-index: 101;
  margin-bottom: 40px;
  margin-top: 60px;
`;

export const ListItem = styled.li`
  background: rgba(90, 212, 177, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.8px);
  z-index: 101;
  -webkit-backdrop-filter: blur(16.8px);
  border: 1px solid rgba(90, 212, 177, 0.3);
  width: 350px;
  color: white;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  z-index: 101;
  position: relative;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  & svg:hover {
    transform: scale(1.1);
  }
`;

export const ErrorText = styled.p`
  font-family: cursive;
  font-weight: 500;
  text-align: center;
  color: red;
  font-size: 30px;
`;
