import * as Styled from './EditProfileForm.styles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const EditProfileForm = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('/api/users/me');
				setUser(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	const updateUserInfo = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const updateProfile = async e => {
		e.preventDefault();
		try {
			const res = await axios.put('/api/users/me', user);
			toast.success('Profile updated');
			setUser(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Styled.EditProfileFormWrapper>
			<Styled.EditProfileLink to="/">
				<Styled.Arrow icon={faArrowLeft} />
				Home
			</Styled.EditProfileLink>
			<Styled.FormWrapper>
				<Styled.FormTitle>Edit Profile</Styled.FormTitle>
				<Styled.Form onSubmit={updateProfile}>
					<Styled.FormLabel htmlFor="name">
						Name
						<Styled.FormInput
							type="text"
							name="name"
							placeholder="Full Name"
							required
							value={user.name}
							onChange={updateUserInfo}
						/>
					</Styled.FormLabel>

					<Styled.FormLabel htmlFor="email">
						Email
						<Styled.FormInput
							type="email"
							name="email"
							placeholder="email"
							required
							value={user.email}
							onChange={updateUserInfo}
						/>
					</Styled.FormLabel>

					<Styled.Button type="submit">Save</Styled.Button>
				</Styled.Form>
			</Styled.FormWrapper>
		</Styled.EditProfileFormWrapper>
	);
};

export default EditProfileForm;
