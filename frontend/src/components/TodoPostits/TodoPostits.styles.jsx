import styled from 'styled-components';

export const TodoPostitsWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`;

export const TodoPostitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  justify-content: space-around;
`;

export const AddPostitHeader = styled.h2`
  text-align: center;
  opacity: 0.8;
  color: white;
  font-size: 30px;
  margin-bottom: -10px;
  text-shadow: 1.5px 1.5px black;
  @media only screen and (min-width: 600px) {
    font-size: 50px;
    margin-bottom: 0px;
  }
`;

export const AddPostitButton = styled.button`
  width: 100px;
  height: 100px;
  left: 0;
  right: 0;
  border-radius: 50%;
  border: 1px solid black;
  background: none;
  background-color: white;
  font-size: 55px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-weight: 800;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  bottom: 100px;
  bottom: 0;
  margin-top: 90px;
  margin-bottom: 60px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    background-color: #fff740;
  }
`;

// colours:
// ff65a3
// 7afcff
// feff9c
// fff740
// ff7eb9
