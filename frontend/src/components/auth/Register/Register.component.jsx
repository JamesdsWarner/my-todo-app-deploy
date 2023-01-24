import axios from 'axios';
import toast from 'react-hot-toast';
import * as Styled from '../Auth.styles';

const Register = () => {
	const register = async e => {
		e.preventDefault();
		const user = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		try {
			await axios.post('/api/auth/register', user, {
				withCredentials: true,
				credentials: 'include',
			});
			toast.success('Register Success');
		} catch (err) {
			console.log(err);
			toast.error('Register Failed');
		}
	};
	return (
		<Styled.FormWrapper>
			<Styled.FormTitle>Register</Styled.FormTitle>
			<Styled.Form onSubmit={register}>
				<Styled.FormLabel htmlFor="name">
					Name
					<Styled.FormInput type="text" name="name" placeholder="Full Name" required />
				</Styled.FormLabel>

				<Styled.FormLabel htmlFor="email">
					Email
					<Styled.FormInput type="email" name="email" placeholder="email" required />
				</Styled.FormLabel>

				<Styled.FormLabel htmlFor="password">
					Password
					<Styled.FormInput type="password" name="password" placeholder="password" required />
				</Styled.FormLabel>
				<Styled.Button type="submit">Register</Styled.Button>
			</Styled.Form>
		</Styled.FormWrapper>
	);
};

export default Register;
