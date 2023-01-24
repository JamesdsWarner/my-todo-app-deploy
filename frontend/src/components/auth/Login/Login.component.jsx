import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import * as Styled from '../Auth.styles';

const Login = () => {
	const navigate = useNavigate();
	const login = async e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		try {
			const res = await axios.post(
				'/api/auth/login',
				{
					email,
					password,
				},
				{ withCredentials: true, credentials: 'include' }
			);

			navigate('/');

			toast.success('Login Success');
		} catch (err) {
			console.log(err);
			toast.error('Login Failed');
		}
	};
	return (
		<Styled.FormWrapper>
			<Styled.FormTitle>Login</Styled.FormTitle>
			<Styled.Form onSubmit={login}>
				<Styled.FormLabel htmlFor="email">
					Email
					<Styled.FormInput type="email" name="email" placeholder="email" required />
				</Styled.FormLabel>

				<Styled.FormLabel htmlFor="password">
					Password
					<Styled.FormInput type="password" name="password" placeholder="password" required />
				</Styled.FormLabel>
				<Styled.Button type="submit">Login</Styled.Button>
			</Styled.Form>
		</Styled.FormWrapper>
	);
};

export default Login;
