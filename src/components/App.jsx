import { useEffect } from 'react';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '../Redux/Auth/auth-operations';
import { AppBar } from './AppBar/AppBar';
import { AppRoutes } from './AppRoutes/AppRoutes';
import { Container, Loader } from './App.styled';
import { Footer } from './Footer/Footer';
import { selectLoadingUserStatus } from '../Redux/Auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      {isLoadingUser ? (
        <Loader>
          <Rings
            height="350"
            width="350"
            color="#4fa94d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </Loader>
      ) : (
        <>
          <AppBar />
          <AppRoutes />
          <Footer />
        </>
      )}
    </Container>
  );
}
