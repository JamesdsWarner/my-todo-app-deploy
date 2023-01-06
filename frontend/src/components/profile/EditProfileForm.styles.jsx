import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EditProfileLink = styled(Link)`
  padding-top: 30px;
  justify-content: center;
  text-decoration: none;
  color: black;
  display: flex;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #457b9d;
  }

  @media only screen and (min-width: 600px) {
    padding-top: 40px;
  }
`;

export const Arrow = styled(FontAwesomeIcon)`
  align-self: center;
  @media only screen and (min-width: 600px) {
    align-self: start;
  }
`;

export const EditProfileFormWrapper = styled.div`
  background-color: #fffcf7;
  border-radius: 8px;
  max-width: 350px;
  width: 90%;
  margin: auto;
  align-self: center;
  padding-bottom: 50px;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;

  > * {
    &:first-child {
    }
  }

  @media only screen and (min-width: 600px) {
    max-width: 550px;
    gap: 40px;
    padding: 0 60px 50px;
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
  width: 260px;
  margin: auto;

  @media only screen and (min-width: 600px) {
    width: 400px;
    margin: 0;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 17px;
  margin-top: 20px;
  font-size: 45px;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 25px;
`;

export const FormInput = styled.input`
  background-color: #ced4da;
  border: none;
  font-size: 23px;
  color: black;
  line-height: 43px;
  border-radius: 3px; ;
`;

export const Button = styled.button`
  border: 0.85px solid grey;
  width: 100px;
  font-size: 23px;
  height: 40px;
  border-radius: 3px;
  background-color: #fef9ff;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #f2dfd7;
    cursor: pointer;
  }
`;
