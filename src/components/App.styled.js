import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  z-index: 100;
  position: relative;
  // height: 1200px;
  margin-left: auto;
  margin-right: auto;
  // background-image: linear-gradient(
  //   43deg,
  //   #4158d0 0%,
  //   #c850c0 46%,
  //   #ffcc70 100%
  // );
`;

export const Loader = styled.div`
  & svg {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 800px;
  }
`;
