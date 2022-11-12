import { useSelector } from 'react-redux';
import { selectIsLogin } from '../Redux//Auth/auth-selectors';

export const useLogin = () => {
  const result = useSelector(selectIsLogin);
  return result;
};
