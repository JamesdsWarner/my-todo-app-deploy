import styled from 'styled-components';

export const AuthWrapper = styled.div`
  background-color: #fffcf7;
  border-radius: 8px;
  max-width: 350px;
  width: 90%;
  margin: auto;
  align-self: center;
  padding-bottom: 50px;
  padding-top: 15px;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;

  > * {
    &:first-child {
      margin-bottom: 40px;
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
  width: 250px;
  margin: auto;

  @media only screen and (min-width: 600px) {
    width: 400px;
    margin: 0;
  }
`;

export const FormTitle = styled.h2`
  font-size: 45px;
  margin-bottom: 17px;
  margin-top: 20px;
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
  border-radius: 3px;
  max-width: 250px;
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
