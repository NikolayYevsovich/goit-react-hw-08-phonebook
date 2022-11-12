import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: 10;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  color: white;
  max-width: 1200px;
  padding-top: 45px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const OpenButton = styled.button`
  position: relative;
  z-index: 100;
  background: transparent;
  width: 100px;
  padding: 1em;
  margin-bottom: 20px;
  border: none;
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  outline: transparent;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease-in-out;
  font-family: cursive;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;

export const FilterWrapper = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  z-index: 100;
  position: relative;
  display: inline-block;
  margin-right: auto;
`;

export const FilterText = styled.div`
  z-index: 100;
  font-size: 20px;
  font-family: cursive;
  text-align: center;
  margin-bottom: 10px;
`;

export const CreateContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const CloseButton = styled.button`
  z-index: 101;
  position: absolute;
  top: 245px;
  left: 820px;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  & svg:hover {
    transform: scale(1.1);
  }
`;
