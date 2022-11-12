import styled from '@emotion/styled';

export const FooterBar = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: rgba(236, 222, 234, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.8px);
  -webkit-backdrop-filter: blur(3.8px);
  border: 1px solid rgba(236, 222, 234, 0.59);
  margin: 0;
  width: 100%;
  // margin-top: 200px;
`;

export const FoterText = styled.p`
  color: white;
  margin-right: 10px;
`;
