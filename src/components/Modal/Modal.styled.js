import styled from '@emotion/styled';
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
export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const CloseButton = styled.button`
  z-index: 101;
  position: absolute;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  & svg:hover {
    transform: scale(1.1);
  }
`;
