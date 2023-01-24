import Login from '../components/auth/Login/Login.component';
import Register from '../components/auth/Register/Register.component';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../components/auth/Auth.styles';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import GuestButton from '../components/GuestButton/GuestButton.component';
import { Link } from 'react-router-dom';

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
			<Link to="/guest">
				<GuestButton>Continue as guest</GuestButton>
			</Link>
			<Styled.AuthBoxWrapper>
				<Login />
				<Register />
			</Styled.AuthBoxWrapper>
		</Styled.AuthWrapper>
	);
};

export default Auth;
