import Login from '../components/auth/Login/Login.component';
import Register from '../components/auth/Register/Register.component';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../components/auth/Auth.styles';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const Auth = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <Styled.AuthWrapper>
      <Login />
      <Register />
    </Styled.AuthWrapper>
  );
};

export default Auth;
