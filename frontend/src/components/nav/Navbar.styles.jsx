import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavbarHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const UserInfo = styled.div``;

export const UserIcon = styled(FontAwesomeIcon)`
  font-size: 60px;
  color: #457b9d;
`;

export const InnerDiv = styled.div``;

export const UserName = styled.h2`
  margin: auto;
  font-size: 15px;
`;

export const UserEmail = styled.h2`
  margin: auto;
  font-size: 15px;
`;

export const EditButton = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease;

  &:hover {
    color: #457b9d;
  }
`;

export const NavItem = styled.nav``;

export const LogoutButton = styled.button`
  background-color: #e76f51;
  border: none;
  font-size: 15px;
  font-weight: 600;
  color: white;
  padding: 10px;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e63946;
  }
`;
