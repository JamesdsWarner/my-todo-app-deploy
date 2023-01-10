import styled from 'styled-components';

export const AuthWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  max-width: 450px;
  width: 90%;
  margin: auto;
  align-self: center;
  padding-bottom: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

    > * {
    &:first-child {
      margin-bottom: 10px;
    }
  }
  

  @media only screen and (min-width: 675px) {
    max-width: 550px;
    gap: 40px;
    padding: 0 60px 50px;
    flex-direction: row;
    margin-top: 20vh;
    > * {
    &:first-child {
      margin-bottom: 40px;
    }
  }
  }
`;

export const FormWrapper = styled.div`
  width: 250px;
  margin: auto;

  @media only screen and (min-width: 675px) {
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
