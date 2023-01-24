import * as Styled from './Navbar.styles';
import { useState, useEffect } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const getUser = async () => {
		try {
			const { data } = await axios.get('/api/users/me');
			setUser(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleLogout = async () => {
		try {
			await axios.get('/api/auth/logout');
			setUser(null);
			toast.success('User Logged Out');
			navigate('/auth');
		} catch (err) {
			console.log(err);
		}
	};

	if (!user) return null;

	return (
		<Styled.NavbarHeader>
			<Styled.UserIcon icon={faUser} />

			<Styled.UserInfo>
				<Styled.InnerDiv>
					<Styled.UserName>{user.name}</Styled.UserName>
					<Styled.UserEmail>{user.email}</Styled.UserEmail>
					<Styled.EditButton to="/edit-profile">Edit</Styled.EditButton>
				</Styled.InnerDiv>
			</Styled.UserInfo>
			<Styled.NavItem>
				<Styled.LogoutButton type="button" onClick={handleLogout}>
					logout
				</Styled.LogoutButton>
			</Styled.NavItem>
		</Styled.NavbarHeader>
	);
};

export default Navbar;
